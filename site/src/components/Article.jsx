import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Theme from "../utils/Theme";
import Form from "./Form";

const Background = styled.div`
    background-color: ${(props) => props.backgroundColor};
`;

const TextContainer = styled.div`
    margin: 0 auto;
    padding: 32px 16px;
    text-align: ${(props) => props.textCenter ? 'center' : 'left'};

    p {
        margin: 0;
    }

    @media (min-width: 720px) {
        margin: 0;
        padding: 0;
        max-width: 360px;
    }
`;

const SpacingContainer = styled.div`
    margin: 0;

    @media (min-width: 720px) {
        margin: 48px;
    }
`;

const ContentContainer = styled.div`
    display: block;

    @media (min-width: 720px) {
        display: flex;
        justify-content: center;
        flex-direction: ${(props) => props.flexDirection};
        padding: 48px 32px;
    }
`;

const ImageContainer = styled.div`
    @media (min-width: 720px) {
        width: 100%;
        max-width: 550px;
        height: auto;
    }
`;

const HomeArticles = () => {
    const data = useStaticQuery(graphql`
  query HomePageQuery {
    datoCmsHome {
        succesverhaalDescription
        succesverhaal
        succesverhaalImage {
            fluid(maxWidth: 400, maxHeight: 280, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsFluid
            }
        }
        overOnsTitle
        overOnsDescription
        overOnsImage {
            fluid(maxWidth: 400, maxHeight: 280, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsFluid
            }
        }
        contactTitle
        contactDescription
        aanpakTitle
        aanpakDescription
        aanpakImage {
            fluid(maxWidth: 400, maxHeight: 280, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsFluid
            }
        }
    }
  }
`)

    const {
        datoCmsHome: {
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
        }
    } = data;

    return (
        <Theme>
            <Background
                backgroundColor="#f8f8f8"
            >
                <ContentContainer flexDirection="row-reverse">
                    <TextContainer>
                        <h2>{succesverhaal}</h2>
                        <p>{succesverhaalDescription}</p>
                    </TextContainer>
                    <SpacingContainer />
                    <ImageContainer>
                        <Img fluid={succesverhaalImage} />
                    </ImageContainer>
                </ContentContainer>
            </Background>
            <Background>
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
            </Background>
            <Background backgroundColor="#f8f8f8">
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
            </Background>
            <Background>
                <ContentContainer>
                    <TextContainer textCenter>
                        <h2>{contactTitle}</h2>
                        <p>{contactDescription}</p>
                    </TextContainer>
                </ContentContainer>
                <Form></Form>
            </Background>
        </Theme>
    )
}


export default HomeArticles;