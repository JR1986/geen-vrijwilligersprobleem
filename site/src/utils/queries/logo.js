import { graphql, useStaticQuery } from 'gatsby';

export const LogoQuery = () => {
    const data = useStaticQuery(
        graphql`
    query LogoQuery {
    datoCmsHome {
        logo {
          fixed(width: 180, height: 150) {
            ...GatsbyDatoCmsFixed
          }
        }
      }
    }
  `
    )

    return data.datoCmsHome;
};
