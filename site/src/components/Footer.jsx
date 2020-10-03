import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Theme from "../utils/Theme";
import { Link } from "gatsby";
import { Flex, Text } from "rebass";

const FooterContainer = styled.footer`
    padding: 16px;
    background-color: ${props => props.theme.colors.secondary};
    
    @media (min-width: 1024px) {
        padding: 72px 48px;
    }
`;

const NavLink = styled(Link)`
    padding: 24px;
    color: ${props => props.theme.colors.black};
    text-decoration: none;
`;

const Image = styled.img`
    max-width: 150px;
    margin: 0 0 24px;
`;

const Footer = () => (
    <Theme>
        <FooterContainer>
            <Flex
                px={2}
                alignItems='center'
                justifyContent='center'
                flexWrap="wrap"
                sx={{
                    borderBottom: `1px solid white`
                }}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/pakketten/">Pakketten</NavLink>
                <Image src="/logo-geen-vrijwilligers-probleem.svg" alt="Logo Geen Vrijwilligersprobleem" />
                <NavLink to="/over-ons/">Over ons</NavLink>
                <NavLink to="/contact/">Contact</NavLink>
            </Flex>
            <Flex
                justifyContent='center'
            >
                <Text
                    as="p"
                    p={32}
                >06 1036 5180</Text>
            </Flex>
            <Flex
                justifyContent='center'
            >
                <Link
                    to="/privacy"
                >
                    <Text
                        as="span"
                        p={16}
                    >
                        Privacy Statement
                    </Text>
                </Link>
            </Flex>
        </FooterContainer>
    </Theme>
)

export default Footer;