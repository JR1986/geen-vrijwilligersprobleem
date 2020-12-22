import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Theme, { theme } from "../utils/Theme";
import { Button } from "rebass";
import { Link } from "gatsby";
import FadeInSection from '../utils/FadeInSection';

const ImageContainer = styled.div`
  height: auto;
  z-index: 2;
  width: 85vw;
  background-color: transparent;

  @media (min-width: 600px) {
    width: 70vw;
  }

  @media (min-width: 720px) {
    width: 60vw;
  }

  @media (min-width: 840px) {
    width: 45vw;
    margin-left: 48px;
  }
`;

const Background = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  padding: 48px 0;
`;

const ContentContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  padding: 32px;
  justify-content: space-around;

  @media (min-width: 1024px) {
    flex-basis: calc(50%);
    justify-content: space-between;
    padding: 24px 48px;
    flex-direction: row;
    height: 100%;
  }
`;

const TeaserTextContainer = styled.div`
  text-align: center;
  max-width: 375px;

  @media (min-width: 600px) {
    max-width: 500px;
  }

  @media (min-width: 1024px) {
    text-align: left;
    margin: 0 48px 0 0;
  }

  h1 {
    color: ${(props) => props.theme.colors.black};
  }

  p {
    color: ${(props) => props.theme.colors.blackMedium};
  }

  @media (min-width: 720px) {
    h1 {
      font-size: 48px;
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
`)

  return (
    <Theme>
      <Background>
        <FadeInSection>
          <ContentContainer>
            <TeaserTextContainer>
              <h1>{data.datoCmsHome.teaser}</h1>
              <p>{data.datoCmsHome.teaserDescription}</p>
              <Link to="/contact/">
                <Button
                  sx={{
                    width: "100%",
                    color: `${theme.colors.white}`,
                    maxWidth: "250px",
                    backgroundColor: `${theme.colors.primary}`,
                    cursor: "pointer",
                    transition: 'all 0.3s ease',
                    transform: "none",
                    '&:hover': {
                      transform: 'scale(1.2)'
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
    </Theme >
  )
}

export default Drawer;
