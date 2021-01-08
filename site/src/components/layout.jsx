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
          font-family: 'Lato';
          font-display: swap;
        }

        html {
          overflow-y: scroll;
        }

        h1, h2, h3, h4, h5, h6, span, div, strong {
          color: rgba(0,0,0,0.87);
        }

        p, ul, li {
          color: ${theme.colors.blackMedium};
          line-height: 2.25rem;
        }

        body {
          font-size: 18px;
          font-family: 'Lato', sans-serif;
          margin: 0;
        }

        p {
          font-weight: 400;
        }

        button {
          font-family: 'Lato', sans-serif;
        }
      `}
    />
    <Navigation homeNavbar={homeNavbar} />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
