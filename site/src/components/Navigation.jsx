import React from 'react';
import styled from '@emotion/styled';
import { Link } from "gatsby";
import Theme from "../utils/Theme";
import { Flex, Box } from "rebass";

const NavContainer = styled.div`
    background-color: ${props => props.theme.colors.white};
    width: 100%;
    padding: 0 48px;
`;

const Navbar = styled.nav`
    text-align: center;
    max-width: 1024px;
    margin: 0 auto;
`;

const NavLink = styled(Link)`
    padding: 24px;
    color: ${props => props.theme.colors.black};
    text-decoration: none;
`;

const Logo = styled.img`
  max-width: 150px;
  position: absolute;
  top: 12px;
  z-index: 10;
`;

const RelativeContainer = styled.div`
  position: relative;
`;

const Navigation = () => (
  <Theme>
    <RelativeContainer>
      <NavContainer>
        <Navbar>
          <Flex
            px={2}
            alignItems='center'
            flexWrap='wrap'
          >
            <Box mx='auto' />
            <NavLink to="/">Home</NavLink>
            <NavLink to="/pakketten/">Pakketten</NavLink>
            <NavLink to="/ervaringen/">Ervaringen</NavLink>
            <NavLink to="/contact/">Contact</NavLink>
          </Flex>
        </Navbar>
      </NavContainer>
      <Logo src="/logo-geen-vrijwilligers-probleem.svg" alt="Logo Geen Vrijwilligersprobleem" />
    </RelativeContainer>
  </Theme>
);

export default Navigation;