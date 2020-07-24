import React from 'react';
import styled from '@emotion/styled';

const NavContainer = styled.div`
    background-color: blue;
    width: 100%;
`;

const Navbar = styled.nav`
    max-width: 1440px;
    margin: 0 auto;
    text-align: center;
`;

const NavLink = styled.li`
    display: inline-block;
    padding: 24px 48px;
    color: white;
    margin: 0 auto;
`;

const Navigation = () => (
    <NavContainer>
        <Navbar>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact</NavLink>
        </Navbar>
    </NavContainer>
);

export default Navigation;