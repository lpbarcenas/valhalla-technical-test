import React  from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import NavMenuButton from './NavMenuButton';

const Navbar = () => {

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          Photo Sharing App 
        </IconButton>
        <NavMenuButton category='nature'>
          Nature
        </NavMenuButton>
        <NavMenuButton category='architecture'>
          Architecture
        </NavMenuButton>
        <NavMenuButton category='fashion'>
          Fashion
        </NavMenuButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;