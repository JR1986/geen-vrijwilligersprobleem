import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Theme from "../utils/Theme";
import { Button } from "rebass";

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.white};
`;

const TeaserTextContainer = styled.div`
  max-width: 450px;

  h1 {
    border-bottom: 3px dashed ${(props) => props.theme.colors.secondary};
    letter-spacing: -1px;
    z-index: 10;
  }
`;

const ButtonText = styled.span`
  color: ${(props) => props.theme.colors.fifth}
`;

const ImageBackgroundColor = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  height: 600px;
  width: 75%;
`;

const Drawer = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    datoCmsHome {
      heroImage {
        fixed(imgixParams: { fm: "jpg", auto: "compress", fit:"crop", ar: "16:9" }) {
          ...GatsbyDatoCmsFixed
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
      <HeroContainer>
        <TeaserTextContainer>
          <h1>{data.datoCmsHome.teaser}</h1>
          <p>{data.datoCmsHome.teaserDescription}</p>
          <Button variant='primary' mr={2}><ButtonText>{data.datoCmsHome.buttonText}</ButtonText></Button>
        </TeaserTextContainer>
        <ImageBackgroundColor>
          <Img fixed={data.datoCmsHome.heroImage.fixed} />
        </ImageBackgroundColor>
      </HeroContainer>
    </Theme>
  )
}

export default Drawer;