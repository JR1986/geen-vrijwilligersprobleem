import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Theme from '../utils/Theme';

const FooterContainer = styled.footer`
    padding: 48px 0;
    background-color: ${(props) => props.theme.colors.secondaryBackground};
    border-top: 3px dashed lightgrey;

    @media (min-width: 1024px) {
        padding: 72px 48px;
    }
`;

const Links = styled.div`
    display: flex;
    font-size: 13px;
    flex-direction: column;
    text-align: center;
    text-transform: uppercase;

    @media (min-width: 600px) {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-bottom: 36px;
    }
`;

const NavLink = styled(Link)`
    padding: 24px;
    color: ${(props) => props.theme.colors.black};
    text-decoration: none;
    font-size: 18px;
`;

const BottomContainer = styled.div`
  &&& {
    text-align: center;
    font-size: 18px;
    

    p, span {
      color: ${(props) => props.theme.colors.black};
    }
    
    a {
      text-decoration: none;
    }
  }
`;

const Logo = styled.img`
  @media (max-width: 599px) { 
    margin: 0 auto;
  }
`;

const Footer = ({ logo }) => (
  <Theme>
    <FooterContainer>
      <Links>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pakketten/">Pakketten</NavLink>
        <Logo
          src={logo}
          alt="Geen Vrijwilligersprobleem"
          width={130}
          height={130}
        />
        <NavLink to="/over-geen-vrijwilligersprobleem/">Over ons</NavLink>
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
