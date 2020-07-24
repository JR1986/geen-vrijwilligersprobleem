import React from 'react';
import styled from '@emotion/styled';
import { Link } from "gatsby";

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
    <NavContainer>
        <Navbar>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about/">About</NavLink>
            <NavLink to="/contact/">Contact</NavLink>
        </Navbar>
    </NavContainer>
);

export default Navigation;