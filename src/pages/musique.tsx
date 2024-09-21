import * as React from 'react';
import Layout from '../components/Layout';
import { Link, graphql, HeadProps } from 'gatsby';
import NavBar from '../components/NavBar';
import Seo from '../components/Seo';
import { LiteYTEmbed } from '@justinribeiro/lite-youtube';
import { StaticImage } from 'gatsby-plugin-image';
import { ArrowTopRightOnSquareIcon, DocumentArrowDownIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { FormattedMessage } from 'react-intl';
import { DataProps } from '../types';

type CustomElement<T> = Partial<T & React.DOMAttributes<T> & { children: any }>;

declare global {
    namespace React.JSX {
        interface IntrinsicElements {
            ['lite-youtube']: CustomElement<LiteYTEmbed>;
        }
    }
}

const MusiquePage = () => {
    return (
        <Layout dark>
            <div className="bg-[url(../images/guitar.webp)] bg-cover h-96">
                <div className="grid grid-rows-3 justify-between text-jmv_white h-96 w-[67%] min-[398px]:w-[60%] xxs:w-[50%] min-[506px]:w-[42%] lg:w-[50%] ">
                    <div className="flex flex-col my-4 ">
                        <h1 className="text-2xl ml-4">Jean-Michel Viel</h1>
                        <NavBar />
                    </div>

                    <div className="ml-4 row-span-2 -mt-4 sm:-mt-0 ">
                        <h2 className="text-xl sm:mb-4 mb-2">Musique</h2>
                        <p className="text-sm md:text-base">
                            <FormattedMessage id="music-desc" />
                        </p>
                        <div className="">
                            <p className="text-sm md:text-base my-4">
                                <FormattedMessage id="need-musician" />
                                <Link to="/contact" className="font-medium underline hover:text-jmv_light flex">
                                    <FormattedMessage id="contact" /><EnvelopeIcon className="ml-1 w-6" />
                                </Link>
                            </p>
                        </div>

                        <div className="text-sm md:text-base hidden lg:flex">
                            <a href="#mus-partitions" className="flex font-medium underline hover:text-jmv_light">
                                <FormattedMessage id="sheet-music-download" /><DocumentArrowDownIcon className="w-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-gradient-to-b from-black to bg-jmv_dark h-10"></div>

            <div className="flex flex-col max-w-7xl self-center gap-4">
                <div className="space-y-2 mx-2 sm:mx-4">
                    <h2 id="mus-duo" className="text-xl text-jmv_light ">
                        Duo Pichenotte
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <StaticImage
                            src="../images/musique/Duo_Pichenotte.webp"
                            alt="Duo Pichenotte"
                            className="mb-2 sm:mb-0"
                        />
                        <div className="flex flex-col justify-around sm:ml-2">
                            <iframe
                                className="border-0 w-full h-32"
                                src="https://bandcamp.com/EmbeddedPlayer/album=1471944775/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
                                seamless
                            >
                                <a href="https://leduopichenotte.bandcamp.com/album/with-friends-for-christmas">
                                    With friends, for Christmas - Le Duo Pichenotte
                                </a>
                            </iframe>
                            <iframe
                                className="border-0 w-full h-32"
                                src="https://bandcamp.com/EmbeddedPlayer/album=3343381706/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
                                seamless
                            >
                                <a href="https://leduopichenotte.bandcamp.com/album/comme-un-manouche">
                                    Comme Un Manouche - Le Duo Pichenotte
                                </a>
                            </iframe>
                            <iframe
                                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fduopichenotte%2Fvideos%2F1236176119915900%2F&show_text=false&width=560&t=0"
                                className="border-0 aspect-video overflow-hidden w-full"
                                allowFullScreen={true}
                                allow="web-share"
                            />
                        </div>
                    </div>
                </div>
                <div className="space-y-2 mx-2 sm:mx-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="flex flex-col w-full justify-between">
                            <h2 className="text-xl text-jmv_light mb-2">La Revoir</h2>
                            <iframe
                                className="w-full aspect-square"
                                src="https://bandcamp.com/EmbeddedPlayer/track=809649105/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/"
                                seamless
                            >
                                <a href="https://larevoir.bandcamp.com/track/lautomnale">L'automnale by La Revoir</a>
                            </iframe>
                        </div>
                        <div className="flex flex-col gap-2 justify-between w-full">
                            <iframe
                                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FLaRevoir%2Fvideos%2F2600890786839713%2F&show_text=false&width=560&t=0"
                                className="border-0 aspect-video overflow-hidden "
                                allowFullScreen={true}
                                allow="web-share"
                            ></iframe>
                            <iframe
                                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FLaRevoir%2Fvideos%2F268978514085998%2F&show_text=false&width=560&t=0"
                                className="border-0 aspect-video overflow-hidden "
                                allowFullScreen={true}
                                allow="web-share"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="space-y-2 mx-2 sm:mx-4">
                    <h2 id="mus-solo" className="text-xl text-jmv_light ">
                        <FormattedMessage id="master-recital" />
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                            <div className="aspect-video w-full">
                                <lite-youtube
                                    videoId="jlYKvRdRvIU"
                                    title="Renversement"
                                    videoTitle="Renversement"
                                ></lite-youtube>
                            </div>
                            <h3 className=" text-sm text-jmv_white text-center">Renversement</h3>
                        </div>
                        <div>
                            <div className="aspect-video w-full">
                                <lite-youtube videoId="iyWtXGCrx0I" title="Lines of Oppression"></lite-youtube>
                            </div>
                            <h3 className=" text-sm text-jmv_white text-center">Lines of Oppression</h3>
                        </div>
                        <div>
                            <div className="aspect-video w-full">
                                <lite-youtube videoId="N2s9Totqj3g" title="Shaw 'Nuff"></lite-youtube>
                            </div>
                            <h3 className=" text-sm text-jmv_white text-center">Shaw 'Nuff</h3>
                        </div>
                        <div>
                            <div className="aspect-video w-full">
                                <lite-youtube videoId="vVpOqi-AiyQ" title="Chelsea Bridge"></lite-youtube>
                            </div>
                            <h3 className=" text-sm text-jmv_white text-center">Chelsea Bridge</h3>
                        </div>
                    </div>
                </div>
                <div className="space-y-2 mx-2 sm:mx-4">
                    <h2 id="mus-solo" className="text-xl text-jmv_light ">
                        <FormattedMessage id='solo-guitar' />
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <StaticImage src="../images/musique/Solo.webp" alt="Jean-Michel Viel, soliste" className="" />
                        <div className="flex flex-col justify-around gap-2">
                            <div>
                                <div className="aspect-video w-full">
                                    <lite-youtube
                                        videoId="B3IEiCGBJ6s"
                                        title="Like Someone In Love"
                                        videoTitle="Like Someone In Love"
                                    ></lite-youtube>
                                </div>
                                <h3 className=" text-sm text-jmv_white text-center">Like Someone In Love</h3>
                            </div>
                            <div>
                                <div className="aspect-video w-full">
                                    <lite-youtube
                                        videoId="pVpc0dIli8Q"
                                        title="You Don't Know What Love Is - Guitare solo"
                                    ></lite-youtube>
                                </div>
                                <h3 className=" text-sm text-jmv_white text-center">You Don't Know What Love Is</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-2 mx-2 sm:mx-4">
                    <h2 className="text-xl text-jmv_light">Claudia Caron Trio</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                            <div className="aspect-video w-full">
                                <lite-youtube videoId="h-GswqZiHGU" title="Claudia Caron Trio"></lite-youtube>
                            </div>
                            <h3 className=" text-sm text-jmv_white text-center">Vidéo promo</h3>
                        </div>
                        <div>
                            <div className="aspect-video w-full">
                                <lite-youtube
                                    videoId="F0vM01LoRDg"
                                    title="Je Veux (Zaz cover) - Claudia Caron"
                                ></lite-youtube>
                            </div>
                            <h3 className=" text-sm text-jmv_white text-center">Je Veux</h3>
                        </div>
                    </div>
                </div>
                <div className="space-y-2 mx-2 sm:mx-4">
                    <h2 className="text-xl text-jmv_light"><FormattedMessage id='nbnr' /></h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="aspect-video w-full">
                            <lite-youtube videoId="HrFHISfk81I" title="Cantina Band"></lite-youtube>
                        </div>
                        <div className="aspect-video w-full">
                            <lite-youtube videoId="p3tJY4951gM" title="Stella by Starlight"></lite-youtube>
                        </div>
                        <div className="aspect-video w-full">
                            <lite-youtube
                                videoId="kg6oX0n0NFI"
                                title="Five Foot Two, Eyes of Blue (Has Anybody Seen My Girl?)"
                            ></lite-youtube>
                        </div>
                        <div className="aspect-video w-full">
                            <lite-youtube videoId="DxmbczJdGY4" title="Gens du pays"></lite-youtube>
                        </div>
                    </div>
                </div>
                <div className="space-y-2 mx-2 sm:mx-4" id="mus-partitions">
                    <h2 className="text-xl text-jmv_light"><FormattedMessage id='music-downloads' /></h2>
                    <p className="text-jmv_white">
                        <FormattedMessage id='need-a-teacher' />{' '}
                        <Link to="/contact" className="font-medium underline hover:text-jmv_light">
                        <FormattedMessage id='contact' />
                        </Link>{' '}
                        !
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-2 text-jmv_white">
                            <h3 className="font-semibold">Transcriptions</h3>
                            <p>
                            <FormattedMessage id='transcription-desc' />
                            </p>
                            <div className="">
                                <div className='before:content-["•"] flex'>
                                    <a
                                        href="/partitions/Conception-Kurt.pdf"
                                        className="hover:underline flex ml-1"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <p className="w-[220px] ">Conception - Solo Kurt Rosenwinkel</p>
                                        <ArrowTopRightOnSquareIcon className="w-6 ml-1" />
                                    </a>
                                </div>
                                <div className='before:content-["•"] flex '>
                                    <a
                                        href="/partitions/Have_you_met_miss_Jones-Kreisberg.pdf"
                                        className="hover:underline flex ml-1"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <p className="w-[220px] ">Have You Met Miss Jones? - Jonathan Kreisberg</p>
                                        <ArrowTopRightOnSquareIcon className="w-6 ml-1" />
                                    </a>
                                </div>
                                <div className='before:content-["•"] flex'>
                                    <a
                                        href="/partitions/Sail_Away-Tom_Harell.pdf"
                                        className="hover:underline flex ml-1"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <p className="w-[220px] ">Sail Away - Solo Tom Harell</p>
                                        <ArrowTopRightOnSquareIcon className="w-6 ml-1" />
                                    </a>
                                </div>
                                <div className='before:content-["•"] flex'>
                                    <a
                                        href="/partitions/You_Go_To_My_Head-Kurt.pdf"
                                        className="hover:underline flex ml-1"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <p className="w-[220px] ">You Go To My Head - Kurt Rosenwinkel</p>
                                        <ArrowTopRightOnSquareIcon className="w-6 ml-1" />
                                    </a>
                                </div>
                                <div className='before:content-["•"] flex'>
                                    <a
                                        href="/partitions/You'd_Be_So_Nice_To_Come_Home_To-Jim_Hall.pdf"
                                        className="hover:underline flex ml-1"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <p className="w-[220px] ">You'd Be So Nice To Come Home To - Jim Hall</p>
                                        <ArrowTopRightOnSquareIcon className="w-6 ml-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 text-jmv_white sm:pl-4">
                            <h3 className="font-semibold">Exercices</h3>
                            <p>
                            <FormattedMessage id='exercices-desc' />
                            </p>
                            <div className="">
                                <div className='before:content-["•"] flex'>
                                    <a
                                        href="/partitions/Drop_2.pdf"
                                        className="hover:underline flex ml-1"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <p className="w-[220px]">Drop 2</p>
                                        <ArrowTopRightOnSquareIcon className="w-6 ml-1" />
                                    </a>
                                </div>
                                <div className='before:content-["•"] flex'>
                                    <a
                                        href="/partitions/Exercice_Sweep_TuneUp.pdf"
                                        className="hover:underline flex ml-1"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <p className="w-[220px]"><FormattedMessage id='exercice-sweep' /></p>
                                        <ArrowTopRightOnSquareIcon className="w-6 ml-1" />
                                    </a>
                                </div>
                                <div className='before:content-["•"] flex'>
                                    <a
                                        href="/partitions/Exercices_Arpèges.pdf"
                                        className="hover:underline flex ml-1"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <p className="w-[220px]"><FormattedMessage id='exercice-arpeggio' /></p>
                                        <ArrowTopRightOnSquareIcon className="w-6 ml-1" />
                                    </a>
                                </div>
                                <div className='before:content-["•"] flex'>
                                    <a
                                        href="/partitions/Exercices_main_du_manche.pdf"
                                        className="hover:underline flex ml-1"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <p className="w-[220px]"><FormattedMessage id='exercice-neck-hand' /></p>
                                        <ArrowTopRightOnSquareIcon className="w-6 ml-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 text-jmv_white">
                            <h3 className="font-semibold"><FormattedMessage id='compo-title' /></h3>
                            <p>
                            <FormattedMessage id='compo-desc' />
                            </p>
                            <div className="">
                                <div className='before:content-["•"] flex'>
                                    <a
                                        href="/partitions/Like_Someone_In_Love-JMViel.pdf"
                                        className="hover:underline flex ml-1"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <p className="w-[220px]">Like Someone In Love</p>
                                        <ArrowTopRightOnSquareIcon className="w-6 ml-1" />
                                    </a>
                                </div>
                                <div className='before:content-["•"] flex'>
                                    <a
                                        href="/partitions/You_Don't_Know_What_Love_Is.pdf"
                                        className="hover:underline flex ml-1"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <p className="w-[220px]">You Don't Know What Love Is</p>
                                        <ArrowTopRightOnSquareIcon className="w-6 ml-1" />
                                    </a>
                                </div>
                                <div className='before:content-["•"] flex'>
                                    <a
                                        href="/partitions/Entre_deux_villes.pdf"
                                        className="hover:underline flex ml-1"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <p className="w-[220px]">Entre deux villes</p>
                                        <ArrowTopRightOnSquareIcon className="w-6 ml-1" />
                                    </a>
                                </div>
                                <div className='before:content-["•"] flex'>
                                    <a
                                        href="/partitions/L'Automnale.pdf"
                                        className="hover:underline flex ml-1"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <p className="w-[220px]">L'Automnale</p>
                                        <ArrowTopRightOnSquareIcon className="w-6 ml-1" />
                                    </a>
                                </div>
                                <div className='before:content-["•"] flex'>
                                    <a
                                        href="/partitions/Renversements.pdf"
                                        className="hover:underline flex ml-1"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <p className="w-[220px]">Renversements</p>
                                        <ArrowTopRightOnSquareIcon className="w-6 ml-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default MusiquePage;

export function Head(props: HeadProps<DataProps>) {
    return <Seo title={props.data.pageTitle.message} description={props.data.pageDescription.message} />;
}

export const query = graphql`
    query MusiquePage($locale: String) {
        pageTitle: translation(locale: { eq: $locale }, key: { eq: "Music" }) {
            message
        }
        pageDescription: translation(locale: { eq: $locale }, key: { eq: "music-desc" }) {
            message
        }
    }
`;
