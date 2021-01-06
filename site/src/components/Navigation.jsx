import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Drawer from './Drawer';
import Theme, { theme } from '../utils/Theme';

const LogoContainer = styled.div`
  margin: 0 auto;
  max-width: 100px;

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

const StyledDrawer = styled(Drawer)`

  &&& {

    @media (min-width: 1024px) {
      display: none;
    }
  }
`;

const NavLink = styled(Link)`
  && {
    margin: 0 32px;
    padding: 12px 0;
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;

    &[aria-current="page"] {
      font-weight: bold;
      border-bottom: 2px solid ${(props) => props.theme.colors.white};
    }
  }
`;

const StyledAppBar = styled(AppBar)`
  padding-left: 0;
  padding-right: 0;
  margin: 0 auto;
  min-height: 120px;

  && { 
    position: absolute;
  }

  &&& {
    background-color: ${(props) => props.theme.colors.blackBackgroundAlpha};
    box-shadow: none;
  }

  @media (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const StyledToolbar = styled(Toolbar)`
  && {
    padding-left: 0;
    padding-right: 0;
    height: 120px;
    border-bottom: 1px solid ${theme.colors.primary};

  @media (min-width: 1024px) {
      justify-content: center;
      padding-left: 24px;
      padding-right: 24px;
    }
  }
`;

const NavLinkContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const Navigation = () => (
  <Theme>
    <div>
      <StyledAppBar position="static">
        <StyledToolbar>
          <StyledDrawer />
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pakketten/">Pakketten</NavLink>
          <LogoContainer>
            <img src="/logo-geen-vrijwilligers-probleem-white.svg" alt="Geen Vrijwilligersprobleem" />
          </LogoContainer>
          <NavLink to="/over-ons/">Over ons</NavLink>
          <NavLink to="/contact/">Contact</NavLink>
        </StyledToolbar>
      </StyledAppBar>
    </div>
  </Theme>
);

export default Navigation;
