import { Outlet } from "react-router";
import githubLogo from "~/assets/images/informatique/github.webp"
import linkedinLogo from "~/assets/images/informatique/linkedin.webp"
import type { Route } from "./+types/Layout";
import { twMerge } from "tailwind-merge";
import indexImage from "../assets/images/mascarade.webp"
import aboutImage from "../assets/images/a-propos/JM_Lac_sm.webp"
import informatiqueImage from "../assets/images/coding.webp"
import musicImage from "../assets/images/guitar.webp"
import NavBar from "./NavBar";
import i18nConfig from "~/i18n";
import i18nServer from "~/i18next.server";
import { urlTranslationSearchString } from "~/i18n";
import {t} from "i18next"

export async function loader({ request, params }: Route.LoaderArgs) {

    const locale = params.lang 
        ? params.lang 
        : await i18nServer.getLocale(request)

    const t = await i18nServer.getFixedT(locale)
        
    const title =  "Jean-Michel Viel | À propos";
    const description = "La guitare, la pédagogie et la programmation; ce sont mes trois passions qui m'ont guidé jusqu'à aujourd'hui.";
  
    const url = new URL(request.url);
    let page = url.pathname.split('/')[url.pathname.split('/').length - 1];
    
    if (i18nConfig.supportedLngs.includes(page)) page = "";

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
    
    return { title, description, page, locale, pageData};
  }
  
  
  export const meta = () => {
  
    return [
      { title: "Jean-Michel Viel" },
      { name: "description", content: "Jean-Michel Viel, musicien, pédagogue et programmeur." },
      { property: "og:title", content:"Jean-Michel Viel" },
      { property: "og:type", content:"website" },
  
    ];
  };

export default function Layout({
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
                            <NavBar locale={locale} dark={pageData.isDark} more />
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
                                src={githubLogo}
                                alt="GitHub Logo"
                                width={30}
                                height={30}
                                className="aspect-square"
                            />
                            <p className="group-hover:underline">@jmvie5</p>
                        </a>
                        <a href="https://www.linkedin.com/in/jeanmichelviel/" className="flex space-x-1.5 group">
                            <img
                                src={linkedinLogo}
                                alt="LinkedIn Logo"
                                width={30}
                                height={30}
                                className="aspect-square"
                            />
                            <p className="group-hover:underline">@jeanmichelviel</p>
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
};
