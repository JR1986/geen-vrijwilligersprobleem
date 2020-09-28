import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Theme from "../utils/Theme";
import { Button } from "rebass";
import { Link } from "gatsby";

const ImageContainer = styled.div`
  position: absolute;
  width: 500px;
  height: auto;
  z-index: 2;
`;

const Background = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  justify-content: center;
  flex-basis: calc(50% - 72px);
  align-items: center;
  height: 100vh;
`;

const Image = styled(Img)`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const RelativeContainer = styled.div`
  position: relative;
`;

const Square = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  width: 500px;
  height: 380px;
  transform: rotate(-15deg);
`;

const TeaserTextContainer = styled.div`
  margin: 0 48px 0 0;

  h1, p {
    color: ${(props) => props.theme.colors.black};
    letter-spacing: -1px;
    max-width: 500px;
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
        <RelativeContainer>
          <ImageContainer>
            <Image fluid={data.datoCmsHome.heroImage.fluid} />
          </ImageContainer>
          <Square />
        </RelativeContainer>
      </Background>
    </Theme>
  )
}

export default Drawer;