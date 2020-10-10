import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styled from '@emotion/styled';
import { Link } from "gatsby";
import Img from 'gatsby-image';
import Drawer from "./Drawer";
import Theme from "../utils/Theme";
import { LogoQuery } from "../utils/queries/logo";

const Logo = styled(Img)`
  max-width: 150px;
  margin: 16px auto;

  @media (min-width: 1024px) {
    max-width: 180px;
    margin: 16px 0 0;
  }
`;

const LogoContainer = styled.div`
  background-color: #fff;
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
    line-height: 187px;

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
  min-height: 187px;

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

  @media (min-width: 1024px) {
      justify-content: space-between;
      padding-left: 48px;
      padding-right: 48px;
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
              <Logo fixed={logo.fixed} />
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
