import React from 'react';
import styled from '@emotion/styled';
import { Link } from "gatsby";
import Hero from "./Hero";
import { Flex, Text, Box } from "rebass";

const NavContainer = styled.div`
    background-color: blue;
    width: 100%;
`;

const Navbar = styled.nav`
    max-width: 1440px;
    margin: 0 auto;
    text-align: center;
`;

const NavLink = styled(Link)`
    display: inline-block;
    padding: 24px 48px;
    color: white;
    margin: 0 auto;
    text-shadow: none;
`;

const Navigation = () => (
  <>
    <NavContainer>
      <Navbar>
        <Flex
          px={2}
          color={theme.primary}
          bg='white'
          alignItems='center'>
          <Text p={2} fontWeight='bold'>Rebass</Text>
          <Box mx='auto' />
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about/">About</NavLink>
          <NavLink to="/contact/">Contact</NavLink>
        </Flex>
      </Navbar>
    </NavContainer>
    <Hero></Hero>
  </>
);

export default Navigation;