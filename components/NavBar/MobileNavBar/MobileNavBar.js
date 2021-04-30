import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from 'next/link';

import './MobileNavBar.module.scss';

const MobileNavBar = ({ navLinks }) => {
  const [isBladeOpen, setIsBladeOpen] = React.useState(false);

  const closeBlade = () => {
    setIsBladeOpen(false);
  };

  const openBlade = () => {
    setIsBladeOpen(true);
  };

  const getNavBar = () => {
    const navLinkElements = navLinks.map(navLink => (
      <ListItem button component={Link} to={'/'} onClick={closeBlade}>
        <ListItemText primary={navLink} />
      </ListItem>
    ));
    
    return (
      <List>
        {navLinkElements}
      </List>
    );
  };

  return (
    <span className="mobileNavBar">
      <IconButton
        aria-label="menu"
        className="menuButton"
        onClick={openBlade}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={isBladeOpen}
        onClose={closeBlade}
      >
        {getNavBar()}
      </Drawer>
    </span>
  );
};

export default MobileNavBar;