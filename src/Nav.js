import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function Nav () {
    return (
        <div>
            <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{marginLeft:'10%'}}>
          <Link to ='/' style={{textDecoration:'none' ,color:'white'}} >
          <h3 >Home</h3>
           </Link>
          </Typography>
          <Typography variant="h6" style={{marginLeft:'10%'}}>
          <Link to ='/users' style={{textDecoration:'none',color:'white'}}>
          <h3>Users</h3>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
        </div>
    )
}
export default Nav;