import { graphql, useStaticQuery } from 'gatsby';

export const PakkettenQuery = () => {
  const data = useStaticQuery(
    graphql`
    query PakkettenQuery {
      datoCmsPakketten {
        pageHeader
        pageDescription
        smallTitle
        smallPrice
        smallDescription
        mediumTitle
        mediumPrice
        mediumDescription
        largeTitle
        largePrice
        largeDescription
        begeleidingTitle
        begeleidingDescription
        seo {
          title
          description
        }
      }
    }
  `
  )

  return data.datoCmsPakketten;
};