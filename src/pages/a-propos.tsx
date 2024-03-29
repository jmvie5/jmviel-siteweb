import * as React from 'react'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import { Link } from 'gatsby'
import Seo from '../components/Seo'
import { StaticImage } from 'gatsby-plugin-image'

const AProposPage = () => {

return (
    <Layout>
        <div className="bg-[url(../images/a-propos/JM_Lac_sm.webp)] xs:bg-[url(../images/a-propos/JM_Lac.webp)] bg-cover bg-[center_top] h-96">
            <div className="grid grid-rows-3 justify-between text-jmv_dark h-96 xs:w-[50%]">
                <div className='w-[50%] xs:w-full flex flex-col my-4'>
                    <h1 className='text-2xl ml-4'>Jean-Michel Viel</h1>
                    <NavBar dark/>
                </div>
                
                <div className="m-4 row-span-2 bg-jmv_white/50 p-2 rounded-lg">
                    <h2 className='text-xl mb-4'>À propos</h2>
                    <p className='mt-4'>La guitare, la pédagogie et la programmation; ce sont mes trois passions qui m'ont guidé jusqu'à aujourd'hui.</p>
                </div>
            </div>
        </div>
        <div className='bg-gradient-to-b from-black to bg-jmv_dark h-10'></div>

        <div className='grid grid-cols-1 gap-4 mx-2 sm:mx-4 text-jmv_white max-w-7xl self-center'>
            <div className="">
                <h2 className='text-xl text-jmv_light mb-2'>Musique</h2>
                <div className='space-y-2 flex flex-col xs:inline'>
                    <StaticImage src="../images/a-propos/ComboJazzMTMBateau.webp" alt="Spectacle sur le HMS PROTECTOR" className='float-right aspect-square w-72 sm:w-96 mx-4 mb-2 self-center'/>
                    <p>J'ai complété, en 2018, mon baccalauréat avec mention d'honneur de la doyenne en interprétation jazz/pop, puis j'ai poursuivi à la maitrise en didactique instrumentale que j'ai complétée en 2021. Mon sujet : L’improvisation comme moteur d’apprentissage chez les jeunes guitaristes.</p>
                    <p>J'ai commencé à enseigner la musique pendant mon baccalauréat en interprétation. L'enseignement est un domaine que j'aime encore énormément, si vous cherchez un professeur de guitare ou d'improvisation musicale, n'hésitez pas à me <Link to='/contact' className='font-medium hover:underline'>contacter</Link>!</p>
                    <p>Mes études au deuxième cycle m'ont initié au monde de la recherche académique. J'y suis encore actif à titre de professionnel de recherche pour Jean-Philippe Després (Ph. D.), à l'Université Laval, dans le cadre de son projet de recherche-développement de matériel pédagogique ludique pour soutenir l'apprentissage de l'improvisation musicale.</p>
                    <p>En complétant ma maitrise, je me suis aussi enrôlé dans les Forces armées canadiennes comme musicien pour le NCSM Montcalm, une division de la réserve navale située à Québec. Aujourd'hui, je suis principalement actif avec la Musique nationale de la Réserve navale tout en étant présent pour les répétitions et les engagements de la Musique du NCSM Montcalm.</p>
                </div>
                
            </div>
            <div>
                <h2 className='text-xl text-jmv_light mb-2'>Informatique</h2>
                <div className='space-y-2'>
                    <p>
                        En finissant ma maitrise en didactique instrumentale, la COVID-19 est arrivée et a complètement perturbé le projet de recherche dans lequel je travaillais. Impossible de faire tester le jeu d'improvisation musicale analogique à des participants qui ne se voient désormais plus qu'en ligne. C'est sous cette nouvelle réalité que j'ai migré le jeu de table développé pendant le projet de recherche vers <a href='/informatique#info-jeux' className='font-medium hover:underline'>Roblox</a>. Ce qui nous a permis de continuer le projet, et m'a fait faire le bond en informatique.</p>
                    <p>
                        Pour accroitre mes connaissances dans le domaine, je me suis inscrit au certificat en informatique de l'Université Laval. Avec mon emploi avec la Musique nationale de la Réserve navale et le projet de recherche de Jean-Philippe Després, je complète ma formation au ralenti, mais elle m'a permis d'acquérir plusieurs compétences importantes dans le domaine.
                    </p>
                    <p className='mt-2'>Liste de cours complétés :</p>
                    <ul className='list-disc ml-6'>
                        <li>Introduction à la programmation avec Python</li>
                        <li>Programmation avancée en C++</li>
                        <li>Ordinateurs : structure et applications</li>
                        <li>Algorithmes et structures de données</li>
                    </ul>
                    <p>
                        Actuellement, ce qui m'intéresse le plus, c'est le développement web. Malgré qu'aucun de mes cours de certificats ne m'ait initié à ce domaine, c'est là où j'ai réalisé la majorité de <a href='/informatique#info-web' className='font-medium hover:underline'>mes projets</a>.
                    </p>
                </div>
            </div>
        </div>
    </Layout>
)
}

export default AProposPage

export const Head = () => (
<Seo title="À propos" description="La guitare, la pédagogie et la programmation; ce sont mes trois passions qui m'ont guidé jusqu'à aujourd'hui."/>
)