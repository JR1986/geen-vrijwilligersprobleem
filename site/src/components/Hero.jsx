import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Theme from "../utils/Theme";
import { Button } from "rebass";

const HeroContainer = styled.div`

  @media (min-width: 840px) {
    max-height: 800px;
  }

  @media (min-width: 1024px) {
    overflow: hidden;
    object-fit: cover;
    position: relative;
  }
`;

const Overlay = styled.div`

  @media (min-width: 1024px) {
    background: -webkit-linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.3));
    background: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.3));
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

const Container = styled.div`
  padding: 0 16px;
  max-width: 375px;

  @media (min-width: 1024px) {
    max-width: 1024px;
    padding: 0 48px;
  }
`;

const TeaserTextContainer = styled.div`
  max-width: 375px;
  h1, p {
    color: ${(props) => props.theme.colors.white};
  }
  h1 {
    font-size: 28px;
    background-position: -20px 98%;
  }
  p {
    opacity: 0.87;
  }
  h1 {
    background-image: linear-gradient(120deg,${(props) => props.theme.colors.secondary},${(props) => props.theme.colors.secondary});
    background-repeat: no-repeat;
    background-size: 100% .4em;
    letter-spacing: -1px;
  }

  @media (min-width: 1024px) {
    position: absolute;
    top: 200px;
    z-index: 10;

    h1 {
      font-size: inherit;
      background-position: 0 98%;
    }
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
        <Container>
          <TeaserTextContainer>
            <h1>{data.datoCmsHome.teaser}</h1>
            <p>{data.datoCmsHome.teaserDescription}</p>
          </TeaserTextContainer>
        </Container>
        <Overlay />
        <Button variant='primary' mr={2}>Primary</Button>
      </HeroContainer>
    </Theme>
  )
}

export default Drawer;