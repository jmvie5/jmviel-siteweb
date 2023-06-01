import * as React from 'react'
import Layout from '../components/Layout'
import { Seo } from '../components/Seo'
import Siteweb from '../components/Siteweb'
import { StaticImage } from 'gatsby-plugin-image'

const InformatiquePage = () => {

return (
    <Layout pageTitle="Informatique">
        <div className=''>
            <p className='text-jmv_white ml-4 mb-4'>Spécialisé en développement web, j'aime aussi le développement de jeux vidéos et de programmes utilitaires.</p>
        </div>
        <div className='space-y-4'>
            <h2 className='text-xl text-jmv_light '>Développement web</h2>
            <Siteweb
                name="Laurence bf, orthopédagogue"
                description={<div><p>Laurence bf est une orthopédagogue spécialisée en difficultés d’apprentissage en français (lecture/écriture) auprès d’enfants de tous âges. Comme elle a le désir d’aider le plus d’enfants possibles à développer leurs compétences littéraciques (lecture-écriture), <strong>elle a décidé de créer l’espace Laurence bf, orthopédagogue</strong> pour rejoindre les parents, les acteurs les plus importants dans la vie des enfants.</p><p className='mt-2'>Son but est de soutenir et d’aider les parents qui se questionnent sur les façons d’intervenir auprès de leur enfant qui rencontre des difficultés en français.</p></div>}
                siteName="laurencebf.ca"
                github="https://github.com/jmvie5/laurence-orthopedagogue"
            >
                <StaticImage src='../images/laurencebf.png' alt='Logo Laurence bf, orthopédagogue'/>
            </Siteweb>
            <Siteweb
                name="Musique nationale de la Réserver Navale"
                description={<div><p>La Musique nationale de la Réserve navale (MNRN), formée en 1976, est composée de musiciens réservistes choisis parmi les six divisions de la Réserve navale du Canada ayant une musique.</p>La MNRN s’entraine et se produit principalement pendant l’été afin d’appuyer la mission de la Réserve navale qui est de représenter les Forces armées canadiennes et de créer des liens avec les Canadiens.<p></p></div>}
                siteName="nbnr.ca"
                github="https://github.com/jmvie5/nbnr-mnrn"
            >
                <StaticImage src="../images/nbnr.png" alt="Logo NBNR"/>
            </Siteweb>
            <Siteweb
                name="Improvison"
                description={<div>Improvison est un projet de recherche développement dirigé par Jean-Philippe Després (Ph. D.) qui vise à développer du matériel pédagogique basé sur les principes de l’apprentissage par le jeu afin de faciliter l’acquisition, chez les instrumentistes de niveau débutant ou intermédiaire, de stratégies d’<strong>improvisation musicale</strong> qui sont mises en œuvre par les experts du domaine et à documenter les impacts perçus de ce matériel.</div>}
                siteName="improvison.ca"
                github="https://github.com/jmvie5/improvison"
            >
                <StaticImage src="../images/improvison.png" alt="Logo Improvison"/>
            </Siteweb>
        </div>
        <div className='flex flex-col my-4'>
            <h2 className='text-jmv_light text-xl'>Jeux vidéos</h2>
            <p className='text-jmv_white ml-4 my-4'>Dans le cadre du projet de recherche-développement Improvison, dirigé par Jean-Philippe Després (Ph. D.), j'ai créer le jeu au coeur de la recherche avec Roblox. Allez y jeter un coup d'oeil :</p>
            <a title="Improvison" href="https://www.roblox.com/games/5984084686/Improvison" className='flex self-center items-center gap-2'>
                <StaticImage src="../images/roblox.svg" alt="Roblox logo" className='w-12'/>
                <p className='text-jmv_white text-2xl font-bold font-josefin'>Improvison</p>
            </a>
        </div>
        <div className='my-4'>
            <h2 className='text-jmv_light text-xl'>Compétences :</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-4 gap-4 place-items-center'>
                <a title="React" href="https://react.dev/"><StaticImage className="w-24" alt="React-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"/></a>
                <a title="MongoDB" href="https://www.mongodb.com/"><StaticImage className="w-44" alt="MongoDB Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/512px-MongoDB_Logo.svg.png"/></a>
                <a title="expressjs" href="https://expressjs.com/"><StaticImage className="w-44" alt="Expressjs" src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"/></a>
                <a title="NodeJS" href="https://nodejs.org"><StaticImage className="w-44" alt="NodeJS" src="https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png"/></a>
                <a title="GatsbyJS" href="https://gastbyjs.com"><StaticImage className="w-24" src="../images/gatsbyjs.png" alt="GatsbyJS logo"/></a>
                <a title="GraphQL" href="https://graphql.org/"><StaticImage className="w-24" alt="GraphQL Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/512px-GraphQL_Logo.svg.png"/></a>
                <a title="Netlify" href="https://www.netlify.com/"><StaticImage className="w-44" alt="Netlify logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Netlify_logo_%282%29.svg/512px-Netlify_logo_%282%29.svg.png"/></a>
                <a title="Tailwind CSS" href="https://tailwindcss.com"><img className="w-24" alt="Tailwind CSS Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png"/></a>
                <a title="JavaScript" href="https://www.javascript.com/"><StaticImage className="w-24" alt="JavaScript-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/512px-JavaScript-logo.png"/></a>
                <a title="TypeScript" href="https://www.typescriptlang.org/"><StaticImage className="w-24" alt="Typescript logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"/></a>
                <a title="HTML5" href="https://html.spec.whatwg.org/multipage/"><StaticImage className="w-24" alt="HTML5 logo" src="../images/html5.png"/></a>
                <a title="CSS3" href="https://www.w3.org/Style/CSS/"><StaticImage className="w-24" alt="CSS3 logo and wordmark" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/256px-CSS3_logo_and_wordmark.svg.png"/></a>
                <a title="Python" href="https://www.python.org/"><StaticImage className="w-24" alt="Python logo" src="../images/python.png"/></a>
                <a title="C++" href="https://cplusplus.com/"><StaticImage className="w-24" alt="C++ Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/256px-ISO_C%2B%2B_Logo.svg.png"/></a>
                <a title="Lua" href="https://www.lua.org/"><StaticImage className="w-24" alt="Lua-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/512px-Lua-Logo.svg.png"/></a>
                <a title="Git" href="https://git-scm.com/"><StaticImage className="w-32" alt="Git-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/512px-Git-logo.svg.png"/></a>

            </div>
        </div>
        
    </Layout>
)
}

export default InformatiquePage

export const Head = () => (
<Seo title="Informatique" />
)