import React from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import { theme } from '../utils/Theme';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        @font-face {
          font-family: 'Ubuntu';
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
        }

        body {
          font-size: 18px;
          font-family: 'Ubuntu', sans-serif;
          margin: 0;
        }

        p {
          font-weight: 400;
          line-height: 1.75rem;
        }

        button {
          font-family: 'Ubuntu', sans-serif;
        }
      `}
    />
    <Navigation />
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
