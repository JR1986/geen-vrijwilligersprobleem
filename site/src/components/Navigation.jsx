import React from 'react';
import styled from '@emotion/styled';
import { Link } from "gatsby";
import Theme from "../utils/Theme";
import { Flex, Text, Box } from "rebass";

const NavContainer = styled.div`
    background-color: ${props => props.theme.colors.white};
    width: 100%;
`;

const Navbar = styled.nav`
    max-width: 1440px;
    margin: 0 auto;
    text-align: center;
`;

const NavLink = styled(Link)`
    padding: 24px;
    color: ${props => props.theme.colors.black};
    text-decoration: none;
`;

const Logo = styled.img`
  max-width: 200px;
  position: absolute;
  top: 12px;
  left: 24px;
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
            alignItems='center'>
            <Box mx='auto' />
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about/">About</NavLink>
            <NavLink to="/contact/">Contact</NavLink>
          </Flex>
        </Navbar>
      </NavContainer>
      <Logo src="/logo-geen-vrijwilligers-probleem.svg" alt="Logo Geen Vrijwilligersprobleem" />
    </RelativeContainer>
  </Theme>
);

export default Navigation;