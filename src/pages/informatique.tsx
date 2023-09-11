import * as React from "react";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import Seo from "../components/Seo";
import Siteweb from "../components/Siteweb";
import { StaticImage } from "gatsby-plugin-image";

const InformatiquePage = () => {
  return (
    <Layout pageTitle="">
      <div className="bg-[url(../images/coding.webp)] bg-cover h-96">
        <div className="grid grid-rows-3 justify-between text-jmv_white h-96 w-[61%] xs:w-[50%] ">
          <div className="flex flex-col my-4 ">
            <h1 className="text-2xl ml-4">Jean-Michel Viel</h1>
            <NavBar />
          </div>

          <div className="ml-4 row-span-2">
            <h2 className="text-xl my-4">Informatique</h2>
            <p className="my-4">
              Spécialisé en développement web, j'aime aussi le développement de
              jeux vidéos et de programmes utilitaires.
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-gradient-to-b from-black to bg-jmv_dark h-10"></div>

      <div className="grid grid-cols-1 max-w-7xl self-center">
        <div className="space-y-4 mx-2 sm:mx-4">
          <h2 id="info-web" className="text-xl text-jmv_light ">
            Développement web
          </h2>
          <Siteweb
            name="Laurence bf, orthopédagogue"
            description={
              <div>
                <p className="mb-2">
                  Laurence bf est une orthopédagogue spécialisée en difficultés
                  d’apprentissage en français (lecture/écriture) auprès
                  d’enfants de tous âges. Comme elle a le désir d’aider le plus
                  d’enfants possible à développer leurs compétences
                  littéraciques (lecture-écriture),{" "}
                  <strong>
                    elle a décidé de créer l’espace Laurence bf, orthopédagogue
                  </strong>{" "}
                  pour rejoindre les parents, les acteurs les plus importants
                  dans la vie des enfants.
                </p>
                <p>
                  Son but est de soutenir et d’aider les parents qui se
                  questionnent sur les façons d’intervenir auprès de leur enfant
                  qui rencontre des difficultés en français.
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
            name="Musique nationale de la Réserve Navale"
            description={
              <div>
                <p className="mb-2">
                  La Musique nationale de la Réserve navale (MNRN), formée en
                  1976, est composée de musiciens réservistes choisis parmi les
                  six divisions de la Réserve navale du Canada ayant une
                  musique.
                </p>
                <p>
                  La MNRN s’entraine et se produit principalement pendant l’été
                  afin d’appuyer la mission de la Réserve navale qui est de
                  représenter les Forces armées canadiennes et de créer des
                  liens avec les Canadiens.
                </p>
              </div>
            }
            siteName="nbnr.ca"
            github="https://github.com/jmvie5/nbnr-mnrn"
          >
            <StaticImage
              src="../images/informatique/nbnr.webp"
              alt="Logo NBNR"
            />
          </Siteweb>
          <Siteweb
            name="Improvison"
            description={
              <div>
                Improvison est un projet de recherche développement dirigé par
                Jean-Philippe Després (Ph. D.) qui vise à développer du matériel
                pédagogique basé sur les principes de l’apprentissage par le jeu
                afin de faciliter l’acquisition, chez les instrumentistes de
                niveau débutant ou intermédiaire, de stratégies d’
                <strong>improvisation musicale</strong> qui sont mises en œuvre
                par les experts du domaine et à documenter les impacts perçus de
                ce matériel.
              </div>
            }
            siteName="improvison.ca"
            github="https://github.com/jmvie5/improvison"
          >
            <StaticImage
              src="../images/informatique/improvison.webp"
              alt="Logo Improvison"
            />
          </Siteweb>
          <Siteweb
            name="Café social"
            description={
              <div>
                <p className="mb-2">
                  Réseau social personnel à petite échelle pour le partage de
                  grains de café, de recettes, de trucs et astuces, etc.
                </p>
                <p>Projet en développement.</p>
              </div>
            }
            github="https://github.com/charlotrudel/cafe_social"
          >
            <StaticImage
              src="../images/informatique/cafesocial.webp"
              alt="Logo Café social"
            />
          </Siteweb>
          <Siteweb
            name="Jean-Michel Viel, musicien et programmeur"
            description={<div>Ce site web!</div>}
            siteName="jeanmichelviel.ca"
            github="https://github.com/jmvie5/jmviel-siteweb"
          >
            <StaticImage src="../images/icon.webp" alt="Logo JM Viel" />
          </Siteweb>
        </div>
        <div className="flex flex-col my-4 mx-2 sm:mx-4">
          <h2 id="info-jeux" className="text-jmv_light text-xl">
            Jeux vidéos
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <p className="text-jmv_white ml-4 my-4">
              Dans le cadre du projet de recherche-développement Improvison,
              dirigé par Jean-Philippe Després (Ph. D.), j'ai créé le jeu au
              cœur de la recherche avec Roblox. Allez y jeter un coup d'oeil :
            </p>
            <a
              title="Improvison"
              href="https://www.roblox.com/games/5984084686/Improvison"
              target="_blank"
              rel="noreferrer"
              className="flex self-center items-center gap-2 transition duration-300 ease-in hover:scale-110"
            >
              <StaticImage
                src="../images/informatique/roblox.svg"
                alt="Roblox logo"
                className="w-12"
              />
              <p className="text-jmv_white text-2xl font-bold font-josefin">
                Improvison
              </p>
            </a>
          </div>
        </div>
        <div className="my-4 mx-2 sm:mx-4">
          <h2 className="text-jmv_light text-xl">Compétences :</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-4 gap-4 place-items-center">
            <a
              title="React"
              href="https://react.dev/"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                className="w-24 transition duration-300 ease-in hover:scale-110 "
                alt="React-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
              />
            </a>
            <a
              title="MongoDB"
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                className="w-44 transition duration-300 ease-in hover:scale-110"
                alt="MongoDB Logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/512px-MongoDB_Logo.svg.png"
              />
            </a>
            <a
              title="expressjs"
              href="https://expressjs.com/"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                className="w-44 transition duration-300 ease-in hover:scale-110"
                alt="Expressjs"
                src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
              />
            </a>
            <a
              title="NodeJS"
              href="https://nodejs.org"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                className="w-44 transition duration-300 ease-in hover:scale-110"
                alt="NodeJS"
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png"
              />
            </a>
            <a
              title="GatsbyJS"
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                className="w-24 transition duration-300 ease-in hover:scale-110"
                alt="GatsbyJS logo"
                src="../images/informatique/gatsbyjs.webp"
              />
            </a>
            <a
              title="GraphQL"
              href="https://graphql.org/"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                className="w-24 transition duration-300 ease-in hover:scale-110"
                alt="GraphQL Logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/512px-GraphQL_Logo.svg.png"
              />
            </a>
            <a
              title="Netlify"
              href="https://www.netlify.com/"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                className="w-44 transition duration-300 ease-in hover:scale-110"
                alt="Netlify logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Netlify_logo_%282%29.svg/512px-Netlify_logo_%282%29.svg.png"
              />
            </a>
            <a
              title="Tailwind CSS"
              href="https://tailwindcss.com"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                className="w-24 transition duration-300 ease-in hover:scale-110"
                alt="Tailwind CSS Logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png"
              />
            </a>
            <a
              title="JavaScript"
              href="https://www.javascript.com/"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                className="w-24 transition duration-300 ease-in hover:scale-110"
                alt="JavaScript-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/512px-JavaScript-logo.png"
              />
            </a>
            <a
              title="TypeScript"
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                className="w-24 transition duration-300 ease-in hover:scale-110"
                alt="Typescript logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"
              />
            </a>
            <a
              title="HTML5"
              href="https://html.spec.whatwg.org/multipage/"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                className="w-24 transition duration-300 ease-in hover:scale-110"
                alt="HTML5 logo"
                src="../images/informatique/html5.webp"
              />
            </a>
            <a
              title="CSS3"
              href="https://www.w3.org/Style/CSS/"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                className="w-24 transition duration-300 ease-in hover:scale-110"
                alt="CSS3 logo and wordmark"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/256px-CSS3_logo_and_wordmark.svg.png"
              />
            </a>
            <a
              title="Python"
              href="https://www.python.org/"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                className="w-24 transition duration-300 ease-in hover:scale-110"
                alt="Python logo"
                src="../images/informatique/python.webp"
              />
            </a>
            <a
              title="C++"
              href="https://cplusplus.com/"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                className="w-24 transition duration-300 ease-in hover:scale-110"
                alt="C++ Logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/256px-ISO_C%2B%2B_Logo.svg.png"
              />
            </a>
            <a
              title="Lua"
              href="https://www.lua.org/"
              target="_blank"
              rel="noreferrer"
            >
              <StaticImage
                className="w-24 transition duration-300 ease-in hover:scale-110"
                alt="Lua-Logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/512px-Lua-Logo.svg.png"
              />
            </a>
            <a
              title="Git"
              href="https://git-scm.com/"
              target="_blank"
              rel="noreferrer"
            >
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

export const Head = () => (
  <Seo
    title="Informatique"
    description="Spécialisé en développement web, j'aime aussi le développement de jeux vidéos et de programmes utilitaires."
  />
);
