import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Theme from "../utils/Theme";
import { Button } from "rebass";
import { Link } from "gatsby";

const Overlay = styled.div`
    background: -webkit-linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.4));
    background: linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.4));
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

const RelativeContainer = styled.div`
  position: relative;
  text-align: center;
`;

const ImageContainer = styled.div`
  max-height: 550px;
  overflow: hidden;
`;

const TeaserTextContainer = styled.div`
  top: 15%;
  position: absolute;
  text-align: center;
  z-index: 10;
  padding: 24px;
  left: 0;
  right: 0;
  h1, p {
    color: ${(props) => props.theme.colors.white};
    letter-spacing: -1px;
    max-width: 500px;
    margin: 0 auto;
    text-shadow: 1px 1px ${(props) => props.theme.colors.black};
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
        fluid(imgixParams: { fm: "jpg", fit:"crop", ar: "16:9", }) {
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
      <RelativeContainer>
        <ImageContainer>
          <Img fluid={data.datoCmsHome.heroImage.fluid} />
        </ImageContainer>
        <TeaserTextContainer>
          <h1>{data.datoCmsHome.teaser}</h1>
          <p>{data.datoCmsHome.teaserDescription}</p>
          <Link to="/contact/">
            <Button
              sx={{
                width: "100%",
                color: '#fff',
                border: '3px solid #FFED00',
                boxShadow: "2px 2px 25px 3px rgba(0, 0, 0, 0.5)",
                maxWidth: "250px",
                backgroundColor: "#36C9C6",
                cursor: "pointer"
              }}
              mt={24}
            >
              {data.datoCmsHome.buttonText}
            </Button>
          </Link>
        </TeaserTextContainer>
        <Overlay></Overlay>
      </RelativeContainer>
    </Theme>
  )
}

export default Drawer;