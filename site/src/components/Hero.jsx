import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Theme from "../utils/Theme";
import { Button } from "rebass";

const Overlay = styled.div`
    background: -webkit-linear-gradient(to right, rgba(0,0,0,0.35), rgba(0,0,0,0.3));
    background: linear-gradient(to right, rgba(0,0,0,0.35), rgba(0,0,0,0.3));
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

const RelativeContainer = styled.div`
  position: relative;
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
  top: 80px;
  left: 48px;
  position: absolute;
  text-align: center;
  z-index: 10;
  h1, p {
    color: ${(props) => props.theme.colors.white};
    text-shadow: 1px 1px ${(props) => props.theme.colors.black};
  }
  h1 {
    background-position: -20px 98%;
  }
  h1 {
    background-image: linear-gradient(120deg,${(props) => props.theme.colors.secondary},${(props) => props.theme.colors.secondary});
    background-repeat: no-repeat;
    background-size: 100% .4em;
    letter-spacing: -1px;
  }

  @media (min-width: 1024px) {
    max-width: 550px;
    top: 200px;

    h1 {
      background-position: 0 98%;
      font-size: 56px;
    }
    p {
      font-size: 24px;
    }
  }
`;

const Drawer = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    datoCmsHome {
      heroImage {
        fluid(imgixParams: { fm: "jpg", fit:"crop", w: "800", h: "600", }) {
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
      <RelativeContainer>
        <Img fluid={data.datoCmsHome.heroImage.fluid} />
        <Container>
          <TeaserTextContainer>
            <h1>{data.datoCmsHome.teaser}</h1>
            <p>{data.datoCmsHome.teaserDescription}</p>
          </TeaserTextContainer>
        </Container>
        <Button variant='primary' mr={2}>Primary</Button>
        <Overlay></Overlay>
      </RelativeContainer>
    </Theme>
  )
}

export default Drawer;