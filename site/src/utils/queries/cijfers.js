import { graphql, useStaticQuery } from 'gatsby';

export default function CijfersQuery() {
  const data = useStaticQuery(
    graphql`
    query CijfersQuery {
      datoCmsHome {
          aantalNieuweLeden
          aantalNieuweVrijwilligers
          aantalVerenigingenMetNieuweLeden
          aantalVerenigingenMetNieuweVrijwilligers
        }
      }  
    `,
  );

  return data.datoCmsHome;
}
