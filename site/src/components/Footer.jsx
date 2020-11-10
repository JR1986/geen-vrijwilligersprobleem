import React from 'react';
import styled from '@emotion/styled';
import Theme from "../utils/Theme";
import Img from 'gatsby-image';
import { Link } from "gatsby";
import { LogoQuery } from "../utils/queries/logo";

const FooterContainer = styled.footer`
    padding: 0 0 48px;
    background-color: ${props => props.theme.colors.secondary};

    @media (min-width: 1024px) {
        padding: 72px 48px;
    }
`;

const Links = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    border-bottom: 1px solid ${props => props.theme.colors.white};

    @media (min-width: 600px) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-bottom: 16px;
        margin-bottom: 24px;
    }
`;

const NavLink = styled(Link)`
    padding: 24px;
    color: ${props => props.theme.colors.black};
    text-decoration: none;
`;

const StyledImg = styled(Img)`
    margin: 0 auto;

    @media (min-width: 600px) {
        margin: 0;
    }
`;

const BottomContainer = styled.div`
    text-align: center;
`;

const Footer = () => {
    const {
        logo
    } = LogoQuery();

    return (
        <Theme>
            <FooterContainer>
                <Links>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/pakketten/">Pakketten</NavLink>
                    <StyledImg fixed={logo.fixed} />
                    <NavLink to="/over-ons/">Over ons</NavLink>
                    <NavLink to="/contact/">Contact</NavLink>
                </Links>
                <BottomContainer>
                    <p>06 1036 5180</p>
                    <Link
                        to="/privacy"
                    >
                        <span>
                            Privacy Statement
                    </span>
                    </Link>
                </BottomContainer>
            </FooterContainer>
        </Theme>
    )
}

export default Footer;
