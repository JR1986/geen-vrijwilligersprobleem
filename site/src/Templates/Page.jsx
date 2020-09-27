import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import Theme from "../utils/Theme";

const HeroContainer = styled.div`
    max-height: 300px;
    overflow: hidden;
`;


const Page = ({ imageUrl }) => {
    return (
        <Theme>
            <HeroContainer>
                <Img fluid={imageUrl} />
            </HeroContainer>
        </Theme>
    )
}

export default Page;