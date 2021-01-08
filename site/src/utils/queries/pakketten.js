import { graphql, useStaticQuery } from 'gatsby';

export default function PakkettenQuery() {
  const data = useStaticQuery(
    graphql`
    query PakkettenQuery {
      datoCmsPakketten {
        pageHeader
        pageDescription
        smallTitle
        smallPrice
        mediumTitle
        mediumPrice
        largeTitle
        largePrice
        begeleidingTitle
        begeleidingDescription
        seo {
          title
          description
        }
      }
    }
  `,
  );

  return data.datoCmsPakketten;
}
