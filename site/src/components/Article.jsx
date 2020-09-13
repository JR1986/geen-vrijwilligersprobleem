import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';


const Container = styled.div`
    display: flex;
    flex-direction: ${(props) => props.flexDirection};
    padding: 72px 24px;
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
    text-align: justify;
`;

const Article = () => {
    const data = useStaticQuery(graphql`
  query HomePageQuery {
    datoCmsHome {
        succesverhaalDescription
        succesverhaal
        overOnsTitle
        overOnsDescription
        contactTitle
        contactDescription
        aanpakTitle
        aanpakDescription
    }
  }  
`)

    console.log(data);
    return (
        <Container>
            <ImageContainer>
            </ImageContainer>
            <TextContainer>
                <h2>{data.datoCmsHome.succeserhaal}</h2>
                <p>{data.datoCmsHome.succesverhaalDescription}</p>
            </TextContainer>
        </Container>
    )
}

export default Article;