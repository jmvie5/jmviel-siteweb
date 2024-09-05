import * as React from 'react';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import { Link, graphql, HeadProps } from 'gatsby';
import Seo from '../components/Seo';
import { StaticImage } from 'gatsby-plugin-image';
import { FormattedMessage, useIntl } from 'react-intl';
import { LanguageSwitcher } from 'gatsby-plugin-i18n-l10n';

type DataProps = {
    pageTitle: {
        message: string;
    };
    pageDescription: {
        message: string;
    };
};

const AProposPage = () => {
    const intl = useIntl();
    return (
        <Layout>
            <div className="flex justfify-between bg-[url(../images/a-propos/JM_Lac_sm.webp)] xs:bg-[url(../images/a-propos/JM_Lac.webp)] bg-cover bg-[center_top] h-96 relative">
                <div className="grid grid-rows-3 justify-between text-jmv_dark h-96 xs:w-[50%]">
                    <div className="w-[50%] xs:w-full flex flex-col my-4">
                        <h1 className="text-2xl ml-4">Jean-Michel Viel</h1>
                        <NavBar dark />
                    </div>

                    <div className="m-4 row-span-2 bg-jmv_white/50 p-2 rounded-lg">
                        <h2 className="text-xl mb-4">
                            <FormattedMessage id="About" />
                        </h2>
                        <p className="mt-4">
                            <FormattedMessage id="about-desc" />
                        </p>
                    </div>
                </div>
                <div className="absolute right-0 m-4 hover:underline">
                    <LanguageSwitcher resolveLanguageName={(locale) => intl.formatMessage({ id: `${locale}` })} />
                </div>
            </div>
            <div className="bg-gradient-to-b from-black to bg-jmv_dark h-10"></div>

            <div className="grid grid-cols-1 gap-4 mx-2 sm:mx-4 text-jmv_white max-w-7xl self-center">
                <div className="">
                    <h2 className="text-xl text-jmv_light mb-2">Musique</h2>
                    <div className="space-y-2 flex flex-col xs:inline">
                        <StaticImage
                            src="../images/a-propos/ComboJazzMTMBateau.webp"
                            alt="Spectacle sur le HMS PROTECTOR"
                            className="float-right aspect-square w-72 sm:w-96 mx-4 mb-2 self-center"
                        />
                        <p>
                            <FormattedMessage id="about-1" />
                        </p>
                        <p>
                            <FormattedMessage id="about-2" />
                            <Link to="/contact" className="font-medium hover:underline">
                                <FormattedMessage id="contact-me" />
                            </Link>
                            !
                        </p>
                        <p>
                            <FormattedMessage id="about-3" />
                        </p>
                        <p>
                            <FormattedMessage id="about-4" />
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl text-jmv_light mb-2">Informatique</h2>
                    <div className="space-y-2">
                        <p>
                            <FormattedMessage id="about-5" />{' '}
                            <a href="/informatique#info-jeux" className="font-medium hover:underline">
                                Roblox
                            </a>
                            <FormattedMessage id="about-6" />
                        </p>
                        <p>
                            <FormattedMessage id="about-7" />
                        </p>
                        <p className="mt-2">
                            <FormattedMessage id="completed-courses" />
                        </p>
                        <ul className="list-disc ml-6">
                            <li>
                                <FormattedMessage id="python" />
                            </li>
                            <li>
                                <FormattedMessage id="cpp" />
                            </li>
                            <li>
                                <FormattedMessage id="osa" />
                            </li>
                            <li>
                                <FormattedMessage id="algo" />
                            </li>
                        </ul>
                        <p>
                            <FormattedMessage id="about-8" />
                            <a href="/informatique#info-web" className="font-medium hover:underline">
                                <FormattedMessage id="my-projects" />
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AProposPage;

export function Head(props: HeadProps<DataProps>) {
    return <Seo title={props.data.pageTitle.message} description={props.data.pageDescription.message} />;
}

export const query = graphql`
    query AProposPage($locale: String) {
        pageTitle: translation(locale: { eq: $locale }, key: { eq: "About" }) {
            message
        }
        pageDescription: translation(locale: { eq: $locale }, key: { eq: "about-desc" }) {
            message
        }
    }
`;
