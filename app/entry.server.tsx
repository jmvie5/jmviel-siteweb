import type { AppLoadContext, EntryContext } from "react-router";
import { ServerRouter } from "react-router";
import { isbot } from "isbot";
import { renderToReadableStream } from "react-dom/server";
import {createInstance} from "i18next";
import i18nextServer from "./i18next.server";
import {I18nextProvider, initReactI18next} from "react-i18next";
import Backend from "i18next-fs-backend/cjs";
import { resolve } from "node:path";
import i18n from "./i18n"; // your i18n configuration file

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  routerContext: EntryContext,
  _loadContext: AppLoadContext
) {
    let i18nextInstance = createInstance();
    let lng = await i18nextServer.getLocale(request);
    let namespaces = i18nextServer.getRouteNamespaces(routerContext);

    await i18nextInstance.use(initReactI18next).use(Backend).init({
        ...i18n,
        lng,
        ns: namespaces,
        backend: {
            loadPath: resolve("./public/locales/{{lng}}/{{ns}}.json"),
        }
    })

  let shellRendered = false;
  const userAgent = request.headers.get("user-agent");

  const body = await renderToReadableStream(
    <I18nextProvider i18n={i18nextInstance}>
        <ServerRouter context={routerContext} url={request.url}/>,
    </I18nextProvider>,
    {
      onError(error: unknown) {
        responseStatusCode = 500;
        // Log streaming rendering errors from inside the shell.  Don't log
        // errors encountered during initial shell rendering since they'll
        // reject and get logged in handleDocumentRequest.
        if (shellRendered) {
          console.error(error);
        }
      },
    }
  );
  shellRendered = true;

  // Ensure requests from bots and SPA Mode renders wait for all content to load before responding
  // https://react.dev/reference/react-dom/server/renderToPipeableStream#waiting-for-all-content-to-load-for-crawlers-and-static-generation
  if ((userAgent && isbot(userAgent)) || routerContext.isSpaMode) {
    await body.allReady;
  }

  responseHeaders.set("Content-Type", "text/html");
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
