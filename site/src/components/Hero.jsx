import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';
import { Button } from 'rebass';
import Theme, { theme } from '../utils/Theme';
import FadeInSection from '../utils/FadeInSection';

const TriangleContainer = styled.div`
  position: absolute;
  left: calc(50% - 22px);
  right: calc(50% - 22px);
  top: -6px;
  width: 0;
  height: 0;
`;

const BorderTriangle = () => (
  <TriangleContainer>
    <svg width="45" height="34" viewBox="0 0 45 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42.0533 5.40476H3.93678L22.5122 33.1201L38.0898 11.2141L42.0533 5.40476Z" stroke="#EDEDED" />
      <path d="M3.99998 4.90883L4.94762 6H41L42 4.5L45 0H0L3.99998 4.90883Z" fill="white" />
    </svg>
  </TriangleContainer>
);

const ImageContainer = styled.div`
  width: 100%;
  flex-basis: calc(50%);
`;

const Background = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 48px 32px;
  position: relative;

  @media (min-width: 1024px) {
    padding: 56px 32px;
  }
`;

const ContentContainer = styled.div`
  max-width: 1440px;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  height: 100%;
  margin: 0 auto;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const TeaserTextContainer = styled.div`
  margin: 0 48px 0 0;

  h1 {
    color: ${(props) => props.theme.colors.black};
  }

  p {
    color: ${(props) => props.theme.colors.blackMedium};
  }

  @media (min-width: 720px) {
    flex-basis: calc(50%);

    h1 {
      font-size: 42px;
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
        fluid(sizes: "(max-width: 599px) 85vw, (max-width: 719px) 70vw, (max-width: 839px) 60vw, (max-width: 1440) 50vw, 600px", imgixParams: { fm: "png", auto: "compress", fit:"crop", q:50, ar: "1:1" }) {
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
      <Background>
        <BorderTriangle />
        <FadeInSection>
          <ContentContainer>
            <TeaserTextContainer>
              <h1>{data.datoCmsHome.teaser}</h1>
              <p>{data.datoCmsHome.teaserDescription}</p>
              <Link to="/contact/">
                <Button
                  sx={{
                    width: '100%',
                    color: `${theme.colors.white}`,
                    maxWidth: '250px',
                    backgroundColor: `${theme.colors.primary}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: 'none',
                    '&:hover': {
                      transform: 'scale(1.15)',
                    },
                  }}
                  mt={24}
                  p={16}
                  aria-label={data.datoCmsHome.buttonText}
                >
                  {data.datoCmsHome.buttonText}
                </Button>
              </Link>
            </TeaserTextContainer>
            <ImageContainer>
              <Img fluid={data.datoCmsHome.heroImage.fluid} />
            </ImageContainer>
          </ContentContainer>
        </FadeInSection>
      </Background>
    </Theme>
  );
};

export default Drawer;
