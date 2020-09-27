const pakkettenQuery = `
  query PakkettenQuery {
    datoCmsHome {
      heroImage {
        fluid(imgixParams: { fm: "jpg", fit:"crop", ar: "16:9", }) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }  
`;

export default pakkettenQuery;