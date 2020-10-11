import React from 'react';
import styled from '@emotion/styled';
import Theme from "../utils/Theme";

const HeroContainer = styled.div`
    height: 250px;
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    word-wrap: break-word;

    h1 {
        padding: 16px;
        margin: 0;
        font-size: 28px;

        @media (min-width: 1024px) {
            padding: 0 0 0 48px;
        }
    }
`;



const Page = ({ heading, children }) => {
    return (
        <Theme>
            <HeroContainer>
                <h1>{heading}</h1>
            </HeroContainer>
            {children}
        </Theme>
    )
}

export default Page;