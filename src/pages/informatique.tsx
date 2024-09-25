import * as React from 'react';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Seo from '../components/Seo';
import Siteweb from '../components/Siteweb';
import { StaticImage } from 'gatsby-plugin-image';
import { FormattedMessage } from 'react-intl';
import { graphql, HeadProps } from 'gatsby';
import { DataProps } from '../types';

const InformatiquePage = () => {
    
    return (
        <Layout dark>
            <div className="bg-[url(../images/coding.webp)] bg-cover h-96">
                <div className="grid grid-rows-3 justify-between text-jmv_white h-96 w-[61%] xs:w-[50%] ">
                    <div className="flex flex-col my-4 ">
                        <h1 className="text-2xl ml-4">Jean-Michel Viel</h1>
                        <NavBar />
                    </div>

                    <div className="ml-4 row-span-2">
                        <h2 className="text-xl my-4">
                            <FormattedMessage id='Computer Science' />
                        </h2>
                        <p className="my-4">
                        <FormattedMessage id='info-desc' />
                        <p>Je travaille comme développeur chez <a href='https://www.edumedia.com' className='hover:underline font-medium'>Édumedia</a>, ainsi que leur filiale <a href='https://alec-edu.com' className='hover:underline font-medium'>Alec</a>. [LOGO LINK VERS ALEC] [LOGO LINK VERS EDUMEDIA]</p>
                        </p>
                    </div>
                </div>
            </div>
            <div className=" bg-gradient-to-b from-black to bg-jmv_dark h-10"></div>

            <div className="grid grid-cols-1 max-w-7xl self-center">
                <div className="space-y-4 mx-2 sm:mx-4">
                    <h2 id="info-web" className="text-xl text-jmv_light ">
                    <FormattedMessage id='web-dev' />
                    </h2>
                    <Siteweb
                        name="Laurence bf, orthopédagogue"
                        description={
                            <div>
                                <p className="mb-2">
                                    <FormattedMessage id='lbf-1' />{' '}
                                    <strong><FormattedMessage id='lbf-2' /></strong>
                                    <FormattedMessage id='lbf-3' />
                                </p>
                                <p>
                                    <FormattedMessage id='lbf-4' />
                                </p>
                            </div>
                        }
                        siteName="laurencebf.ca"
                        github="https://github.com/jmvie5/laurence-orthopedagogue"
                    >
                        <StaticImage
                            src="../images/informatique/laurencebf.webp"
                            alt="Logo Laurence bf, orthopédagogue"
                        />
                    </Siteweb>
                    <Siteweb
                        name={"nbnr"}
                        description={
                            <div>
                                <p className="mb-2">
                                <FormattedMessage id='nbnr-1' />
                                </p>
                                <p>
                                <FormattedMessage id='nbnr-2' />
                                </p>
                            </div>
                        }
                        siteName="nbnr.ca"
                        github="https://github.com/jmvie5/nbnr-mnrn"
                    >
                        <StaticImage src="../images/informatique/nbnr.webp" alt="Logo NBNR" />
                    </Siteweb>
                    <Siteweb
                        name="Improvison"
                        description={
                            <div>
                                <FormattedMessage id='improvison-1' />
                                <strong><FormattedMessage id='improvison-2' /></strong> 
                                <FormattedMessage id='improvison-3' />
                            </div>
                        }
                        siteName="improvison.ca"
                        github="https://github.com/jmvie5/improvison"
                    >
                        <StaticImage src="../images/informatique/improvison.webp" alt="Logo Improvison" />
                    </Siteweb>
                    <Siteweb
                        name="Café social"
                        description={
                            <div>
                                <p className="mb-2">
                                <FormattedMessage id='cafe-social-1' />
                                </p>
                                <p><FormattedMessage id='cafe-social-2' /></p>
                            </div>
                        }
                        github="https://github.com/charlotrudel/cafe_social"
                    >
                        <StaticImage src="../images/informatique/cafesocial.webp" alt="Logo Café social" />
                    </Siteweb>
                    <Siteweb
                        name="this-website-title"
                        description={<div><FormattedMessage id='this-website' /></div>}
                        siteName="jeanmichelviel.ca"
                        github="https://github.com/jmvie5/jmviel-siteweb"
                    >
                        <StaticImage src="../images/icon.webp" alt="Logo JM Viel" />
                    </Siteweb>
                </div>
                <div className="flex flex-col my-4 mx-2 sm:mx-4">
                    <h2 id="info-jeux" className="text-jmv_light text-xl">
                    <FormattedMessage id='games-title' />
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <p className="text-jmv_white ml-4 my-4">
                        <FormattedMessage id='games-desc' />
                        </p>
                        <a
                            title="Improvison"
                            href="https://www.roblox.com/games/5984084686/Improvison"
                            className="flex self-center items-center gap-2 transition duration-300 ease-in hover:scale-110"
                        >
                            <StaticImage src="../images/informatique/roblox.svg" alt="Roblox logo" className="w-12" />
                            <p className="text-jmv_white text-2xl font-bold font-josefin">Improvison</p>
                        </a>
                    </div>
                    <div>
                        <p className="text-jmv_white ml-4 my-4">
                            En travaillant pour ÉduMedia, je développe aussi des jeux pour leur filiale <a href='https://alec-edu.com' className='hover:underline font-medium'>Alec</a> [LOGO ALEC]
                        </p>
                    </div>
                </div>
                <div className="my-4 mx-2 sm:mx-4">
                    <h2 className="text-jmv_light text-xl"><FormattedMessage id='skills' /></h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-4 gap-4 place-items-center">
                        <a title="Remix" href="https://remix.run/">
                            <StaticImage
                                className="w-44 transition duration-300 ease-in hover:scale-110 "
                                alt="Remix logo"
                                src="../images/informatique/remix-glowing.svg"
                            />
                        </a>
                        <a title="React" href="https://react.dev/">
                            <StaticImage
                                className="w-24 transition duration-300 ease-in hover:scale-110 "
                                alt="React-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                            />
                        </a>
                        <a>NEXTUI</a>
                        <a>FRAMER MOTION</a>
                        <a title="Vite" href="https://vitejs.dev/">
                            <StaticImage
                                className="w-24 transition duration-300 ease-in hover:scale-110 "
                                alt="Vite logo"
                                src="../images/informatique/Vitejs-logo.svg.png"
                            />
                        </a>
                        <a>CREATEJS</a>
                        <a title="MongoDB" href="https://www.mongodb.com/">
                            <StaticImage
                                className="w-44 transition duration-300 ease-in hover:scale-110"
                                alt="MongoDB Logo"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/512px-MongoDB_Logo.svg.png"
                            />
                        </a>
                        <a title="expressjs" href="https://expressjs.com/">
                            <StaticImage
                                className="w-44 transition duration-300 ease-in hover:scale-110"
                                alt="Expressjs"
                                src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
                            />
                        </a>
                        <a title="NodeJS" href="https://nodejs.org">
                            <StaticImage
                                className="w-44 transition duration-300 ease-in hover:scale-110"
                                alt="NodeJS"
                                src="https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png"
                            />
                        </a>
                        <a>PHP</a>
                        <a>SYMFONY</a>
                        <a title="GatsbyJS" href="https://gastbyjs.com">
                            <StaticImage
                                className="w-24 transition duration-300 ease-in hover:scale-110"
                                alt="GatsbyJS logo"
                                src="../images/informatique/gatsbyjs.webp"
                            />
                        </a>
                        <a title="GraphQL" href="https://graphql.org/">
                            <StaticImage
                                className="w-24 transition duration-300 ease-in hover:scale-110"
                                alt="GraphQL Logo"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/512px-GraphQL_Logo.svg.png"
                            />
                        </a>
                        <a>VUE</a>
                        <a>NUXT</a>
                        <a title="Netlify" href="https://www.netlify.com/">
                            <StaticImage
                                className="w-44 transition duration-300 ease-in hover:scale-110"
                                alt="Netlify logo"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Netlify_logo_%282%29.svg/512px-Netlify_logo_%282%29.svg.png"
                            />
                        </a>
                        <a title="Tailwind CSS" href="https://tailwindcss.com">
                            <StaticImage
                                className="w-24 transition duration-300 ease-in hover:scale-110"
                                alt="Tailwind CSS Logo"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png"
                            />
                        </a>
                        <a title="JavaScript" href="https://www.javascript.com/">
                            <StaticImage
                                className="w-24 transition duration-300 ease-in hover:scale-110"
                                alt="JavaScript-logo"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/512px-JavaScript-logo.png"
                            />
                        </a>
                        <a title="TypeScript" href="https://www.typescriptlang.org/">
                            <StaticImage
                                className="w-24 transition duration-300 ease-in hover:scale-110"
                                alt="Typescript logo"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"
                            />
                        </a>
                        <a title="HTML5" href="https://html.spec.whatwg.org/multipage/">
                            <StaticImage
                                className="w-24 transition duration-300 ease-in hover:scale-110"
                                alt="HTML5 logo"
                                src="../images/informatique/html5.webp"
                            />
                        </a>
                        <a title="CSS3" href="https://www.w3.org/Style/CSS/">
                            <StaticImage
                                className="w-24 transition duration-300 ease-in hover:scale-110"
                                alt="CSS3 logo and wordmark"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/256px-CSS3_logo_and_wordmark.svg.png"
                            />
                        </a>
                        <a title="Python" href="https://www.python.org/">
                            <StaticImage
                                className="w-24 transition duration-300 ease-in hover:scale-110"
                                alt="Python logo"
                                src="../images/informatique/python.webp"
                            />
                        </a>
                        <a title="C++" href="https://cplusplus.com/">
                            <StaticImage
                                className="w-24 transition duration-300 ease-in hover:scale-110"
                                alt="C++ Logo"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/256px-ISO_C%2B%2B_Logo.svg.png"
                            />
                        </a>
                        <a title="Lua" href="https://www.lua.org/">
                            <StaticImage
                                className="w-24 transition duration-300 ease-in hover:scale-110"
                                alt="Lua-Logo"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/512px-Lua-Logo.svg.png"
                            />
                        </a>
                        <a title="Git" href="https://git-scm.com/">
                            <StaticImage
                                className="w-32 transition duration-300 ease-in hover:scale-110"
                                alt="Git-logo"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/512px-Git-logo.svg.png"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default InformatiquePage;

export function Head(props: HeadProps<DataProps>) {
    return <Seo title={props.data.pageTitle.message} description={props.data.pageDescription.message} />;
}

export const query = graphql`
    query InformatiquePage($locale: String) {
        pageTitle: translation(locale: { eq: $locale }, key: { eq: "Computer Science" }) {
            message
        }
        pageDescription: translation(locale: { eq: $locale }, key: { eq: "info-desc" }) {
            message
        }
    }
`;