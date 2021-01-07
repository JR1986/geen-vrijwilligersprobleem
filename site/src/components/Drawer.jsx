import React from 'react';
import styled from '@emotion/styled';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'gatsby';
import Theme from '../utils/Theme';

const links = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Pakketten',
    href: '/pakketten',
  },
  {
    title: 'Over ons',
    href: '/over-ons',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

const StyledButton = styled(Button)`
&&& {
    position: absolute;
    height: 120px;
    width: 64px;
  
    @media (min-width: 1024px) {
    display: none;
  }
}
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
`;

const StyledLink = styled(Link)`
    padding: 24px 0;
    color: ${(props) => props.theme.colors.black};
    text-decoration: none;

    &[aria-current="page"] {
        color: ${(props) => props.theme.colors.secondary};
    }
`;

export default function MobileDrawer() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <List>
      {links.map(({ title, href }) => (
        <StyledLink to={href} key={title}>
          {title}
        </StyledLink>
      ))}
    </List>
  );

  return (
    <Theme>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <StyledButton aria-label="Menu" onClick={toggleDrawer(anchor, true)}><MenuIcon style={{ color: 'white' }} /></StyledButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Theme>
  );
}
