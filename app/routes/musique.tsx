import type { Route } from "./+types/musique";
import i18nServer from "~/i18next.server";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import duo_pichenotte_img from "~/assets/images/musique/Duo_Pichenotte.webp"
import solo_img from "~/assets/images/musique/Solo.webp"
import {t} from "i18next"
import { openInNewIcon } from '~/assets/icons';
import * as partitions from "~/assets/partitions"
import SheetMusicLink from "~/components/SheetMusicLink";


export async function loader({ request, params }: Route.LoaderArgs) {

    const locale = params.lang 
        ? params.lang 
        : await i18nServer.getLocale(request)

    const t = await i18nServer.getFixedT(locale)

    const title = t("Music")
    const description = t("music-desc")

    return { title, description }
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

export default function MusicPage() {

    const exercicesLinks = [
        {
            name: "Drop 2",
            url: partitions.Drop_2
        },
        {
            name: t('exercice-sweep'),
            url: partitions.Exercice_Sweep_TuneUp
        },
        {
            name: t('exercice-arpeggio'),
            url: partitions.Exercices_Arpèges
        },
        {
            name: t('exercice-neck-hand'),
            url: partitions.Exercices_main_du_manche
        }
    ]

    const transcriptionsLinks = [
        {
            name: "Conception - Solo Kurt Rosenwinkel",
            url: partitions.Conception_Kurt,
        },
        {
            name: "Have You Met Miss Jones? - Jonathan Kreisberg",
            url: partitions.Have_you_met_miss_Jones_Kreisberg,
        },
        {
            name: "Sail Away - Solo Tom Harell",
            url: partitions.Sail_Away_Tom_Harell,
        },
        {
            name: "You Go To My Head - Kurt Rosenwinkel",
            url: partitions.You_Go_To_My_Head_Kurt,
        },
        {
            name: "You'd Be So Nice To Come Home To - Jim Hall",
            url: partitions.Youd_Be_So_Nice_To_Come_Home_To_Jim_Hall,
        },
    ]


    const composLinks = [
        {
            name: "Entre deux villes",
            url: partitions.Entre_deux_villes
        },
        {
            name: "Like Someone In Love",
            url: partitions.Like_Someone_In_Love_JMViel
        },
        {
            name: "You Don't Know What Love Is",
            url: partitions.You_Dont_Know_What_Love_Is
        },
        {
            name: "L'automnale",
            url: partitions.LAutomnale
        },
        {
            name: "Renversements",
            url: partitions.Renversements
        },
    ]

    return (

        <div className="flex flex-col max-w-7xl self-center gap-4">
            <div className="space-y-2 mx-2 sm:mx-4">
                <h2 id="mus-duo" className="text-xl text-jmv_light ">
                    Duo Pichenotte
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <img
                        src={duo_pichenotte_img}
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
                            // c'est si bon RDV classique
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
                        <div>
                            <LiteYouTubeEmbed
                                id="y_wisU9jzxo"
                                title="Emily"
                            ></LiteYouTubeEmbed>
                            <h3 className=" text-sm text-jmv_white text-center">Emily</h3>
                        </div>
                        <div>
                            <LiteYouTubeEmbed
                                id="ehngWe59Pi4"
                                title="Entre deux villes"
                            ></LiteYouTubeEmbed>
                            <h3 className=" text-sm text-jmv_white text-center">Entre deux villes</h3>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="space-y-2 mx-2 sm:mx-4">
                <h2 id="mus-solo" className="text-xl text-jmv_light ">
                    {t("master-recital")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                        <div className="aspect-video w-full">
                            <LiteYouTubeEmbed
                                id="jlYKvRdRvIU"
                                title="Renversement"
                            ></LiteYouTubeEmbed>
                        </div>
                        <h3 className=" text-sm text-jmv_white text-center">Renversement</h3>
                    </div>
                    <div>
                        <div className="aspect-video w-full">
                            <LiteYouTubeEmbed id="iyWtXGCrx0I" title="Lines of Oppression"></LiteYouTubeEmbed>
                        </div>
                        <h3 className=" text-sm text-jmv_white text-center">Lines of Oppression</h3>
                    </div>
                    <div>
                        <div className="aspect-video w-full">
                            <LiteYouTubeEmbed id="N2s9Totqj3g" title="Shaw 'Nuff"></LiteYouTubeEmbed>
                        </div>
                        <h3 className=" text-sm text-jmv_white text-center">Shaw 'Nuff</h3>
                    </div>
                    <div>
                        <div className="aspect-video w-full">
                            <LiteYouTubeEmbed id="vVpOqi-AiyQ" title="Chelsea Bridge"></LiteYouTubeEmbed>
                        </div>
                        <h3 className=" text-sm text-jmv_white text-center">Chelsea Bridge</h3>
                    </div>
                </div>
            </div>
            <div className="space-y-2 mx-2 sm:mx-4">
                <h2 id="mus-solo" className="text-xl text-jmv_light ">
                    {t('solo-guitar')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <img src={solo_img} alt="Jean-Michel Viel, soliste" className="" />
                    <div className="flex flex-col justify-around gap-2">
                        <div>
                            <div className="aspect-video w-full">
                                <LiteYouTubeEmbed
                                    id="B3IEiCGBJ6s"
                                    title="Like Someone In Love"
                                ></LiteYouTubeEmbed>
                            </div>
                            <h3 className=" text-sm text-jmv_white text-center">Like Someone In Love</h3>
                        </div>
                        <div>
                            <div className="aspect-video w-full">
                                <LiteYouTubeEmbed
                                    id="pVpc0dIli8Q"
                                    title="You Don't Know What Love Is - Guitare solo"
                                ></LiteYouTubeEmbed>
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
                            <LiteYouTubeEmbed id="h-GswqZiHGU" title="Claudia Caron Trio"></LiteYouTubeEmbed>
                        </div>
                        <h3 className=" text-sm text-jmv_white text-center">Vidéo promo</h3>
                    </div>
                    <div>
                        <div className="aspect-video w-full">
                            <LiteYouTubeEmbed
                                id="F0vM01LoRDg"
                                title="Je Veux (Zaz cover) - Claudia Caron"
                            ></LiteYouTubeEmbed>
                        </div>
                        <h3 className=" text-sm text-jmv_white text-center">Je Veux</h3>
                    </div>
                </div>
            </div>
            <div className="space-y-2 mx-2 sm:mx-4">
                <h2 className="text-xl text-jmv_light">{t('nbnr')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="aspect-video w-full">
                        <LiteYouTubeEmbed id="HrFHISfk81I" title="Cantina Band"></LiteYouTubeEmbed>
                    </div>
                    <div className="aspect-video w-full">
                        <LiteYouTubeEmbed id="p3tJY4951gM" title="Stella by Starlight"></LiteYouTubeEmbed>
                    </div>
                    <div className="aspect-video w-full">
                        <LiteYouTubeEmbed
                            id="kg6oX0n0NFI"
                            title="Five Foot Two, Eyes of Blue (Has Anybody Seen My Girl?)"
                        ></LiteYouTubeEmbed>
                    </div>
                    <div className="aspect-video w-full">
                        <LiteYouTubeEmbed id="DxmbczJdGY4" title="Gens du pays"></LiteYouTubeEmbed>
                    </div>
                </div>
            </div>
            <div className="space-y-2 mx-2 sm:mx-4" id="mus-partitions">
                <h2 className="text-xl text-jmv_light">{t('music-downloads')}</h2>
                <p className="text-jmv_white">
                    {t('need-a-teacher')}{' '}
                    <a href="mailto:info@jeanmichelviel.ca" className="font-medium underline hover:text-jmv_light">
                    {t('contact')}
                    </a>{' '}
                    !
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-2 text-jmv_white">
                        <h3 className="font-semibold">Transcriptions</h3>
                        <p>
                        {t('transcription-desc')}
                        </p>
                        <div className="">
                            {transcriptionsLinks.map((link) => (
                                <SheetMusicLink name={link.name} url={link.url} />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 text-jmv_white sm:pl-4">
                        <h3 className="font-semibold">Exercices</h3>
                        <p>
                        {t('exercices-desc')}
                        </p>
                        <div className="">
                            {exercicesLinks.map((link) => (
                                <SheetMusicLink name={link.name} url={link.url} />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 text-jmv_white">
                        <h3 className="font-semibold">{t('compo-title')}</h3>
                        <p>
                        {t('compo-desc')}
                        </p>
                        <div className="">
                            {composLinks.map((link) => (
                                <SheetMusicLink name={link.name} url={link.url} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

