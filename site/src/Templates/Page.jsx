import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Theme from '../utils/Theme';

const HeroContainer = styled.div`
    height: 250px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    display: flex;
    align-items: center;
    word-wrap: break-word;

    h1 {
        padding: 16px;
        margin: 0;
        max-width: 1440px;
        font-size: 28px;

        @media (min-width: 1024px) {
            padding: 0 0 0 48px;
            margin: 0 auto;
            width: 100%;
        }
    }
`;

const MainContainer = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`;

const Page = ({ heading, children }) => (
  <Theme>
    <HeroContainer>
      <h1>{heading}</h1>
    </HeroContainer>
    <MainContainer>
      {children}
    </MainContainer>
  </Theme>
);

Page.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Page;
