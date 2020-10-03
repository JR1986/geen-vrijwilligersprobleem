import { graphql, useStaticQuery } from 'gatsby';

export const PrivacyQuery = () => {
    const data = useStaticQuery(
        graphql`
    query PrivacyQuery {
        datoCmsPrivacyStatement {
                privacyStatement
            }
        }  
        `
    )

    return data.datoCmsPrivacyStatement;
};