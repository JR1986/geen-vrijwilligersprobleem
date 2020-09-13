import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Theme from "../utils/Theme";
import { Button } from "rebass";

const HeroContainer = styled.div`
  overflow: hidden;
  object-fit: cover;
  position: relative;

  @media (min-width: 840px) {
    max-height: 800px;
  }
`;

const Overlay = styled.div`
  background: -webkit-linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.3));
  background: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.3));
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const TeaserTextContainer = styled.div`
  position: absolute;
  top: 200px;
  left: 48px;
  z-index: 10;
  max-width: 375px;

  h1, p {
    color: ${(props) => props.theme.colors.white};
  }

  p {
    opacity: 0.87;
  }

  h1 {
    background-image: linear-gradient(120deg,${(props) => props.theme.colors.secondary},${(props) => props.theme.colors.secondary});
    background-repeat: no-repeat;
    background-size: 100% .4em;
    background-position: 0 98%;
    letter-spacing: -1px;
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
      teaser
      teaserDescription
    }
  }  
`)

  return (
    <Theme>
      <HeroContainer>
        <Img fluid={data.datoCmsHome.heroImage.fluid} />
        <TeaserTextContainer>
          <h1>{data.datoCmsHome.teaser}</h1>
          <p>{data.datoCmsHome.teaserDescription}</p>
        </TeaserTextContainer>
        <Overlay />
        <Button variant='primary' mr={2}>Primary</Button>
      </HeroContainer>
    </Theme>
  )
}

export default Drawer;