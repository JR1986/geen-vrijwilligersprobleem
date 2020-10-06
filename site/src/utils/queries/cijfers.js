import { graphql, useStaticQuery } from 'gatsby';

export const CijfersQuery = () => {
  const data = useStaticQuery(
    graphql`
    query CijfersQuery {
      datoCmsHome {
          aantalNieuweLeden
          aantalNieuweVrijwilligers
          aantalVerenigingenMetNieuweLeden
          aantalVerenigingenMetNieuweVrijwilligers
          meerVrijwilligersImage {
            fixed(width: 200, height: 200) {
              ...GatsbyDatoCmsFixed
            }
          }
          meerLedenImage {
            fixed(width: 200, height: 200) {
              ...GatsbyDatoCmsFixed
            }
          }
        }
      }  
    `
  )

  return data.datoCmsHome;
};