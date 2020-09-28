import React from 'react';
import styled from '@emotion/styled';
import { Link } from "gatsby";
import Theme from "../utils/Theme";
import { Flex, Box } from "rebass";

const NavContainer = styled.div`
    background-color: ${props => props.theme.colors.secondary};
    width: 100%;
    padding: 0 72px;
    border-bottom: 1px solid rgba(255,255,255, 0.4);
`;

const Navbar = styled.nav`
    text-align: center;
`;

const NavLink = styled(Link)`
    padding: 24px;
    color: ${props => props.theme.colors.black};
    text-decoration: none;
`;

const Logo = styled.img`
  max-width: 150px;
  margin-bottom: -80px;
  padding-top: 12px;
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
            <Logo src="/logo-geen-vrijwilligers-probleem.svg" alt="Logo Geen Vrijwilligersprobleem" />
            <Box mx='auto' />
            <NavLink to="/">Home</NavLink>
            <NavLink to="/pakketten/">Pakketten</NavLink>
            <NavLink to="/ervaringen/">Ervaringen</NavLink>
            <NavLink to="/contact/">Contact</NavLink>
          </Flex>
        </Navbar>
      </NavContainer>
    </RelativeContainer>
  </Theme>
);

export default Navigation;