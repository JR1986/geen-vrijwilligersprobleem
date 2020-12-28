import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';

export const theme = {
  colors: {
    primary: '#9FC131',
    secondary: '#191923',
    white: '#ffffff',
    black: 'rgba(0,0,0,0.87)',
    blackMedium: 'rgba(0,0,0,0.60)',
    primaryBackground: '#ffffff',
    secondaryBackground: '#f8f8f8',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
