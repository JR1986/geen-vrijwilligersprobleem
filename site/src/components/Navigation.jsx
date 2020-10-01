import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from '@emotion/styled';
import { Link } from "gatsby";
import Theme from "../utils/Theme";

const Logo = styled.img`
  max-width: 150px;
  margin: 16px auto;

  @media (min-width: 1024px) {
    max-width: 180px;
    padding-top: 12px;
    margin: 0;
  }
`;

const NavLink = styled(Link)`
    margin: 0 24px;
    padding: 24px 0;
    color: ${props => props.theme.colors.black};
    text-decoration: none;

    &[aria-current="page"] {
      color: ${props => props.theme.colors.secondary};
      border-bottom: 2px solid ${props => props.theme.colors.secondary};
    }
`;

const StyledAppBar = styled(AppBar)`
  padding-left: 16px;
  padding-right: 35px;
  max-width: 1440px;
  margin: 0 auto;

  &&& {
    background-color: ${props => props.theme.colors.white};
    border-bottom: 1px solid rgba(255,255,255, 0.4);
    box-shadow: none;
  }

  @media (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const StyledToolbar = styled(Toolbar)`

  @media (min-width: 1024px) {
    && {
      justify-content: space-between;
      padding-left: 48px;
      padding-right: 48px;
    }
  }
`;

const StyledIconButton = styled(IconButton)`

  @media (min-width: 1024px) {
    && {
      display: none;
    }
  }
`;

const NavLinkContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export default function Navigation() {

  return (
    <Theme>
      <div>
        <StyledAppBar position="static">
          <StyledToolbar>
            <StyledIconButton edge="start" aria-label="menu">
              <MenuIcon />
            </StyledIconButton>
            <Logo src="/logo-geen-vrijwilligers-probleem.svg" alt="Logo Geen Vrijwilligersprobleem" />
            <NavLinkContainer>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/pakketten/">Pakketten</NavLink>
              <NavLink to="/over-ons/">Over ons</NavLink>
              <NavLink to="/contact/">Contact</NavLink>
            </NavLinkContainer>
          </StyledToolbar>
        </StyledAppBar>
      </div>
    </Theme>
  );
}
