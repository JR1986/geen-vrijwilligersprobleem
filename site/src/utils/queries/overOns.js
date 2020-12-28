import { graphql, useStaticQuery } from 'gatsby';

export default function OverGeenVrijwilligersprobleem() {
  const data = useStaticQuery(
    graphql`
        query overGeenVrijwilligersprobleem {
        datoCmsOverGeenVrijwilligersprobleem {
            pageHeader
            pageDescription
            seo {
              title
              description
            }
      }
    }
  `,
  );

  return data.datoCmsOverGeenVrijwilligersprobleem;
}
