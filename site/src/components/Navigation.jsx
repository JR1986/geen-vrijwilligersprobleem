import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styled from '@emotion/styled';
import { Link } from "gatsby";
import Drawer from "./Drawer";
import Theme from "../utils/Theme";
import { LogoQuery } from "../utils/queries/logo";

const LogoContainer = styled.div`
  margin: 0 auto;

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
`

const NavLink = styled(Link)`
    margin: 0 24px;
    padding: 24px 0;
    color: ${props => props.theme.colors.black};
    text-decoration: none;
    line-height: 160px;

    &[aria-current="page"] {
      color: ${props => props.theme.colors.secondary};
      border-bottom: 2px solid ${props => props.theme.colors.secondary};
    }
`;

const StyledAppBar = styled(AppBar)`
  padding-left: 0;
  padding-right: 0;
  max-width: 1440px;
  margin: 0 auto;
  min-height: 160px;

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
  && {
    padding-left: 0;
    padding-right: 0;
    height: 160px;

  @media (min-width: 1024px) {
      justify-content: space-between;
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

export default function Navigation() {

  const {
    logo
  } = LogoQuery();

  return (
    <Theme>
      <div>
        <StyledAppBar position="static">
          <StyledToolbar>
            <StyledDrawer />
            <LogoContainer>
              <img src="/logo-geen-vrijwilligers-probleem.svg" alt="Geen Vrijwilligersprobleem" />
            </LogoContainer>
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
