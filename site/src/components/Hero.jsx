import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
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

const DownIcon = styled(ArrowDownwardIcon)`
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
      width: 4em;
      height: 5em;
    }
  }
`;

const ImageContainer = styled.div`
  height: calc(100vh - 100px);
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

const StyledImg = styled(Img)`
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
  max-width: 700px;
  width: 100%;
  text-align: center;
  top: 30%;
  left: calc(50% - 350px);
  right: calc(50% - 350px);
  position: absolute;
  padding: 24px;

  h1 {
    color: ${(props) => props.theme.colors.white};
    padding: 0 24px;
    text-shadow: 1px 1px ${(props) => props.theme.colors.black};
    letter-spacing: -2px;
    animation: ${animateFromTop} 2s;
  }

  p {
    color: ${(props) => props.theme.colors.white};
    padding: 0 24px;
    text-shadow: 1px 1px ${(props) => props.theme.colors.black};
    animation: ${animateFromLeft} 2s;
  }

  @media (min-width: 720px) {
    h1 {
      font-size: 32px;
    }
    p {
      font-size: 20px;
    }
  }


  @media (min-width: 1440px) {
    h1 {
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
      heroImages {
        fluid(
          sizes: "(max-width: 599px) 85vw, (max-width: 719px) 70vw, (max-width: 839px) 60vw, (max-width: 1440) 50vw, 600px",
          imgixParams: {
            fm: "png",
            auto: "compress",
            fit:"crop",
            q:50,
          }
        )
        {
        ...GatsbyDatoCmsFluid
        }
      }
      teaser
      teaserDescription
      buttonText
    }
  }
`);

  return (
    <Theme>
      <FadeInSection>
        <ImageContainer>
          <StyledImg fluid={data.datoCmsHome.heroImages[0].fluid} />
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
