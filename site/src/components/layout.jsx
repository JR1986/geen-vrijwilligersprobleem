/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navigation from './Navigation';
import { ThemeProvider } from 'emotion-theming'
import theme from '../utils/theme';

const Layout = ({ children }) => {

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <main>{children}</main>
      <footer>
        <div>Footer</div>
      </footer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
