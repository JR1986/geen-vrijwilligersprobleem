import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Theme from "../utils/Theme";
import { Button } from "rebass";
import { Link } from "gatsby";

const ImageContainer = styled.div`
  height: auto;
  z-index: 2;
  width: 400px;
  padding: 0 16px;

  @media(min-width: 600px) {
    width: 500px;
  }

  @media(min-width: 1024px) {
    width: 600px;
  }

  @media(min-width: 1440px) {
    width: 700px;
  }
`;

const Background = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 32px;
  height: 900px;
  justify-content: space-around;

  @media (min-width: 1024px) {
    justify-content: space-between;
    height: 100vh;
  }

  @media (min-width: 1024px) {
    flex-basis: calc(50%);
    padding: 0 48px;
    flex-direction: row;
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

  @media (min-width: 1440px) {
    max-width: 700px;
  }

  h1, p {
    color: ${(props) => props.theme.colors.black};
    letter-spacing: -1px;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 48px;
    }
    p {
      font-size: 20px;
    }
  }
`;

const Drawer = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    datoCmsHome {
      heroImage {
        fluid(imgixParams: { fm: "jpg", fit:"crop", ar: "1:1", }) {
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
        <TeaserTextContainer>
          <h1>{data.datoCmsHome.teaser}</h1>
          <p>{data.datoCmsHome.teaserDescription}</p>
          <Link to="/contact/">
            <Button
              sx={{
                width: "100%",
                color: 'rgba(0,0,0,0.87)',
                maxWidth: "250px",
                backgroundColor: "#FFED00",
                cursor: "pointer"
              }}
              mt={24}
            >
              {data.datoCmsHome.buttonText}
            </Button>
          </Link>
        </TeaserTextContainer>
        <ImageContainer>
          <Img fluid={data.datoCmsHome.heroImage.fluid} />
        </ImageContainer>
      </Background>
    </Theme>
  )
}

export default Drawer;