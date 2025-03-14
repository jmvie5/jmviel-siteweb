import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { LanguageSwitcher } from 'gatsby-plugin-i18n-l10n';
import { useIntl } from 'react-intl';

interface LayoutProps {
    children: React.ReactNode;
    dark?: boolean;
}

const Layout = ({ children, dark }: LayoutProps) => {
    const intl = useIntl();

    return (
        <div className="flex bg-jmv_dark min-h-screen justify-center">
            <div className=" flex flex-col justify-between w-full">
                <main className="flex flex-col h-full">
                    <div className="absolute right-0 m-4 hover:underline">
                        <LanguageSwitcher
                            className={dark ? 'text-white' : 'text-black'}
                            resolveLanguageName={(locale) => intl.formatMessage({ id: `${locale}` })}
                        />
                    </div>
                    {children}
                </main>
                <footer className="flex flex-col xs:flex-row gap-4 justify-around text-jmv_white m-4 pt-4 border-t border-jmv_light">
                    <a href="mailto:info@jeanmichelviel.ca" className="hover:underline self-center">
                        info@jeanmichelviel.ca
                    </a>
                    <div className="flex flex-col md:flex-row self-center gap-4">
                        <a href="https://www.github.com/jmvie5/" className="flex space-x-1.5 group">
                            <StaticImage
                                src="../images/informatique/github.webp"
                                alt="GitHub Logo"
                                width={30}
                                height={30}
                                className="aspect-square"
                            />
                            <p className="group-hover:underline">@jmvie5</p>
                        </a>
                        <a href="https://www.linkedin.com/in/jeanmichelviel/" className="flex space-x-1.5 group">
                            <StaticImage
                                src="../images/informatique/linkedin.webp"
                                alt="LinkedIn Logo"
                                width={30}
                                height={30}
                                className="aspect-square"
                            />
                            <p className="group-hover:underline">@jeanmichelviel</p>
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Layout;
