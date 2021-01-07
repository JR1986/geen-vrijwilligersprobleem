import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Theme, { theme } from '../utils/Theme';
import FadeInSection from '../utils/FadeInSection';

const TriangleContainer = styled.div`
  position: absolute;
  left: calc(50% - 22px);
  right: calc(50% - 22px);
  top: -7px;
  width: 0;
  height: 0;
  z-index: 5;
`;

const BorderTriangle = () => (
  <TriangleContainer>
    <svg width="45" height="34" viewBox="0 0 45 34" fill={theme.colors.blackBackground} xmlns="http://www.w3.org/2000/svg">
      <path d="M42.0533 5.40476H3.93678L22.5122 33.1201L38.0898 11.2141L42.0533 5.40476Z" stroke="#00ad9f" />
      <path d="M3.99998 4.90883L4.94762 6H41L42 4.5L45 0H0L3.99998 4.90883Z" fill={theme.colors.blackBackground} />
    </svg>
  </TriangleContainer>
);

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

const ImageContainer = styled.div`
  height: 100vh;
  position: relative;

  img {
    animation: ${imageAnimation} 25s infinite;
  }
`;

const StyledImg = styled(Img)`
  &&& {
    position: static !important;
  }
`;

const TeaserTextContainer = styled.div`
  background-color: rgba(255,255,255,0.6);
  margin: 0 auto;
  max-width: 400px;
  width: 100%;
  text-align: center;
  top: 35%;
  position: absolute;
  left: calc(50% - 224px);
  right: calc(50% - 224px);
  padding: 24px;

  h1 {
    color: ${(props) => props.theme.colors.black};
  }

  p {
    color: ${(props) => props.theme.colors.blackMedium};
  }

  @media (min-width: 720px) {

    h1 {
      font-size: 36px;
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
      heroImage {
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
          <BorderTriangle />
          <StyledImg fluid={data.datoCmsHome.heroImage.fluid} />
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
