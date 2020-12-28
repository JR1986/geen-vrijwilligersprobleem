import { graphql, useStaticQuery } from 'gatsby';

export default function LogoQuery() {
  const data = useStaticQuery(
    graphql`
    query LogoQuery {
    datoCmsHome {
        logo {
          fixed(width: 180, height: 160) {
            ...GatsbyDatoCmsFixed
          }
        }
      }
    }
  `,
  );

  return data.datoCmsHome;
}
