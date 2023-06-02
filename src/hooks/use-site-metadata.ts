import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  type DataProps = {
    site: {
      siteMetadata: {
        title: string,
        description: string,
        siteUrl: string,
        image: any,
        menuLinks: [{
          name: string,
          link: string,
        }]
      }
    }
  }

  const data:DataProps = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          menuLinks {
            name
            link
            }
        }
      }
    }
  `)

  return data.site.siteMetadata
}