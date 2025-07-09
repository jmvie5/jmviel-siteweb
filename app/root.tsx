import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
  redirect,
} from 'react-router'

import type { Route } from './+types/root'
import './app.css'

import { useChangeLanguage } from 'remix-i18next/react'
import { useTranslation } from 'react-i18next'
import i18next from '~/i18next.server'
import i18nConfig, { urlTranslationSearchString } from './i18n'

import aboutImage from '~/assets/images/a-propos/JM_Lac.webp'
import aboutImageSm from '~/assets/images/a-propos/JM_Lac_sm.webp'
import musicImage from '~/assets/images/guitar.webp'
import infoImage from '~/assets/images/coding.webp'

export async function loader({ request, params }: Route.LoaderArgs) {
  const { supportedLngs } = i18nConfig

  let locale = params.lang ? params.lang : await i18next.getLocale(request)

  if (!supportedLngs.includes(locale)) {
    locale = await i18next.getLocale(request)
  }

  const t = await i18next.getFixedT(locale)

  const url = new URL(request.url)

  const page = url.pathname.split('/')[url.pathname.split('/').length - 1]
  const searchParams = url.searchParams

  // check if route exists across lng and redirect with the good url if necessary (/locale/route)
  if (page && !supportedLngs.includes(page)) {
    let pageFound = false
    for (const [searchLocale, pages] of Object.entries(
      urlTranslationSearchString,
    )) {
      for (const [url, tString] of Object.entries(pages)) {
        if (page === url) {
          pageFound = true
          // redirect only if page was found in another locale
          // if page found in current local no redirect is necessary
          if (params.lang && supportedLngs.includes(params.lang)) {
            // to avoid multiple redirection if a page is in both locales (i.e. /fractions, /legal)
            // we redirect only if transation with current lang param is different from current page url
            if (t(tString) !== page) {
              // user tried to go to a valid page in the wrong locale in the url,
              // locale in url is king so we redirect 301 (Moved Permanently)
              if (searchParams.size) {
                return redirect(
                  `/${params.lang}/${t(tString)}?${searchParams.toString()}`,
                  301,
                )
              } else {
                return redirect(`/${params.lang}/${t(tString)}`, 301)
              }
            }
          } else {
            // user went to the page without the /locale/, we add the locale = redirect 302
            if (searchParams.size) {
              return redirect(
                `/${searchLocale}/${url}?${searchParams.toString()}`,
                302,
              )
            } else {
              return redirect(`/${searchLocale}/${url}`, 302)
            }
          }

          break
        }
      }
      if (pageFound) break
    }
    if (!pageFound) {
      // this redirect works when user goes to a page not found without locale
      // if user goes to a page not found with a locale provided it goes through splat route (/routes/$.tsx)
      if (searchParams.size) {
        throw redirect(`/${locale}?${searchParams.toString()}`, 302)
      } else {
        throw redirect(`/${locale}`, 302)
      }
    }
  } else {
    // user went to landing page without locale
    if (!params.lang) {
      if (searchParams.size) {
        return redirect(`/${locale}?${searchParams.toString()}`, 302)
      } else {
        return redirect(`/${locale}`, 302)
      }
    }
  }

  return { locale }
}

export const handle = {
  i18n: ['translation'],
}

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
  {
    rel: 'preload',
    href: aboutImage,
    as: 'image',
  },
  {
    rel: 'preload',
    href: aboutImageSm,
    as: 'image',
  },
  {
    rel: 'preload',
    href: musicImage,
    as: 'image',
  },
  {
    rel: 'preload',
    href: musicImage,
    as: 'image',
  },
  {
    rel: 'preload',
    href: infoImage,
    as: 'image',
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  // Get the locale from the loader
  const loaderData = useRouteLoaderData<typeof loader>('root')
  const locale = loaderData?.locale || 'fr'
  const { i18n } = useTranslation()

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  useChangeLanguage(locale)

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-slate-950">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
