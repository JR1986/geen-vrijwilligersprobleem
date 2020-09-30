import { graphql, useStaticQuery } from 'gatsby';

export const PakkettenQuery = () => {
  const data = useStaticQuery(
    graphql`
    query newQuery {
      datoCmsPakketten {
        heroImage {
          fluid(imgixParams: { fm: "jpg", fit:"crop", ar: "16:9" }) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }  
  `
  )

  return data.datoCmsPakketten;
};