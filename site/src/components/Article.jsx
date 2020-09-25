import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Theme from "../utils/Theme";
import Form from "./Form";

const Background = styled.div`
    background-color: ${(props) => props.backgroundColor};
    margin: 0 auto;
`;

const Container = styled.div`
    @media (min-width: 720px) {
        padding: 0 16px;
    }
`;

const TextContainer = styled.div`
    margin: 0 auto;
    padding: 24px 16px;

    @media (min-width: 720px) {
        margin: 0;
        padding: 0 16px;
        max-width: 400px;
    }
`;

const ContentContainer = styled.div`
    display: block;
    
    @media (min-width: 720px) {
        display: flex;
        justify-content: center;
        max-width: 1024px;
    }
`;

const ImageContainer = styled.div`
    @media (min-width: 720px) {
        width: 400px;
        height: 400px;
    }
`;

const HomeArticles = () => {
    const data = useStaticQuery(graphql`
  query HomePageQuery {
    datoCmsHome {
        succesverhaalDescription
        succesverhaal
        succesverhaalImage {
            fluid(maxWidth: 600, maxHeight: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsFluid
            }
        }
        overOnsTitle
        overOnsDescription
        overOnsImage {
            fluid(maxWidth: 600, maxHeight: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsFluid
            }
        }
        contactTitle
        contactDescription
        aanpakTitle
        aanpakDescription
        aanpakImage {
            fluid(maxWidth: 600, maxHeight: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
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
            <Container>
                <Background
                    backgroundColor="#f8f8f8"
                >
                    <ContentContainer>
                        <TextContainer>
                            <h2>{succesverhaal}</h2>
                            <p>{succesverhaalDescription}</p>
                        </TextContainer>
                        <ImageContainer>
                            <Img fluid={succesverhaalImage} />
                        </ImageContainer>
                    </ContentContainer>
                </Background>
                <Background>
                    <ContentContainer>
                        <ImageContainer>
                            <Img fluid={overOnsImage} />
                        </ImageContainer>
                        <TextContainer>
                            <h2>{overOnsTitle}</h2>
                            <p>{overOnsDescription}</p>
                        </TextContainer>
                    </ContentContainer>
                </Background>
                <Background backgroundColor="#f8f8f8">
                    <ContentContainer>
                        <TextContainer>
                            <h2>{aanpakTitle}</h2>
                            <p>{aanpakDescription}</p>
                        </TextContainer>
                        <ImageContainer>
                            <Img fluid={aanpakImage} />
                        </ImageContainer>
                    </ContentContainer>
                </Background>
                <Background>
                    <ContentContainer>
                        <TextContainer>
                            <h2>{contactTitle}</h2>
                            <p>{contactDescription}</p>
                        </TextContainer>
                    </ContentContainer>
                    <Form></Form>
                </Background>
            </Container>
        </Theme>
    )
}


export default HomeArticles;