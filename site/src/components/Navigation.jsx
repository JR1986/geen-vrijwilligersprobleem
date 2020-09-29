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
  margin-bottom: -80px;
  padding-top: 12px;
`;

const NavLink = styled(Link)`
    padding: 24px;
    color: ${props => props.theme.colors.black};
    text-decoration: none;
`;

const StyledAppBar = styled(AppBar)`

&&& {
  background-color: ${props => props.theme.colors.secondary};
  padding: 0 72px;
  border-bottom: 1px solid rgba(255,255,255, 0.4);
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
          <Toolbar>
            <IconButton edge="start" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Logo src="/logo-geen-vrijwilligers-probleem.svg" alt="Logo Geen Vrijwilligersprobleem" />
            <NavLinkContainer>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/pakketten/">Pakketten</NavLink>
              <NavLink to="/ervaringen/">Ervaringen</NavLink>
              <NavLink to="/contact/">Contact</NavLink>
            </NavLinkContainer>
          </Toolbar>
        </StyledAppBar>
      </div>
    </Theme>
  );
}
