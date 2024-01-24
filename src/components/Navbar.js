// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { colors } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>My React Website</Link>
        </Typography>
        <div style={{ marginLeft: 'auto' }}>
          <Link to="/about" style={{ marginRight: 20, color: 'white', textDecoration: 'none' }}>About</Link>
          <Link to="/work-features" style={{ marginRight: 20, color: 'white', textDecoration: 'none' }} >Work</Link>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
      
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
