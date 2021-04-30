import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import styles from './MobileNavBar.module.scss';

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
      <ListItem button to={'/'} onClick={closeBlade} key={navLink}>
        <ListItemText primary={navLink} className={styles.navLinkText}/>
      </ListItem>
    ));
    
    return (
      <List>
        {navLinkElements}
      </List>
    );
  };

  return (
    <span className={styles.mobileNavBar}>
      <IconButton
        aria-label="menu"
        className={styles.menuButton}
        onClick={openBlade}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={isBladeOpen}
        onClose={closeBlade}
        PaperProps={{
          style: {
            background: 'linear-gradient(-45deg, #EEBECE, #23a6d5)',
            color: '#fff'
          }
        }}
      >
        {getNavBar()}
      </Drawer>
    </span>
  );
};

export default MobileNavBar;