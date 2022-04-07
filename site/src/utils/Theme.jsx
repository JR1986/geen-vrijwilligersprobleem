import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@emotion/react';

export const theme = {
  colors: {
    primary: '#FFED00',
    secondary: '#fff',
    white: '#ffffff',
    black: 'rgba(0,0,0,0.87)',
    blackMedium: 'rgba(0,0,0,0.60)',
    blackBackground: '#39454a',
    blackBackgroundAlpha: 'rgba(57, 69, 74, 0.9)',
    primaryBackground: '#ffffff',
    secondaryBackground: '#f8f8f8',
    thirdBackground: '#EF476F',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
