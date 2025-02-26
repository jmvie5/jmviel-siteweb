import { Outlet } from "react-router";
import githubLogo from "~/assets/images/informatique/github.webp"
import linkedinLogo from "~/assets/images/informatique/linkedin.webp"

interface LayoutProps {
    children: React.ReactNode;
    dark?: boolean;
}

const Layout = ({ children, dark }: LayoutProps) => {
    // const intl = useIntl();

    return (
        <div className="flex min-h-dvh justify-center">
            <div className=" flex flex-col justify-between w-full">
                <main className="flex flex-col h-full">
                    <div className="absolute right-0 m-4 hover:underline z-10 text-black">
                        {/* <LanguageSwitcher
                            className={dark ? 'text-white' : 'text-black'}
                            resolveLanguageName={(locale) => intl.formatMessage({ id: `${locale}` })}
                        /> */}
                        LNG
                    </div>
                    <Outlet/>
                </main>
                <footer className="flex flex-col xs:flex-row gap-4 justify-around text-jmv_white m-4 pt-4 border-t border-jmv_light">
                    <a href="mailto:info@jeanmichelviel.ca" className="hover:underline self-center">
                        info@jeanmichelviel.ca
                    </a>
                    <div className="flex flex-col md:flex-row self-center gap-4">
                        <a href="https://www.github.com/jmvie5/" className="flex space-x-1.5 group">
                            <img
                                src={githubLogo}
                                alt="GitHub Logo"
                                width={30}
                                height={30}
                                className="aspect-square"
                            />
                            <p className="group-hover:underline">@jmvie5</p>
                        </a>
                        <a href="https://www.linkedin.com/in/jeanmichelviel/" className="flex space-x-1.5 group">
                            <img
                                src={linkedinLogo}
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
