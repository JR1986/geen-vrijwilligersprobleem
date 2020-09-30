import { graphql, useStaticQuery } from 'gatsby';

export const OverGeenVrijwilligersprobleem = () => {
    const data = useStaticQuery(
        graphql`
        query overGeenVrijwilligersprobleem {
        datoCmsOverGeenVrijwilligersprobleem {
            pageHeader
            pageDescription
      }
    }
  `
    );

    return data.datoCmsOverGeenVrijwilligersprobleem;
};