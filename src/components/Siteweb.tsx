import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

interface SitewebProps {
  name: string;
  id?: string;
  siteName?: string;
  description: React.ReactElement;
  github: string;
  children: React.ReactNode;
}
//children = static image of website icon
const Siteweb = ({
  name,
  id,
  siteName,
  description,
  github,
  children,
}: SitewebProps) => {
  const link = "https://" + siteName;

  return (
    <div className="flex flex-col rounded-xl bg-gradient-to-r from-jmv_medium to-jmv_lessDark p-4 text-jmv_white">
      <div className="flex items-center gap-4">
        <div className="w-24">{children}</div>
        <div className="flex flex-col justify-between gap-2">
          <div className="text-xl font-bold">{name}</div>
          <div className="flex gap-3">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              {siteName}
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              <div className="flex gap-1">
                <StaticImage
                  src="../images/informatique/github.webp"
                  alt="Github logo"
                  className="w-6"
                />
                <p>GitHub</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-2">{description}</div>
    </div>
  );
};

export default Siteweb;
