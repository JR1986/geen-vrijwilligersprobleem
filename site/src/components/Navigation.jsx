import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Drawer from './Drawer';
import Theme, { theme } from '../utils/Theme';

const LogoContainer = styled.div`
  margin: 12px auto;

  @media (min-width: 1024px) {
    margin: 16px 0;
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
    text-decoration: none;

  ${(props) => (props.homeNavbar
    ? `
    && {
     color: ${theme.colors.white}
    }
    `
    : `
    && {
      color: ${theme.colors.black}
    }
    `
  )
}
    font-size: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;

    &:hover:after {
      height: 1px;
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
  }
`;

const StyledAppBar = styled(AppBar)`
  padding-left: 0;
  padding-right: 0;

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
      background-color: ${theme.colors.secondary};
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

  @media (min-width: 1024px) {
      display: flex;
      justify-content: space-between;
      padding-left: 24px;
      padding-right: 24px;
    }
  }
`;

const Navigation = ({ homeNavbar }) => (
  <Theme>
    <div>
      <StyledAppBar position="static" homeNavbar={homeNavbar}>
        <StyledDrawer homeNavbar={homeNavbar} />
        <LogoContainerMobile>
          <img
            src={homeNavbar ? '/logo-geen-vrijwilligers-probleem-white.svg' : '/logo-geen-vrijwilligers-probleem.svg'}
            alt="Geen Vrijwilligersprobleem"
            width={130}
            height={130}
          />
        </LogoContainerMobile>
        <StyledToolbar>
          <LogoContainer>
            <img
              src={homeNavbar ? '/logo-geen-vrijwilligers-probleem-white.svg' : '/logo-geen-vrijwilligers-probleem.svg'}
              alt="Geen Vrijwilligersprobleem"
              width={120}
              height={120}
            />
          </LogoContainer>
          <div>
            <NavLink homeNavbar={homeNavbar} to="/">Home</NavLink>
            <NavLink homeNavbar={homeNavbar} to="/pakketten">Pakketten</NavLink>
            <NavLink homeNavbar={homeNavbar} to="/over-geen-vrijwilligersprobleem">Over Geen Vrijwilligersprobleem</NavLink>
            <NavLink homeNavbar={homeNavbar} to="/contact">Contact</NavLink>
          </div>
        </StyledToolbar>
      </StyledAppBar>
    </div>
  </Theme>
);

export default Navigation;
