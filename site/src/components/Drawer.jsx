import React from 'react';
import styled from '@emotion/styled';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
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
    title: 'Over Geen Vrijwilligersprobleem',
    href: '/over-geen-vrijwilligersprobleem',
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
`;

export default function MobileDrawer({ homeNavbar }) {
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
          <StyledButton aria-label="Menu" onClick={toggleDrawer(anchor, true)}><MenuIcon color={homeNavbar ? 'white' : 'black'} /></StyledButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Theme>
  );
}
