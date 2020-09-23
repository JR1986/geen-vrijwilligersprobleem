import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Theme from "../utils/Theme";
import Form from "./Form";

const Container = styled.div`
    background-color: ${(props) => props.backgroundColor};
`;

const ImageContainer = styled.div`
    padding: 0;
    width: 375px;
    overflow: hidden;
    
    &&& {
        picture {
            img {
                object-position: 150%;
            }
        }
    }

    @media(min-width: 600px) {
        padding: 16px;
    }
`;

const TextContainer = styled.div`
    max-width: 480px;
    padding: 24px 16px;

    @media (min-width: 1024px) {
        padding: 16px;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0;

    @media (min-width: 1024px) {
        flex-direction: ${(props) => props.flexDirection};
        padding: 72px 48px;
        justify-content: ${(props) => props.textCenter ? 'center' : 'space-between'};
        max-width: 1024px;
        margin: 0 auto;
        text-align: ${(props) => props.textAlign ? 'center' : 'left'};
    }
`;

const HomeArticles = () => {
    const data = useStaticQuery(graphql`
  query HomePageQuery {
    datoCmsHome {
        succesverhaalDescription
        succesverhaal
        succesverhaalImage {
            fixed(imgixParams: { fm: "jpg", auto: "compress", fit:"crop", ar: "16:9" }) {
                ...GatsbyDatoCmsFixed
            }
        }
        overOnsTitle
        overOnsDescription
        overOnsImage {
            fixed(imgixParams: { fm: "jpg", auto: "compress", fit:"crop", ar: "16:9" }) {
                ...GatsbyDatoCmsFixed
            }
        }
        contactTitle
        contactDescription
        aanpakTitle
        aanpakDescription
        aanpakImage {
            fixed(imgixParams: { fm: "jpg", auto: "compress", fit:"crop", ar: "16:9" }) {
                ...GatsbyDatoCmsFixed
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
                fixed: succesverhaalImage,
            },
            overOnsTitle,
            overOnsDescription,
            overOnsImage: {
                fixed: overOnsImage,
            },
            contactTitle,
            contactDescription,
            aanpakTitle,
            aanpakDescription,
            aanpakImage: {
                fixed: aanpakImage,
            },
        }
    } = data;

    return (
        <Theme>
            <Container
                backgroundColor="#f8f8f8"
            >
                <ContentContainer>
                    <ImageContainer>
                        <Img fixed={succesverhaalImage} />
                    </ImageContainer>
                    <TextContainer>
                        <h2>{succesverhaal}</h2>
                        <p>{succesverhaalDescription}</p>
                    </TextContainer>
                </ContentContainer>
            </Container>
            <Container>
                <ContentContainer flexDirection="row-reverse">
                    <ImageContainer>
                        <Img fixed={overOnsImage} />
                    </ImageContainer>
                    <TextContainer>
                        <h2>{overOnsTitle}</h2>
                        <p>{overOnsDescription}</p>
                    </TextContainer>
                </ContentContainer>
            </Container>
            <Container backgroundColor="#f8f8f8">
                <ContentContainer>
                    <ImageContainer>
                        <Img fixed={aanpakImage} />
                    </ImageContainer>
                    <TextContainer>
                        <h2>{aanpakTitle}</h2>
                        <p>{aanpakDescription}</p>
                    </TextContainer>
                </ContentContainer>
            </Container>
            <Container>
                <ContentContainer
                    textCenter
                    textAlign
                >
                    <TextContainer>
                        <h2>{contactTitle}</h2>
                        <p>{contactDescription}</p>
                    </TextContainer>
                </ContentContainer>
                <Form></Form>
            </Container>
        </Theme>
    )
}


export default HomeArticles;