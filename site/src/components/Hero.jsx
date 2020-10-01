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
  width: 375px;
  padding: 0 16px;

  @media(min-width: 600px) {
    width: 450px;
  }

  @media(min-width: 1024px) {
    width: 600px;
  }

  @media(min-width: 1920px) {
    width: 700px;
  }
`;

const Background = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  height: 900px;

  @media (min-width: 1024px) {
    height: 100vh;
  }

  @media (min-width: 1920px) {
    height: 70vh;
  }
`;

const ContentContainer = styled.div`
max-width: 1440px;
margin: 0 auto;
display: flex;
align-items: center;
flex-direction: column-reverse;
padding: 32px;
height: 100%;
justify-content: space-around;

@media (min-width: 1024px) {
  flex-basis: calc(50%);
  justify-content: space-between;
  padding: 48px;
  flex-direction: row;
}
`

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

  h1, p {
    color: ${(props) => props.theme.colors.black};
    letter-spacing: -1px;
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
        <ContentContainer>
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
                  cursor: "pointer",
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
        </ContentContainer>
      </Background>
    </Theme>
  )
}

export default Drawer;