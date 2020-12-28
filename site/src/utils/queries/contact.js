import { graphql, useStaticQuery } from 'gatsby';

export default function ContactQuery() {
  const data = useStaticQuery(
    graphql`
    query ContactQuery {
      datoCmsContact {
        contactTitle
        contactDescription
        seo {
          title
          description
        }
      }
    }  
  `,
  );

  return data.datoCmsContact;
}
