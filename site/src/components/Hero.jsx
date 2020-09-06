import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
// import { Image } from "react-datocms";
import Img from 'gatsby-image';

const HeroContainer = styled.div`
  overflow: hidden;
  object-fit: cover;

  @media (min-width: 840px) {
    max-height: 500px;
  }
`;

const Drawer = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    datoCmsHome {
      heroImage {
        fluid(imgixParams: { fm: "jpg", auto: "compress", fit:"crop", ar: "16:9" }) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }  
`)

  return (
    <>
      <HeroContainer>
        <Img fluid={data.datoCmsHome.heroImage.fluid} />
      </HeroContainer>
    </>
  )
}

export default Drawer;