import React from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import { theme } from '../utils/Theme';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ homeNavbar, children }) => (
  <>
    <Global
      styles={css`
        @font-face {
          font-family: 'Amatic SC';
          font-display: swap;
        }

        html {
          overflow-y: scroll;
        }

        h1, h2, h3, h4, h5, h6, span, div, strong {
          color: rgba(0,0,0,0.87);
          font-family: 'Amatic SC';
        }

        p, ul, li, input, textarea {
          color: ${theme.colors.blackMedium};
          line-height: 2.25rem;
          font-family: 'Lato', sans-serif;
        }

        body {
          font-size: 20px;
          font-family: 'Lato', sans-serif;
          margin: 0;
        }

        p {
          font-weight: 400;
          font-size: 18px;
        }

        button {
          font-family: 'Amatic SC';
        }
      `}
    />
    <Navigation homeNavbar={homeNavbar} />
    <main>{children}</main>
    <Footer logo="/logo-geen-vrijwilligers-probleem.svg" />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
