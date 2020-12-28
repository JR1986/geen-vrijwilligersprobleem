import { graphql, useStaticQuery } from 'gatsby';

export default function PrivacyQuery() {
  const data = useStaticQuery(
    graphql`
    query PrivacyQuery {
        datoCmsPrivacyStatement {
                privacyStatement
                seo {
                    title
                    description
                  }
            }
        }  
        `,
  );

  return data.datoCmsPrivacyStatement;
}
