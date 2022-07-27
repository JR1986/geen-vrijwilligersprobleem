import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Theme from '../utils/Theme';
import FadeInSection from '../utils/FadeInSection';

const imageAnimation = keyframes`
    0% {
        transform: scale(1,1);
    }
    50% {
        transform:  scale(1.2,1.2);
    }
    100% {
      transform: scale(1,1);
    }
`;

const arrowAnimation = keyframes`
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  50% {
    transform: translateY(-20px);
    opacity: 0.05;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const DownIcon = styled(ExpandMoreIcon)`
  animation: ${arrowAnimation} ease 2s infinite;
  position: absolute;
  bottom: 5%;
  left: calc(50% - 2em);
  right: calc(50% - 2em);
  z-index: 10;

  &.MuiSvgIcon-root {
    width: 3em;
    height: 3em;

    @media (min-width: 720px) {
      width: 3em;
      height: 3em;
    }
  }
`;

const ImageContainer = styled.div`
  height: calc(100vh);
  position: relative;
  overflow: hidden;

  img {
    animation: ${imageAnimation} 45s infinite;
  }
`;

const Overlay = styled.div`
  position: absolute;
  opacity: .55;
  background-color: #212529;
  width: 100%;
  height: 100%;
  top: 0;
`;

const StyledImg = styled(GatsbyImage)`
  &&& {
    position: static !important;
  }
`;

const animateFromTop = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;
const animateFromLeft = keyframes`
  from {
    transform: translateX(-200px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const TeaserTextContainer = styled.div`
  margin: 0 auto;
  max-width: 400px;
  left: 0;
  right: 0;
  text-align: center;
  position: absolute;
  padding: 24px;
  top: 25%;

  @media (min-width: 720px) {
    max-width: 500px;
    left: calc(50% - 250px);
    right: calc(50% - 250px);
    top: 30%;
  }

  @media (min-width: 1024px) {
    max-width: 700px;
    left: calc(50% - 350px);
    right: calc(50% - 350px);
    top: 30%;
  }

  h1 {
    color: ${(props) => props.theme.colors.white};
    padding: 0 24px;
    letter-spacing: 0px;
    animation: ${animateFromTop} 2s;
    font-size: 48px;

    @media (min-width: 840px) {
      font-size: 64px;
    }
  }

  p {
    color: ${(props) => props.theme.colors.white};
    padding: 0 24px;
    animation: ${animateFromLeft} 2s;
    font-size: 20px;
    line-height: 2rem;
  }

  @media (min-width: 1440px) {
    h1 {
      font-size: 56px;
    }
  }

`;

const Drawer = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    datoCmsHome {
      heroImage {
        gatsbyImageData(
          placeholder: BLURRED
          sizes: "(max-width: 599px) 85vw, (max-width: 719px) 70vw, (max-width: 839px) 60vw, (max-width: 1440) 50vw, 600px",
          imgixParams: {
            fm: "png",
            auto: "compress",
            fit:"crop",
            q:50,
          }
        )
      }
      teaser
      teaserDescription
    }
  }
`);

  return (
    <Theme>
      <FadeInSection>
        <ImageContainer>
          <StyledImg image={data.datoCmsHome.heroImage.gatsbyImageData} alt="Geen vrijwilligersprobleem hero"/>
          <DownIcon style={{ color: 'white' }} />
          <Overlay />
        </ImageContainer>
      </FadeInSection>
      <TeaserTextContainer>
        <h1>{data.datoCmsHome.teaser}</h1>
        <p>{data.datoCmsHome.teaserDescription}</p>
      </TeaserTextContainer>
    </Theme>
  );
};

export default Drawer;
