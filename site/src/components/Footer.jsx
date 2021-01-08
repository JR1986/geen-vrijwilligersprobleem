import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Theme from '../utils/Theme';

const FooterContainer = styled.footer`
    padding: 48px 0;
    background-color: ${(props) => props.theme.colors.blackBackground};

    @media (min-width: 1024px) {
        padding: 72px 48px;
    }
`;

const Links = styled.div`
    display: flex;
    font-size: 14px;
    flex-direction: column;
    text-align: center;
    border-bottom: 3px solid ${(props) => props.theme.colors.primary};
    text-transform: uppercase;

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
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
`;

const BottomContainer = styled.div`
  &&& {
    text-align: center;
    font-size: 14px;
    

    p, span {
      color: ${(props) => props.theme.colors.white};
    }
    
    a {
      text-decoration: none;
    }
  }
`;

const Footer = () => (
  <Theme>
    <FooterContainer>
      <Links>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pakketten/">Pakketten</NavLink>
        <img
          src="/logo-geen-vrijwilligers-probleem-white.svg"
          alt="Geen Vrijwilligersprobleem"
          width={150}
          height={150}
        />
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
);

export default Footer;
