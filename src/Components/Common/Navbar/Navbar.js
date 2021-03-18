import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Icon, Avatar, Typography, Badge } from '@material-ui/core';
import sampleImage from '../../../images/cat.jpg';
import logo from '../../../images/stud-connect-logo-primary-bg-white.svg';
import './Navbar.scss';
import menu from './menu';

export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className='flex_column Navbar_profile'>
        <Badge badgeContent={3} color='secondary' style={{alignSelf:'flex-start', marginLeft:'20px'}}>
          <Icon>notifications</Icon>
        </Badge>
        <Avatar src={sampleImage} className='Navbar_img' />
        <Typography variant='h6' gutterBottom className="Navbar_username">
          John Stud
          <Icon>chevron_right</Icon>
        </Typography>
      </div>
      <div className="Navbar_logo">
        <img src={logo} alt="logo"/>
      </div>
      <List disablePadding dense>
        {menu.map((elem) => (
          <ListItem key={elem.text} button className='Navbar_menu_item' component={Link} to={elem.link}>
            <ListItemIcon>
              <Icon fontSize='default' className='Navbar_menu_icon'>
                {elem.icon}
              </Icon>
            </ListItemIcon>
            <ListItemText primary={elem.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
