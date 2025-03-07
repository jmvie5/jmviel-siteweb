import { Outlet } from "react-router";
import { github_white } from "~/assets/images/informatique";
import linkedinLogo from "~/assets/images/informatique/linkedin.webp"
import type { Route } from "./+types/SiteLayout";
import { twMerge } from "tailwind-merge";
import indexImage from "../assets/images/mascarade.webp"
import aboutImage from "../assets/images/a-propos/JM_Lac_sm.webp"
import informatiqueImage from "../assets/images/coding.webp"
import musicImage from "../assets/images/guitar.webp"
import NavBar from "./NavBar";
import i18nConfig from "~/i18n";
import i18nServer from "~/i18next.server";
import { urlTranslationSearchString } from "~/i18n";


export async function loader({ request, params }: Route.LoaderArgs) {

    const locale = params.lang 
        ? params.lang 
        : await i18nServer.getLocale(request)

    const t = await i18nServer.getFixedT(locale)
  
    const url = new URL(request.url);
    let page = url.pathname.split('/')[url.pathname.split('/').length - 1];
    
    if (i18nConfig.supportedLngs.includes(page)) page = "";

    const menuLinks = [
        {
          name: t("Home"),
          url: `/${locale}/`,
        },
        {
          name: t("About"),
          url: `/${locale}/${t(urlTranslationSearchString['en']['about'])}`,
        },
        {
          name: t("Music"),
          url: `/${locale}/${t(urlTranslationSearchString['en']['music'])}`,
        },
        {
          name: t("Computer Science"),
          url: `/${locale}/${t(urlTranslationSearchString['en']['computer-science'])}`,
        }
    ]

    const allPageData : { [id: string] : {
        img:string,
        isDark:boolean
    }; } = {
        "" : {
            img: indexImage,
            isDark: true
        },
        "a-propos" : {
            img: aboutImage,
            isDark: true
        },
        "informatique" : {
            img: informatiqueImage,
            isDark: false
        },
        "musique" : {
            img: musicImage,
            isDark: false
        }, 
    }
    const pageData = allPageData[t(urlTranslationSearchString[locale][page], {lng:"fr"})]
    
    return { page, locale, pageData, menuLinks};
  }
  

export default function SiteLayout({
    loaderData,
    actionData,
    params,
    matches,
  }: Route.ComponentProps) {

    type Matches = {
        title:string,
        description:string
    }
    const matchesData:Matches = matches[matches.length-1]?.data as Matches

    const locale = loaderData.locale
    const page = loaderData.page
    const pageData = loaderData.pageData
    const menuLinks = loaderData.menuLinks

    return (
        <div className="flex min-h-dvh justify-center">
            <div className=" flex flex-col justify-between w-full">
                <main className="flex flex-col h-full">
                    <img
                        src={pageData.img}
                        className={twMerge('absolute object-cover w-full object-[center_top]', page === "" ? "h-dvh" : "h-96")}
                    />
                    <div className={twMerge(" z-10 py-4 text-black w-[50%]", page === "" ? "h-dvh" : "h-96")}>
                        <div className="flex flex-col ">
                            <h1 className={twMerge("text-2xl ml-4 ", !pageData.isDark && "text-white")}>Jean-Michel Viel</h1>
                            <NavBar locale={locale} menuLinks={menuLinks} dark={pageData.isDark} more />
                        </div>
                        {page !== "" && 
                            <div className="m-4 row-span-2 bg-jmv_white/50 p-2 rounded-lg">
                                <h2 className="text-xl mb-4">
                                    {matchesData.title}
                                </h2>
                                <p className="mt-4">
                                    {matchesData.description}
                                </p>
                            </div>
                        }
                    </div>
                    <div className="absolute right-0 m-4 hover:underline z-10 text-black">
                        LNG
                    </div>
                    <div className="bg-gradient-to-b from-black to bg-slate-950 h-10"></div>
                    <Outlet/>
                </main>
                <footer className="flex flex-col xs:flex-row gap-4 justify-around text-jmv_white m-4 pt-4 border-t border-jmv_light">
                    <a href="mailto:info@jeanmichelviel.ca" className="hover:underline self-center">
                        info@jeanmichelviel.ca
                    </a>
                    <div className="flex flex-col md:flex-row self-center gap-4">
                        <a href="https://www.github.com/jmvie5/" className="flex space-x-1.5 group">
                            <img
                                src={github_white}
                                alt="GitHub Logo"
                                width={30}
                                height={30}
                                className="aspect-square"
                            />
                            <span className="group-hover:underline self-center">@jmvie5</span>
                        </a>
                        <a href="https://www.linkedin.com/in/jeanmichelviel/" className="flex space-x-1.5 group">
                            <img
                                src={linkedinLogo}
                                alt="LinkedIn Logo"
                                width={30}
                                height={30}
                                className="aspect-square"
                            />
                            <span className="group-hover:underline self-center">@jeanmichelviel</span>
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
};
