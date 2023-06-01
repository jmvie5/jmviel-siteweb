/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Jean-Michel Viel`,
    siteUrl: `https://jeanmichelviel.ca`,
    description: "Site web de Jean-Michel Viel, musicien et programmeur.",
    image: "./src/images/icon.png",
    menuLinks: [
      {
        name: "Accueil",
        link: "/"
      },
      {
        name: "À propos",
        link: "/a-propos",
      },
      {
        name: "Musique",
        link: "/musique"
      },
      {
        name: "Informatique",
        link: "/informatique"
      },
      {
        name: "Contact",
        link: "/contact"
      }
    ]
  },
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "name": `Jean-Michel Viel`,
        "short_name": `JMV`,
        "start_url": `/`,
        "background_color": `#0d1b2a`,
        "theme_color": `#0d1b2a`,
        "display": `standalone`,
        "icon": "src/images/icon.png"
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://jeanmichelviel.ca',
        sitemap: 'https://jeanmichelviel.ca/sitemap-index.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
  ]
};