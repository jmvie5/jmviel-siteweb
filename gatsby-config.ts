/**
 * @type {import('gatsby').GatsbyConfig}
 */
import messagesFR from "./src/langs/fr.json";
import messagesEN from "./src/langs/en.json";

module.exports = {
  graphqlTypegen: true,
  siteMetadata: {
    title: `Jean-Michel Viel`,
    siteUrl: `https://jeanmichelviel.ca`,
    description: "Jean-Michel Viel, musicien, pédagogue et programmeur.",
    image: "./src/images/icon.webp",
    previewImage: "./src/images/mascaradePreview.webp",
    menuLinks: [
      {
        name: "Accueil",
        link: "/",
      },
      {
        name: "À propos",
        link: "/a-propos",
      },
      {
        name: "Musique",
        link: "/musique",
      },
      {
        name: "Informatique",
        link: "/informatique",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Jean-Michel Viel`,
        short_name: `JMV`,
        start_url: `/`,
        background_color: `#0d1b2a`,
        theme_color: `#0d1b2a`,
        display: `standalone`,
        icon: "src/images/icon.webp",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://jeanmichelviel.ca",
        sitemap: "https://jeanmichelviel.ca/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-i18n-l10n`,
      options: {
        // string: IETF BCP 47 language tag: default locale, which won't be prefixed
        defaultLocale: `fr-CA`,
        // string: absolute site url
        siteUrl: `https://jeanmichelviel.ca`,
        // locales[]: all locales, which should be available
        locales: [
          {
            // string: IETF BCP 47 language tag of this language
            locale: `fr-CA`,
            // string: prefix for this language, which will be used to prefix the url, if it's not the default locale
            prefix: `fr`,
            // object: mapping of given urls (by filename) to translated urls, if no mapping exists, given url will be used
            slugs: {},
            // object: this messages will be handed over to react-intl and available throughout the website
            messages: messagesFR,
          },
          // another language
          {
            locale: `en-CA`,
            prefix: `en`,
            slugs: {
              "/a-propos": "/about",
              "/musique": "/music",
              "/informatique": "/computerscience",
            },
            messages: messagesEN,
          },
        ],
        // omit certain path segments (relative directories)
        // be careful not to cause path collisions
        pathBlacklist: [
          "/pages", // /pages/products/gummibears becomes /products/gummibears
        ],
      },
    },
  ],
};
