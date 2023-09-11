import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div className="flex bg-jmv_dark min-h-screen justify-center">
      <div className=" flex flex-col justify-between w-full">
        <main className="flex flex-col h-full">{children}</main>
        <footer className="flex flex-col xs:flex-row gap-4 justify-around text-jmv_white m-4 pt-4 border-t border-jmv_light">
          <a
            href="mailto:info@jeanmichelviel.ca"
            className="hover:underline self-center"
          >
            info@jeanmichelviel.ca
          </a>
          <div className="flex flex-col md:flex-row self-center gap-4">
            <a
              href="https://www.github.com/jmvie5/"
              target="_blank"
              rel="noreferrer"
              className="flex space-x-1.5 group"
            >
              <StaticImage
                src="../images/informatique/github.webp"
                alt="GitHub Logo"
                width={30}
                height={30}
                className="aspect-square"
              />
              <p className="group-hover:underline">@jmvie5</p>
            </a>
            <a
              href="https://www.linkedin.com/in/jeanmichelviel/"
              target="_blank"
              rel="noreferrer"
              className="flex space-x-1.5 group"
            >
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
