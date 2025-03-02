import type { Route } from "./+types/informatique";
import {t} from "i18next"
import i18nServer from "~/i18next.server";
import Siteweb from "~/components/Siteweb";
import jmvie5Logo from "~/assets/images/icon.webp"
import * as infoImages from "~/assets/images/informatique"
import { twMerge } from "tailwind-merge";

export async function loader({ request, params }: Route.LoaderArgs) {

    const locale = params.lang 
        ? params.lang 
        : await i18nServer.getLocale(request)

    const t = await i18nServer.getFixedT(locale)

    const title = t("Computer Science")
    const description = t("info-desc")

  
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

const InformatiquePage = () => {

    const webProjects = [
        {
            name:"Laurence bf, orthopédagogue",
            description: <div>
                <p className="mb-2">
                    {t("lbf-1")}{' '}
                    <strong>{t("lbf-2")}</strong>
                    {t("lbf-3")}
                </p>
                <p>
                    {t("lbf-4")}
                </p>
            </div>,
            url:"laurencebf.ca",
            github:"https://github.com/jmvie5/laurence-orthopedagogue",
            logoSrc:infoImages.laurencebf,
            logoAtl:"Logo Laurence bf, orthopédagogue"
        },
        {
            name:"nbnr",
            description: <div>
                <p className="mb-2">
                {t("nbnr-1")}
                </p>
                <p>
                {t("nbnr-2")}
                </p>
            </div>,
            url:"nbnr.ca",
            github:"https://github.com/jmvie5/nbnr-mnrn",
            logoSrc:infoImages.nbnr,
            logoAlt:"Logo NBNR"
        },
        {
            name:"Improvison",
            description:
                <div>
                    {t("improvison-1")}
                    <strong>{t('improvison-2')}</strong> 
                    
                    {t('improvison-3')}
                </div>,
            url:"improvison.ca",
            github:"https://github.com/jmvie5/improvison",
            logoSrc:infoImages.improvison,
            logoAlt:"Logo Improvison" 
        },
        {
            name:"Café social",
            description:
                <div>
                    <p className="mb-2">
                    {t('cafe-social-1')}
                    </p>
                    <p>{t('cafe-social-2')}</p>
                </div>,
            github:"https://github.com/charlotrudel/cafe_social",
            logoSrc:infoImages.cafesocial,
            logoAlt:"Logo Café social"
        },
        {
            name:"this-website-title",
            description: <div>{t('this-website')}</div>,
            url:"jeanmichelviel.ca",
            github:"https://github.com/jmvie5/jmviel-siteweb",
            logoSrc:jmvie5Logo,
            logoAlt:"Logo JM Viel"
        }
    ]

    const skills = [
        {
            title: "Remix",
            url: "https://remix.run/",
            width: "w-44",
            alt: "Remix logo",
            src: infoImages.remix_glowing
        },
        {
            title: "React",
            url: "https://react.dev/",
            width: "w-24",
            alt: "React-icon",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
        },
        {
            title: "Hero UI",
            url: "https://heroui.com/'",
            width: "w-24",
            alt: "HeroUI-icon",
            src: infoImages.nextui
        },
        {
            title: "Motion",
            url: "https://motion.dev/'",
            width: "w-24",
            alt: "Motion-icon",
            src: infoImages.motion
        },
        {
            title: "Vite",
            url: "https://vitejs.dev/'",
            width: "w-24",
            alt: "Vite Logo",
            src: infoImages.Vitejs_logo_svg
        },
        {
            title: "CreateJS",
            url: "https://createjs.com/",
            width: "w-24",
            alt: "CreateJS logo",
            src: infoImages.createjs
        },
        {
            title: "MongoDB",
            url: "https://www.mongodb.com/",
            width: "w-44",
            alt: "MongoDB logo",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/512px-MongoDB_Logo.svg.png"
        },
        {
            title: "expressjs",
            url: "https://expressjs.com/",
            width: "w-44",
            alt: "Expressjs logo",
            src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
        },
        {
            title: "NodeJS",
            url: "https://nodejs.org/",
            width: "w-44",
            alt: "NodeJS logo",
            src: "https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png"
        },
        {
            title: "PHP",
            url: "https://www.php.net/",
            width: "w-44",
            alt: "PHP logo",
            src: infoImages.PHP_logo
        },
        {
            title: "Symfony",
            url: "https://symfony.com/",
            width: "w-44",
            alt: "Symfony logo",
            src: infoImages.symfony
        },
        {
            title: "GatsbyJS",
            url: "https://gastbyjs.com/",
            width: "w-24",
            alt: "Gatsby logo",
            src: infoImages.gatsbyjs
        },
        {
            title: "GraphQL",
            url: "https://graphql.org/",
            width: "w-24",
            alt: "GraphQL logo",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/512px-GraphQL_Logo.svg.png"
        },
        {
            title: "Vue",
            url: "https://vuejs.org/",
            width: "w-24",
            alt: "Vue logo",
            src: infoImages.Vue_js_Logo_2
        },
        {
            title: "Nuxt",
            url: "https://nuxt.com/",
            width: "w-24",
            alt: "Nuxt logo",
            src: infoImages.nuxt
        },
        {
            title: "Netlify",
            url: "https://www.netlify.com/",
            width: "w-24",
            alt: "Netlify logo",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Netlify_logo_%282%29.svg/512px-Netlify_logo_%282%29.svg.png"
        },
        {
            title: "Tailwind CSS",
            url: "https://tailwindcss.com/",
            width: "w-24",
            alt: "TailwindCSS logo",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png"
        },
        {
            title: "JavaScript",
            url: "https://www.javascript.com/",
            width: "w-24",
            alt: "JavaScript logo",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/512px-JavaScript-logo.png"
        },
        {
            title: "TypeScript",
            url: "https://www.typescriptlang.org/",
            width: "w-24",
            alt: "TypeScript logo",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"
        },
        {
            title: "HTML5",
            url: "https://html.spec.whatwg.org/multipage/",
            width: "w-24",
            alt: "HTML5 logo",
            src: infoImages.html5
        },
        {
            title: "CSS3",
            url: "https://www.w3.org/Style/CSS/",
            width: "w-24",
            alt: "CSS3 logo",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/256px-CSS3_logo_and_wordmark.svg.png"
        },
        {
            title: "Python",
            url: "https://www.w3.org/Style/CSS/",
            width: "w-24",
            alt: "Python logo",
            src: infoImages.python
        },
        {
            title: "C++",
            url: "https://cplusplus.com/",
            width: "w-24",
            alt: "C++ logo",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/256px-ISO_C%2B%2B_Logo.svg.png"
        },
        {
            title: "Lua",
            url: "https://www.lua.org/",
            width: "w-24",
            alt: "Lua logo",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/512px-Lua-Logo.svg.png"
        },
        {
            title: "Git",
            url: "https://git-scm.com/",
            width: "w-32",
            alt: "Git logo",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/512px-Git-logo.svg.png"
        }
    ]
    
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 max-w-7xl self-center">
                <div className="space-y-4 mx-2 sm:mx-4">
                    <h2 id="info-web" className="text-xl text-jmv_light ">
                        {t("web-dev")}
                    </h2>
                    {webProjects.map((project)=> (
                        <Siteweb
                            key={project.name}
                            name={project.name}
                            description={project.description}
                            url={project.url}
                            github={project.github}
                            logoSrc={project.logoSrc}
                            logoAlt={project.logoAlt}
                        />
                    ))}
                </div>
                <div className="flex flex-col my-4 mx-2 sm:mx-4">
                    <h2 id="info-jeux" className="text-jmv_light text-xl">
                    {t('games-title')}
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                        <p className="text-jmv_white ml-4 my-4">
                        {t('games-desc')}
                        </p>
                        <a
                            title="Improvison"
                            href="https://www.roblox.com/games/5984084686/Improvison"
                            className="flex self-center items-center gap-2 transition duration-300 ease-in hover:scale-110"
                        >
                            <img src={infoImages.roblox} alt="Roblox logo" className="w-12" />
                            <p className="text-jmv_white text-2xl font-bold font-josefin">Improvison</p>
                        </a>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full  items-center justify-between">
                        <p className="text-jmv_white ml-4 my-4" >
                        {t('dev-alec')}{" "}<a href='https://alec-edu.com' className='hover:underline font-medium'>Alec</a> 
                        </p>
                        <a
                            title="Alec"
                            href="https://alec-edu.com/"
                            className="flex self-center items-center gap-2 transition duration-300 ease-in hover:scale-110"
                        >
                            <img src={infoImages.alec_logo} alt='Logo Alec'/> 
                        </a>
                    </div>
                </div>
                <div className="my-4 mx-2 sm:mx-4">
                    <h2 className="text-jmv_light text-xl">{t('skills')}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-4 gap-4 place-items-center">
                        {skills.map((skill) => (
                            <a title={skill.title} href={skill.url}>
                                <img
                                    className={twMerge("transition duration-300 ease-in hover:scale-110 ", skill.width)}
                                    alt={skill.alt}
                                    src={skill.src}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InformatiquePage;

