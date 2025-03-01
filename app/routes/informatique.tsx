import Siteweb from "~/components/Siteweb";
import {t} from "i18next"
import jmvie5Logo from "~/assets/images/icon.webp"
import * as infoImages from "~/assets/images/informatique"

const InformatiquePage = () => {
    
    return (
        <div>
            <div className="grid grid-cols-1 max-w-7xl self-center">
                <div className="space-y-4 mx-2 sm:mx-4">
                    <h2 id="info-web" className="text-xl text-jmv_light ">
                        {t("web-dev")}
                    </h2>
                    <Siteweb
                        name="Laurence bf, orthopédagogue"
                        description={
                            <div>
                                <p className="mb-2">
                                    {t("lbf-1")}{' '}
                                    <strong>{t("lbf-2")}</strong>
                                    {t("lbf-3")}
                                </p>
                                <p>
                                    {t("lbf-4")}
                                </p>
                            </div>
                        }
                        siteName="laurencebf.ca"
                        github="https://github.com/jmvie5/laurence-orthopedagogue"
                    >
                        <img
                            src={infoImages.laurencebf}
                            alt="Logo Laurence bf, orthopédagogue"
                        />
                    </Siteweb>
                    <Siteweb
                        name={"nbnr"}
                        description={
                            <div>
                                <p className="mb-2">
                                {t("nbnr-1")}
                                </p>
                                <p>
                                {t("nbnr-2")}
                                </p>
                            </div>
                        }
                        siteName="nbnr.ca"
                        github="https://github.com/jmvie5/nbnr-mnrn"
                    >
                        <img src={infoImages.nbnr} alt="Logo NBNR" />
                    </Siteweb>
                    <Siteweb
                        name="Improvison"
                        description={
                            <div>
                                {t("improvison-1")}
                                <strong>{t('improvison-2')}</strong> 
                                
                                {t('improvison-3')}
                            </div>
                        }
                        siteName="improvison.ca"
                        github="https://github.com/jmvie5/improvison"
                    >
                        <img src={infoImages.improvison} alt="Logo Improvison" />
                    </Siteweb>
                    <Siteweb
                        name="Café social"
                        description={
                            <div>
                                <p className="mb-2">
                                {t('cafe-social-1')}
                                </p>
                                <p>{t('cafe-social-2')}</p>
                            </div>
                        }
                        github="https://github.com/charlotrudel/cafe_social"
                    >
                        <img src={infoImages.cafesocial} alt="Logo Café social" />
                    </Siteweb>
                    <Siteweb
                        name="this-website-title"
                        description={<div>{t('this-website')}</div>}
                        siteName="jeanmichelviel.ca"
                        github="https://github.com/jmvie5/jmviel-siteweb"
                    >
                        <img src={jmvie5Logo} alt="Logo JM Viel" />
                    </Siteweb>
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
                        <a title="Remix" href="https://remix.run/">
                            <img
                                className="w-44 transition duration-300 ease-in hover:scale-110 "
                                alt="Remix logo"
                                src={infoImages.remix_glowing}
                            />
                        </a>
                        <a title="React" href="https://react.dev/">
                            <img
                                className="w-24 transition duration-300 ease-in hover:scale-110 "
                                alt="React-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                            />
                        </a>
                        <a title="Next UI" href='https://nextui.org/'>
                            <img
                                className="w-24 transition duration-300 ease-in hover:scale-110 "
                                alt="NextUI-icon"
                                src={infoImages.nextui}
                            />
                        </a>
                        <a title="Motion" href='https://motion.dev/'>
                            <img
                                className="w-24 transition duration-300 ease-in hover:scale-110 "
                                alt="Motion-icon"
                                src={infoImages.motion}
                            />
                        </a>
                        <a title="Vite" href="https://vitejs.dev/">
                            <img
                                className="w-24 transition duration-300 ease-in hover:scale-110 "
                                alt="Vite logo"
                                src={infoImages.Vitejs_logo_svg}
                            />
                        </a>
                        <a title="CreateJS" href="https://createjs.com/">
                            <img
                                className="w-24 transition duration-300 ease-in hover:scale-110 "
                                alt="CreateJS logo"
                                src={infoImages.createjs}
                            />
                        </a>
                        <a title="MongoDB" href="https://www.mongodb.com/">
                            <img
                                className="w-44 transition duration-300 ease-in hover:scale-110"
                                alt="MongoDB Logo"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/512px-MongoDB_Logo.svg.png"
                            />
                        </a>
                        <a title="expressjs" href="https://expressjs.com/">
                            <img
                                className="w-44 transition duration-300 ease-in hover:scale-110"
                                alt="Expressjs"
                                src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
                            />
                        </a>
                        <a title="NodeJS" href="https://nodejs.org">
                            <img
                                className="w-44 transition duration-300 ease-in hover:scale-110"
                                alt="NodeJS"
                                src="https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png"
                            />
                        </a>
                        <a title="PHP" href="https://www.php.net/">
                            <img
                                className="w-44 transition duration-300 ease-in hover:scale-110"
                                alt="PHP-logo"
                                src={infoImages.PHP_logo}
                            />
                        </a>
                        <a title="Symfony" href="https://symfony.com/">
                            <img
                                className="w-24 transition duration-300 ease-in hover:scale-110 bg-white rounded-full"
                                alt="Symfony-logo"
                                src={infoImages.symfony}
                            />
                        </a>
                        <a title="GatsbyJS" href="https://gastbyjs.com">
                            <img
                                className="w-24 transition duration-300 ease-in hover:scale-110"
                                alt="GatsbyJS logo"
                                src={infoImages.gatsbyjs}
                            />
                        </a>
                        <a title="GraphQL" href="https://graphql.org/">
                            <img
                                className="w-24 transition duration-300 ease-in hover:scale-110"
                                alt="GraphQL Logo"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/512px-GraphQL_Logo.svg.png"
                            />
                        </a>
                        <a title="Vue" href="https://vuejs.org/">
                            <img
                                className="w-24 transition duration-300 ease-in hover:scale-110"
                                alt="Vue Logo"
                                src={infoImages.Vue_js_Logo_2}
                            />
                        </a>
                        <a title="Nuxt" href="https://nuxt.com/">
                            <img
                                className="w-24 transition duration-300 ease-in hover:scale-110"
                                alt="Vue Logo"
                                src={infoImages.nuxt}
                            />
                        </a>
                        <a title="Netlify" href="https://www.netlify.com/">
                            <img
                                className="w-44 transition duration-300 ease-in hover:scale-110"
                                alt="Netlify logo"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Netlify_logo_%282%29.svg/512px-Netlify_logo_%282%29.svg.png"
                            />
                        </a>
                        <a title="Tailwind CSS" href="https://tailwindcss.com">
                            <img
                                className="w-24 transition duration-300 ease-in hover:scale-110"
                                alt="Tailwind CSS Logo"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png"
                            />
                        </a>
                        <a title="JavaScript" href="https://www.javascript.com/">
                            <img
                                className="w-24 transition duration-300 ease-in hover:scale-110"
                                alt="JavaScript-logo"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/512px-JavaScript-logo.png"
                            />
                        </a>
                        <a title="TypeScript" href="https://www.typescriptlang.org/">
                            <img
                                className="w-24 transition duration-300 ease-in hover:scale-110"
                                alt="Typescript logo"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"
                            />
                        </a>
                        <a title="HTML5" href="https://html.spec.whatwg.org/multipage/">
                            <img
                                className="w-24 transition duration-300 ease-in hover:scale-110"
                                alt="HTML5 logo"
                                src={infoImages.html5}
                            />
                        </a>
                        <a title="CSS3" href="https://www.w3.org/Style/CSS/">
                            <img
                                className="w-24 transition duration-300 ease-in hover:scale-110"
                                alt="CSS3 logo and wordmark"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/256px-CSS3_logo_and_wordmark.svg.png"
                            />
                        </a>
                        <a title="Python" href="https://www.python.org/">
                            <img
                                className="w-24 transition duration-300 ease-in hover:scale-110"
                                alt="Python logo"
                                src={infoImages.python}
                            />
                        </a>
                        <a title="C++" href="https://cplusplus.com/">
                            <img
                                className="w-24 transition duration-300 ease-in hover:scale-110"
                                alt="C++ Logo"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/256px-ISO_C%2B%2B_Logo.svg.png"
                            />
                        </a>
                        <a title="Lua" href="https://www.lua.org/">
                            <img
                                className="w-24 transition duration-300 ease-in hover:scale-110"
                                alt="Lua-Logo"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/512px-Lua-Logo.svg.png"
                            />
                        </a>
                        <a title="Git" href="https://git-scm.com/">
                            <img
                                className="w-32 transition duration-300 ease-in hover:scale-110"
                                alt="Git-logo"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/512px-Git-logo.svg.png"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InformatiquePage;

