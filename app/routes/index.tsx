import type { Route } from "./+types/index";
import i18nServer from "~/i18next.server";

  export async function loader({ request, params }: Route.LoaderArgs) {

    const locale = params.lang 
        ? params.lang 
        : await i18nServer.getLocale(request)

    const t = await i18nServer.getFixedT(locale)

    const title = "Jean-Michel Viel"
    const description = t("index-desc")

  
    return { title, description };
}


export function meta({ matches }: Route.MetaArgs) {

    type LoaderDataType = {
        title:string,
        description: string
    }

    const loaderData:LoaderDataType = matches[matches.length-1]?.data as LoaderDataType

    return [
        { title: loaderData.title },
        { name: "description", content: loaderData.description },
        { property: "og:title", content: loaderData.title},
        { property: "og:type", content:"website" },

    ];
};

const IndexPage = () => {
    return (
        <>
        </>
    );
};

export default IndexPage;