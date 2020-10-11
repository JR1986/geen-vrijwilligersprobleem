import React from "react"
import PropTypes from "prop-types"
import { Global, css } from '@emotion/core'
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {

  return (
    <>
      <Global
        styles={css`
        @font-face {
          font-family: 'Josefin Sans';
          font-display: swap;
        }

        h1, h2, h3, h4, h5, h6, p, span, div, strong {
          color: rgba(0,0,0,0.87);

        }

        body {
          font-size: 18px;
          font-family: 'Josefin Sans', sans-serif;
          margin: 0;
        }

        p {
          font-weight: 400;
          line-height: 1.75rem;
        }

        button {
          font-family: 'Josefin Sans', sans-serif;
        }
      `}
      />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
