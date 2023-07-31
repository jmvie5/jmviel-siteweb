import React, { ReactNode } from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

interface SeoProps {
  title?: string,
  description?: string,
  pathname?: string,
  children?: ReactNode
};

export default function Seo({ title, description, pathname, children }: SeoProps) {
  const { title: defaultTitle, description: defaultDescription, image, previewImage, siteUrl } = useSiteMetadata();

  const seo = {
      title: title || defaultTitle,
      description: description || defaultDescription,
      image: `${siteUrl}${image}`,
      previewImage: `${siteUrl}${previewImage}`,
      url: `${siteUrl}${pathname || ``}`,
  };

  return (
      <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:image" content={previewImage} />
      {children}
      </>
  );
}