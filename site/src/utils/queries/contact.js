import { graphql, useStaticQuery } from 'gatsby';

export const ContactQuery = () => {
    const data = useStaticQuery(
        graphql`
    query ContactQuery {
      datoCmsContact {
        contactTitle
        contactDescription
      }
    }  
  `
    )

    return data.datoCmsContact;
};