import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Theme from "../utils/Theme";

const Container = styled.div`
    background-color: ${(props) => props.backgroundColor};
`;

const ImageContainer = styled.div`
    overflow: hidden;
    object-fit: cover;
    position: relative;

    @media (min-width: 840px) {
        max-height: 800px;
    }
`;

const TextContainer = styled.div`
    max-width: 570px;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: ${(props) => props.flexDirection};
    padding: 72px 0;
    justify-content: space-between;
    max-width: 1024px;
    margin: 0 auto;
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
                    <Img fixed={succesverhaalImage} />
                    <TextContainer>
                        <h2>{succesverhaal}</h2>
                        <p>{succesverhaalDescription}</p>
                    </TextContainer>
                </ContentContainer>
            </Container>
            <Container>
                <ContentContainer flexDirection="row-reverse">
                    <Img fixed={overOnsImage} />
                    <TextContainer>
                        <h2>{overOnsTitle}</h2>
                        <p>{overOnsDescription}</p>
                    </TextContainer>
                </ContentContainer>
            </Container>
            <Container backgroundColor="#f8f8f8">
                <ContentContainer>
                    <Img fixed={aanpakImage} />
                    <TextContainer>
                        <h2>{aanpakTitle}</h2>
                        <p>{aanpakDescription}</p>
                    </TextContainer>
                </ContentContainer>
            </Container>
            <Container>
                <ContentContainer flexDirection="row-reverse">
                    <TextContainer>
                        <h2>{contactTitle}</h2>
                        <p>{contactDescription}</p>
                    </TextContainer>
                </ContentContainer>
            </Container>
        </Theme>
    )
}


export default HomeArticles;