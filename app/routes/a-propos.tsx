import type { Route } from './+types/a-propos';
import {t} from "i18next"
import i18nServer from '~/i18next.server';
import { Link } from 'react-router';
import edumediaLogo from "../assets/images/informatique/edumedia-logo.svg"
import alecLogo from "../assets/images/informatique/alec-logo.svg"
import comboJazzBoat from "../assets/images/a-propos/ComboJazzMTMBateau.webp"

export async function loader({ request, params }: Route.LoaderArgs) {

    const locale = params.lang 
        ? params.lang 
        : await i18nServer.getLocale(request)

    const t = await i18nServer.getFixedT(locale)

    const title = t("About")
    const description = t("about-desc")

  
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

const AProposPage = () => {
    return (

        <div className="grid grid-cols-1 gap-4 mx-2 sm:mx-4 text-jmv_white max-w-7xl self-center">
            <div className='space-y-4'>
                <h2 className="text-xl text-jmv_light mb-2">
                {t('where-I-Am')}
                </h2>
                <div className='flex flex-col justify-between lg:flex-row-reverse'>
                    <div className='w-full flex items-center justify-around p-2'>
                        <a href='https://www.edumedia.com'><img src={edumediaLogo} alt='Logo EduMedia' className='w-fit lg:float-left'/></a>
                        <a href='https://alec-edu.com'><img src={alecLogo} alt='Logo Alec' className='w-fit lg:float-right'/> </a>
                    </div>
                    
                    <div className='space-y-4'>
                    <p className=''>
                        {t('where-I-Am-1')}
                        <a href='https://www.edumedia.com' className='hover:underline font-medium'>EduMedia</a>
                        {t('where-I-Am-2')}
                        <a href='https://alec-edu.com' className='hover:underline font-medium'>Alec</a>
                        {t('where-I-Am-3')}
                    </p>
                    <p>{t('my-background')}</p>
                    </div>
                    
                    
                </div>

            </div>
            
            <div className="">
                <h2 className="text-xl text-jmv_light mb-2">{t("Music")}</h2>
                <div className="space-y-2 flex flex-col xs:inline">
                    <img
                        src={comboJazzBoat}
                        alt="Spectacle sur le HMS PROTECTOR"
                        className="float-right w-72 sm:w-96 mx-4 mb-2 self-center"
                    />
                    <p>
                        {t("about-1")}
                    </p>
                    <p>
                        {t("about-2")}
                        <a href='mailto:info@jeanmichelviel.ca' className="font-medium hover:underline">{t("contact-me")}</a>
                    </p>
                    <p>
                        {t("about-3")}
                    </p>
                    <p>
                        {t("about-4")}
                    </p>
                </div>
            </div>
            <div>
                <h2 className="text-xl text-jmv_light mb-2">{t("Computer Science")}</h2>
                <div className="space-y-2">
                    <p>
                        {t("about-5")}{" "}
                        <a href="/informatique#info-jeux" className="font-medium hover:underline">
                            Roblox
                        </a>
                        {t("about-6")}
                    </p>
                    <p>
                        {t("about-7")}
                    </p>
                    <p className="mt-2">
                        {t("completed-courses")}
                    </p>
                    <ul className="list-disc ml-6">
                        <li>
                            {t("python")}
                        </li>
                        <li>
                            {t("cpp")}
                        </li>
                        <li>
                            {t("osa")}
                        </li>
                        <li>
                            {t("algo")}
                        </li>
                    </ul>
                    <p>
                    {t("about-8")}
                        <Link to="/informatique#info-web" className="font-medium hover:underline">
                            {t("my-projects")}
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AProposPage;

