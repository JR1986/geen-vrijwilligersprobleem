import { graphql, useStaticQuery } from 'gatsby';

export default function OverGeenVrijwilligersprobleem() {
  const data = useStaticQuery(
    graphql`
      query overGeenVrijwilligersprobleem {
        allDatoCmsOverGeenVrijwilligersprobleem {
          edges {
            node {
              pageDescription
              pageHeader
              seo {
                title
                description
              }
            }
          }
        }
      }
    `,
  );

  return data.allDatoCmsOverGeenVrijwilligersprobleem;
}
