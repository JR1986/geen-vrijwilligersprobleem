import React from 'react';
import styled from '@emotion/styled';
import Theme from "../utils/Theme";
import Img from 'gatsby-image';
import { Link } from "gatsby";
import { Flex, Text } from "rebass";
import { LogoQuery } from "../utils/queries/logo";

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

const Footer = () => {
    const {
        logo
    } = LogoQuery();

    return (
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
                    <Img fixed={logo.fixed} />
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
}

export default Footer;