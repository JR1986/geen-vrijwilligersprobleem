import React from "react"
import PropTypes from "prop-types"
import styled from '@emotion/styled';
import Navigation from './Navigation';

const Layout = ({ children }) => {

  return (
    <>
      <Navigation />
      <main>{children}</main>
      <footer>
        <div>Footer</div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
