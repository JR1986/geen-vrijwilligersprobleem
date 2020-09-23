import React from "react"
import PropTypes from "prop-types"
import styled from '@emotion/styled';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {

  return (
    <>
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
