import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Typography, Icon, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import './SubNavbar.scss';
import { navigationMenu } from './menus';
import sampleImage from '../../../images/cat.jpg';
import UserMenu from './UserMenu';

export default function SubNavbar({ title }) {
  const [isMenuOpened, showMenu] = useState(false);
  const [isUserMenuOpened, toggleUserMenu] = useState(false);
  const userMenuArrow = useRef(null);

  return (
    <div className='subNavbar'>
      <div onClick={() => toggleUserMenu(!isUserMenuOpened)} className="Subnavbar_img sub_nav_user_menu_btn">
        <Avatar src={sampleImage} />
        <Icon ref={userMenuArrow} className="user_menu_arrow" color="primary">expand_more</Icon> 
      </div>

      <UserMenu 
        isOpened={isUserMenuOpened} 
        showMenu={toggleUserMenu} 
        anchorClassName=".sub_nav_user_menu_btn"
        anchorRef={userMenuArrow}
      />


      <Typography 
          variant='h4' 
          gutterBottom 
          style={{ marginLeft: 20, fontWeight: 1000 }} 
          className='blue Subnavbar_title'
      >
        {title}
      </Typography>


      <div style={{ flex: 1 }} />

      <Icon onClick={() => showMenu(true)}  className="menu_icon" fontSize="large">menu</Icon>

      <Drawer anchor="left" open={ isMenuOpened } onClose={() => showMenu(false)}>
        <List style={{width: '200px'}} dense>
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
      </Drawer>
    </div>
  );
}
