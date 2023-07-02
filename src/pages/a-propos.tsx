import * as React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {

return (
    <Layout pageTitle="À propos">
        <div className='flex flex-col gap-4 text-jmv_white '>
            <div>
                <p>[Photo]</p>
                <p>Guitariste, pédagogue et programmeur; ce sont mes trois passions qui, à leur tour, m'ont guidé jusqu'à aujourd'hui.</p>
            </div>
            <div className="">
                <h2 className='text-xl text-jmv_light mb-2'>Musique</h2>
                <div className='space-y-2 flex flex-col xs:inline'>
                    <StaticImage src="../images/ComboJazzMTMBateau.jpg" alt="Spectacle sur le HMS PROTECTOR" className='float-right aspect-square w-72 mx-4 mb-2 self-center'/>
                    <p>J'ai complété en 2018 mon baccalauréat avec mention d'honneur de la doyenne en interprétation jazz/pop, puis j'ai poursuivi à la maitrise en didactique instrumentale que j'ai complété en 2021. Mon sujet : L’improvisation comme moteur d’apprentissage chez les jeunes guitaristes. Si ça vous intéresse, n'hésitez pas à le <a href="" title="L’improvisation comme moteur d’apprentissage chez les jeunes guitaristes">télécharger</a>.</p>
                    <p>Mes études au deuxième cycle m'ont initié au monde de la recherche académique. J'y suis encore actif à titre professionnel de recherche pour Jean-Philippe Després (Ph. D.), à l'Université Laval, dans le cadre de son projet de recherche-développement de matériel pédagogique ludique pour soutenir l'apprentissage de l'improvisation musicale.</p>
                    <p>En complétant ma maitrise, je me suis aussi enrôlé dans les Forces armées canadiennes comme musicien pour le NCSM Montcalm, une division de la réserve navale située à Québec. Aujourd'hui, je suis principalement actif avec la Musique nationale de la Réserve navale tout en étant présent pour les répétitions et les engagements de la Musique du NCSM Montcalm.</p>
                </div>
                
            </div>
            <div>
                <h2 className='text-xl text-jmv_light mb-2'>Informatique</h2>
                <div className='space-y-2'>
                    <p>
                        En finissant ma maitrise en didactique instrumentale, la COVID-19 est arrivée et a complètement perturbé le projet de recherche dans lequel je travaillais. Impossible de faire tester le jeu d'improvisation musicale analogue à des participants qui ne se voit désormais plus qu'en ligne. C'est sous cette nouvelle réalité que j'ai migré le jeu de table développé pendant le projet de recherche vers <a href='/informatique#info-jeux' className='font-medium hover:underline'>Roblox</a>. Ce qui nous a permis de continuer le projet, et m'a fait faire le bond en informatique.</p>
                    <p>
                        Pour accroitre mes connaissances dans le domaine, je me suis inscrit au certificat en informatique de l'université Laval. Avec mon emploi avec la Musique nationale de la Réserve navale et le projet de recherche de Jean-Philippe Després, je complète ma formation au ralenti, mais elle m'a permis d'acquérir plusieurs compétences importantes dans le domaine.
                    </p>
                    <p className='mt-2'>Liste de cours complétés :</p>
                    <ul className='list-disc ml-6'>
                        <li>Introduction à la programmation avec Python</li>
                        <li>Programmation avancée en C++</li>
                        <li>Ordinateurs : structure et applications</li>
                        <li>Algorithmes et structures de données</li>
                    </ul>
                    <p>
                        Actuellement, ce qui m'intéresse le plus, c'est le développement web. Malgré qu'aucun de mes cours de certificats ne m'a initié à ce domaine, c'est là où j'ai réalisé la majorité de <a href='/informatique#info-web' className='font-medium hover:underline'>mes projets</a>.
                    </p>
                </div>
            </div>
        </div>
    </Layout>
)
}

export default IndexPage

export const Head = () => (
<Seo title="À propos" description=""/>
)