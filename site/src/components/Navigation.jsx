import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Drawer from './Drawer';
import Theme, { theme } from '../utils/Theme';

const LogoContainer = styled.div`
  margin: 0 auto;

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

const LogoContainerMobile = styled(LogoContainer)`
  display: block;
  margin: 0 auto;

  @media (min-width: 1024px) {
    display: none;
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
    margin: 0 40px;
    padding: 12px 0;
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
      transition: color 0.3s;
    }

    &:hover:after {
      height: 3px;
      opacity: 1;
      transform: translateY(0px);
    }

    &:after {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 1px;
      background: ${(props) => props.theme.colors.primary};
      content: '';
      opacity: 0;
      transition: height 0.3s, opacity 0.3s, transform 0.3s;
      transform: translateY(-10px);
    }

    &[aria-current="page"] {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

const StyledAppBar = styled(AppBar)`
  padding-left: 0;
  padding-right: 0;
  margin: 0 auto;

  ${(props) => (props.homeNavbar
    ? `
    && {
      position: absolute;
      background-color: transparent;
      z-index: 1;
    }
    `
    : `
    && {
      position: static;
      background-color: ${theme.colors.blackBackgroundAlpha};
      z-index: 0;
    }
    `
  )
}

  &&& {
    box-shadow: none;
  }

  @media (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const StyledToolbar = styled(Toolbar)`
  && {
    display: none;
    padding-left: 0;
    padding-right: 0;
    justify-content: center;

  @media (min-width: 1024px) {
      display: flex;
      padding-left: 24px;
      padding-right: 24px;
    }
  }
`;

const Navigation = ({ homeNavbar }) => (
  <Theme>
    <div>
      <StyledAppBar position="static" homeNavbar={homeNavbar}>
        <StyledDrawer />
        <LogoContainerMobile>
          <img
            src="/logo-geen-vrijwilligers-probleem-white.svg"
            alt="Geen Vrijwilligersprobleem"
            width={150}
            height={150}
          />
        </LogoContainerMobile>
        <StyledToolbar>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pakketten/">Pakketten</NavLink>
          <LogoContainer>
            <img
              src="/logo-geen-vrijwilligers-probleem-white.svg"
              alt="Geen Vrijwilligersprobleem"
              width={150}
              height={150}
            />
          </LogoContainer>
          <NavLink to="/over-ons/">Over ons</NavLink>
          <NavLink to="/contact/">Contact</NavLink>
        </StyledToolbar>
      </StyledAppBar>
    </div>
  </Theme>
);

export default Navigation;
