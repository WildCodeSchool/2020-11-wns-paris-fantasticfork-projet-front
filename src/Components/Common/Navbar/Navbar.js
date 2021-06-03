import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Icon, Avatar, Typography, Badge } from '@material-ui/core';

import sampleImage from '../../../images/cat.jpg';
import logo from '../../../images/stud-connect-logo-primary-bg-white.svg';
import './Navbar.scss';
import { navigationMenu } from './menus';
import UserMenu from './UserMenu';

export default function Navbar({handleLogout}) {
  const [isUserMenuOpened, toggleUserMenu] = useState(false);
  const userMenuArrow = useRef(null);

  return (
    <div className='Navbar'>
      <div className='flex_column Navbar_profile'>
        <Badge badgeContent={3} color='secondary' style={{alignSelf:'flex-start', marginLeft:'20px'}}>
          <Icon>notifications</Icon>
        </Badge>
        
        <Avatar src={sampleImage} className='Navbar_img' />
        <Typography 
          onClick={() => toggleUserMenu(!isUserMenuOpened)} 
          variant='h6' 
          gutterBottom 
          className="Navbar_username nav_user_menu_btn"
        >{localStorage.getItem('stud-connect@firstname')} {localStorage.getItem('stud-connect@lastname')}
          <Icon ref={userMenuArrow} className="user_menu_arrow">expand_more</Icon>
        </Typography>

        <UserMenu 
          isOpened={isUserMenuOpened} 
          showMenu={toggleUserMenu} 
          anchorClassName=".nav_user_menu_btn"
          anchorRef={userMenuArrow}
          logoutFunc={handleLogout}
        />
      </div>
      <div className="Navbar_logo">
        <img src={logo} alt="logo"/>
      </div>
      <List disablePadding dense>
        {navigationMenu.map((elem) => (
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
