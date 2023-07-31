import * as React from 'react'
import { Fragment } from 'react';
import Layout from '../components/Layout'
import { Link } from 'gatsby';
import NavBar from '../components/NavBar';
import Seo from '../components/Seo'
import { LiteYTEmbed } from '@justinribeiro/lite-youtube';
import { Transition } from '@headlessui/react'
import { StaticImage } from 'gatsby-plugin-image';

type CustomElement<T> = Partial<T & React.DOMAttributes<T> & { children: any }>;

declare global {
	namespace React.JSX {
		interface IntrinsicElements {
		['lite-youtube']: CustomElement<LiteYTEmbed>;
		}
	}
}

/* Coquette
<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fduopichenotte%2Fvideos%2F1051388251728376%2F&show_text=false&width=560&t=0" className="border-0 aspect-video overflow-hidden " allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
 */
const MusiquePage = () => {
	
	return (
		<Layout>
			<div className="bg-[url(../images/guitar.jpg)] bg-cover h-96">
				<div className="grid grid-rows-3 justify-between text-jmv_white h-96 w-[67%] min-[398px]:w-[60%] xxs:w-[50%] min-[506px]:w-[42%] lg:w-[50%] ">
					<div className='flex flex-col my-4 '>
						<h1 className='text-2xl ml-4'>Jean-Michel Viel</h1>
						<NavBar/>
					</div>
					
					<div className="ml-4 row-span-2 -mt-4 sm:-mt-0 ">
						<h2 className='text-xl sm:my-4 my-2'>Musique</h2>
						<p className='text-sm md:text-base'>Je suis musicien à Québec depuis plus de 14 ans, diplômé du baccalauréat en interprétation jazz/pop et de la maitrise en didactique instrumentale de la Faculté de musique de l'Université Laval.</p>
						<p className='text-sm md:text-base my-4'>Besoin d'un musicien ou d'un groupe pour votre évènement? <Link to="/contact" className='font-medium underline hover:text-jmv_light'>Contactez-moi!</Link></p>
						<p></p>
					</div>
				</div>
			</div>
			<div className=' bg-gradient-to-b from-black to bg-jmv_dark h-10'></div>
			
			<div className='flex flex-col max-w-7xl self-center gap-4'>
				<div className='space-y-2 mx-2 sm:mx-4'>
					<h2 id="mus-duo" className='text-xl text-jmv_light '>Duo Pichenotte</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2'>
						<StaticImage src='../images/musique/Duo_Pichenotte.jpg' alt="Duo Pichenotte" className='mb-2 sm:mb-0'/>
						<div className='flex flex-col justify-around sm:ml-2'>
							<iframe className="border-0 w-full h-32" src="https://bandcamp.com/EmbeddedPlayer/album=1471944775/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://leduopichenotte.bandcamp.com/album/with-friends-for-christmas">With friends, for Christmas de Le Duo Pichenotte</a></iframe>
							<iframe className="border-0 w-full h-32" src="https://bandcamp.com/EmbeddedPlayer/album=3343381706/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://leduopichenotte.bandcamp.com/album/comme-un-manouche">Comme Un Manouche de Le Duo Pichenotte</a></iframe>
							<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fduopichenotte%2Fvideos%2F1236176119915900%2F&show_text=false&width=560&t=0" className="border-0 aspect-video overflow-hidden w-full" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"/>
						</div>
					</div>
				</div>
				<div className='space-y-2 mx-2 sm:mx-4'>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
						<div className="flex flex-col w-full justify-between">
							<h2 className='text-xl text-jmv_light mb-2'>La Revoir</h2>
							<iframe className='w-full aspect-square' src="https://bandcamp.com/EmbeddedPlayer/track=809649105/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://larevoir.bandcamp.com/track/lautomnale">L'automnale by La Revoir</a></iframe>
						</div>
						<div className='flex flex-col gap-2 justify-between w-full'>
							<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FLaRevoir%2Fvideos%2F2600890786839713%2F&show_text=false&width=560&t=0" className="border-0 aspect-video overflow-hidden " allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
							<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FLaRevoir%2Fvideos%2F268978514085998%2F&show_text=false&width=560&t=0" className="border-0 aspect-video overflow-hidden " allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" ></iframe>
						</div>
					</div>
				</div>
				<div className='space-y-2 mx-2 sm:mx-4'>
					<h2 id="mus-solo" className='text-xl text-jmv_light '>Récital de fin de maitrise</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
							<div>
								<div className='aspect-video w-full'>
									<lite-youtube videoId='jlYKvRdRvIU' title='Renversement' videoTitle='Renversement'></lite-youtube>
								</div>
								<h3 className=' text-sm text-jmv_white text-center'>Renversement</h3>
							</div>
							<div>
								<div className='aspect-video w-full'>
									<lite-youtube videoId='iyWtXGCrx0I' title="Lines of Oppression"></lite-youtube>
								</div>
								<h3 className=' text-sm text-jmv_white text-center'>Lines of Oppression</h3>
							</div>
							<div>
								<div className='aspect-video w-full'>
									<lite-youtube videoId='N2s9Totqj3g' title="Shaw 'Nuff"></lite-youtube>
								</div>
								<h3 className=' text-sm text-jmv_white text-center'>Shaw 'Nuff</h3>
							</div>
							<div>
								<div className='aspect-video w-full'>
									<lite-youtube videoId='vVpOqi-AiyQ' title="Chelsea Bridge"></lite-youtube>
								</div>
								<h3 className=' text-sm text-jmv_white text-center'>Chelsea Bridge</h3>
							</div>
						</div>					
				</div>
				<div className='space-y-2 mx-2 sm:mx-4'>
					<h2 id="mus-solo" className='text-xl text-jmv_light '>Guitare solo</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
						<StaticImage src='../images/musique/Solo.jpg' alt="Jean-Michel Viel, soliste" className=''/>
						<div className='flex flex-col justify-around gap-2'>
							<div>
								<div className='aspect-video w-full'>
									<lite-youtube videoId='B3IEiCGBJ6s' title='Like Someone In Love' videoTitle='Like Someone In Love'></lite-youtube>
								</div>
								<h3 className=' text-sm text-jmv_white text-center'>Like Someone In Love</h3>
							</div>
							<div>
								<div className='aspect-video w-full'>
									<lite-youtube videoId='XOkeHWtaB4c' title="You Don't Know What Love Is - Guitare solo"></lite-youtube>
								</div>
								<h3 className=' text-sm text-jmv_white text-center'>You Don't Know What Love Is</h3>
							</div>
						</div>
					</div>						
				</div>
				<div className='space-y-2 mx-2 sm:mx-4'>
					<h2 className='text-xl text-jmv_light'>Claudia Caron Trio</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
						<div>
							<div className='aspect-video w-full'>
								<lite-youtube videoId="h-GswqZiHGU" title='Claudia Caron Trio'></lite-youtube>
							</div>
							<h3 className=' text-sm text-jmv_white text-center'>Vidéo promo</h3>
						</div>
						<div>
							<div className='aspect-video w-full'>
								<lite-youtube videoId="F0vM01LoRDg" title="Je Veux (Zaz cover) - Claudia Caron"></lite-youtube>
							</div>
							<h3 className=' text-sm text-jmv_white text-center'>Je Veux</h3>
						</div>
					</div>
				</div>
				<div className='space-y-2 mx-2 sm:mx-4'>
					<h2 className='text-xl text-jmv_light'>Musique nationale de la Réserve navale</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
						<div className='aspect-video w-full'>
							<lite-youtube videoId="HrFHISfk81I" title='Cantina Band'></lite-youtube>
						</div>
						<div className='aspect-video w-full'>
							<lite-youtube videoId="p3tJY4951gM" title="Stella by Starlight"></lite-youtube>
						</div>
						<div className='aspect-video w-full'>
							<lite-youtube videoId="kg6oX0n0NFI" title="Five Foot Two, Eyes of Blue (Has Anybody Seen My Girl?)"></lite-youtube>
						</div>
						<div className='aspect-video w-full'>
							<lite-youtube videoId="DxmbczJdGY4" title="Gens du pays"></lite-youtube>
						</div>
					</div>
				</div>
				
			</div>
			
		</Layout>
	)
}

export default MusiquePage

export const Head = () => (
	<Seo title="Musique" />
)