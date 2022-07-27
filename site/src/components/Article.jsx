import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import Theme, { theme } from '../utils/Theme';
import Form from './Form';
import Seo from './Seo';
import FadeInSection from '../utils/FadeInSection';
import Triangle from './Triangle';
import Video from './Video';

const Background = styled.div`
    background-color: ${(props) => props.backgroundColor};
    position: relative;
`;

const TextContainer = styled.div`
    margin: 0 auto;
    padding: 32px;
    text-align: ${(props) => (props.textCenter ? 'center' : 'left')};

    p {
        margin: 0;
        color: ${(props) => props.theme.colors.blackMedium};
    }

    h1, h2, h3, h4 {
      margin: 0 0 24px;
    }

    ul, li {
      color: ${(props) => props.theme.colors.blackMedium};
    }

    @media (min-width: 1024px) {
        margin: 0;
        padding: 0;
        max-width: 50%;
    }
`;

const SpacingContainer = styled.div`
    margin: 0;

    @media (min-width: 600px) {
        margin: 16px;
    }

    @media (min-width: 1024px) {
        margin: 48px;
    }
`;

const ContentContainer = styled.div`
    display: block;

    @media (min-width: 600px) {
        padding: 48px 32px;
    }

    @media (min-width: 1024px) {
        display: flex;
        justify-content: center;
        flex-direction: ${(props) => props.flexDirection};
        max-width: 1440px;
        margin: 0 auto;
        padding: 92px 48px;
    }
`;

const FormContainer = styled.div`

  @media (min-width: 600px) {
    padding: 48px 32px;
  }

  @media (min-width: 1024px) {
    margin: 0 auto;
    padding: 92px 48px;
  }

  h2, p {
    text-align: center;
  }

  p {
    max-width: 500px;
    margin: 0 auto 40px;
  }
`;

const StyledImg = styled(GatsbyImage)`
  &&& {
    width: 100%;
  }
`;

const ImgBackground = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: opacity 1s !important;

  @media (min-width: 1024px) {
    &:after {
      position: absolute;
      content: "";
      right: -20px;
      bottom: -20px;
      width: 150px;
      height: 150px;
      background: #fff;
      z-index: -1;
      box-shadow: 0px 0px 20px #eee;
    }

    &:before {
      position: absolute;
      content: "";
      left: -20px;
      top: -20px;
      width: 150px;
      height: 150px;
      background: #fff;
      z-index: -1;
      box-shadow: 0px 0px 20px #eee;
    }

    img {
      transition: transform 1s ease !important;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;

const MaxWidth = styled.div`
  padding: 32px;
  max-width: 840px;
  margin: 0 auto;
  text-align: center;

  @media(min-width: 1024px) {
    padding: 64px 0;
  }
`;

const HomeArticles = () => {
  const data = useStaticQuery(graphql`
  query HomePageQuery {
    datoCmsHome {
        seo {
            title
            description
        }
        succesverhaalDescription
        succesverhaal
        succesverhaalImage {
          gatsbyImageData(
            placeholder: BLURRED
            sizes: "(max-width: 599px) 100vw, (max-width: 1400px) 40vw, 580px",
            imgixParams: {
              fm: "jpg",
              auto: "compress",
              fit:"crop"
            }
          )
        }
        overOnsTitle
        overOnsDescription
        contactTitle
        contactDescription
        aanpakTitle
        aanpakDescription
        aanpakImage {
          gatsbyImageData(
            placeholder: BLURRED
            sizes: "(max-width: 599px) 100vw, (max-width: 1400px) 40vw, 580px",
            imgixParams: { 
              fm: "jpg",
              auto: "compress", 
              fit:"crop"
            }
          )
        }
      }
    }
`);

  const {
    datoCmsHome: {
      seo: {
        title,
        description,
      },
      succesverhaal,
      succesverhaalDescription,
      succesverhaalImage: {
        gatsbyImageData: succesverhaalImage,
      },
      overOnsTitle,
      overOnsDescription,
      contactTitle,
      contactDescription,
      aanpakTitle,
      aanpakDescription,
      aanpakImage: {
        gatsbyImageData: aanpakImage,
      },
    },
  } = data;

  return (
    <Theme>
      <Seo title={title} description={description} />
      <Background
        backgroundColor={theme.colors.white}
      >
        <FadeInSection>
          <MaxWidth>
            <h2>{overOnsTitle}</h2>
            <p>{overOnsDescription}</p>
            <SpacingContainer />
            <Video />
          </MaxWidth>
        </FadeInSection>
      </Background>
      <Background
        backgroundColor={theme.colors.secondaryBackground}
      >
        <Triangle backgroundColor={theme.colors.primaryBackground} />
        <FadeInSection>
          <ContentContainer flexDirection="row-reverse">
            <ImgBackground>
              <StyledImg image={succesverhaalImage} alt="Geen vrijwilligersprobleem hero" />
            </ImgBackground>
            <SpacingContainer />
            <TextContainer>
              <h2>{succesverhaal}</h2>
              <div dangerouslySetInnerHTML={{ __html: succesverhaalDescription }} />
            </TextContainer>
          </ContentContainer>
        </FadeInSection>
      </Background>
      <Background backgroundColor={theme.colors.primaryBackground}>
        <FadeInSection>
          <ContentContainer flexDirection="row-reverse">
            <TextContainer>
              <h2>{aanpakTitle}</h2>
              <p>{aanpakDescription}</p>
            </TextContainer>
            <SpacingContainer />
            <ImgBackground>
              <StyledImg image={aanpakImage} alt="Geen vrijwilligersprobleem hero"/>
            </ImgBackground>
          </ContentContainer>
        </FadeInSection>
      </Background>
      <Background
        backgroundColor={theme.colors.secondaryBackground}
      >
        <Triangle backgroundColor={theme.colors.white} />
        <FormContainer>
          <h2>{contactTitle}</h2>
          <p>{contactDescription}</p>
          <Form />
        </FormContainer>
      </Background>
    </Theme>
  );
};

export default HomeArticles;
