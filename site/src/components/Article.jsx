import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Theme, { theme } from '../utils/Theme';
import Form from './Form';
import SEO from './Seo';
import FadeInSection from '../utils/FadeInSection';

const Background = styled.div`
    background-color: ${(props) => props.backgroundColor};
`;

const TextContainer = styled.div`
    margin: 0 auto;
    padding: 32px 16px;
    text-align: ${(props) => (props.textCenter ? 'center' : 'left')};

    p {
        margin: 0;
        color: ${(props) => props.theme.colors.blackMedium};
    }

    @media (min-width: 600px) {
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
        display: flex;
        justify-content: center;
        flex-direction: ${(props) => props.flexDirection};
        padding: 48px 32px;
    }

    @media (min-width: 1024px) {
        max-width: 1440px;
        margin: 0 auto;
        padding: 48px;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    height: auto;

    @media (min-width: 600px) {
        max-width: 50%;
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
            fluid(sizes: "(max-width: 599px) 100vw, (max-width: 1400px) 40vw, 580px", imgixParams: { fm: "jpg", auto: "compress", fit:"crop" }) {
                srcSet
                ...GatsbyDatoCmsFluid
            }
        }
        overOnsTitle
        overOnsDescription
        overOnsImage {
            fluid(sizes: "(max-width: 599px) 100vw, (max-width: 1400px) 40vw, 580px", imgixParams: { fm: "jpg", auto: "compress", fit:"crop" }) {
                srcSet
                ...GatsbyDatoCmsFluid
            }
        }
        contactTitle
        contactDescription
        aanpakTitle
        aanpakDescription
        aanpakImage {
            fluid(sizes: "(max-width: 599px) 100vw, (max-width: 1400px) 40vw, 580px", imgixParams: { fm: "jpg", auto: "compress", fit:"crop" }) {
                srcSet
                ...GatsbyDatoCmsFluid
            }
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
        fluid: succesverhaalImage,
      },
      overOnsTitle,
      overOnsDescription,
      overOnsImage: {
        fluid: overOnsImage,
      },
      contactTitle,
      contactDescription,
      aanpakTitle,
      aanpakDescription,
      aanpakImage: {
        fluid: aanpakImage,
      },
    },
  } = data;

  return (
    <Theme>
      <SEO title={title} description={description} />
      <Background
        backgroundColor={theme.colors.primaryBackground}
      >
        <FadeInSection>
          <ContentContainer flexDirection="row-reverse">
            <TextContainer>
              <h2>{succesverhaal}</h2>
              <p dangerouslySetInnerHTML={{ __html: succesverhaalDescription }} />
            </TextContainer>
            <SpacingContainer />
            <ImageContainer>
              <Img fluid={succesverhaalImage} />
            </ImageContainer>
          </ContentContainer>
        </FadeInSection>
      </Background>
      <Background
        backgroundColor={theme.colors.secondaryBackground}
      >
        <FadeInSection>
          <ContentContainer>
            <TextContainer>
              <h2>{overOnsTitle}</h2>
              <p>{overOnsDescription}</p>
            </TextContainer>
            <SpacingContainer />
            <ImageContainer>
              <Img fluid={overOnsImage} />
            </ImageContainer>
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
            <ImageContainer>
              <Img fluid={aanpakImage} />
            </ImageContainer>
          </ContentContainer>
        </FadeInSection>
      </Background>
      <Background
        backgroundColor={theme.colors.secondaryBackground}
      >
        <ContentContainer>
          <TextContainer textCenter>
            <h2>{contactTitle}</h2>
            <p>{contactDescription}</p>
          </TextContainer>
        </ContentContainer>
        <Form />
      </Background>
    </Theme>
  );
};

export default HomeArticles;
