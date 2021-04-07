import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { 
  Avatar, 
  Typography, 
  Icon, 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Button 
} from '@material-ui/core';

import UserMenu from './UserMenu';
import { navigationMenu } from './menus';
import sampleImage from '../../../images/cat.jpg';
import './SubNavbar.scss';


export default function SubNavbar({ title, handleLogout }) {
  const [isMenuOpened, showMenu] = useState(false);
  const [isUserMenuOpened, toggleUserMenu] = useState(false);
  const userMenuArrow = useRef(null);

  const [toolsOpened, toggleTools] = useState(false);

  useEffect(() => {
    const searchTools = document.querySelector('.SearchTools');
    const forum = document.querySelector('.Forum');

      if(toolsOpened) {
        searchTools.classList.add('show-search-tools');
        forum.classList.add('forum-translate');
      } else if (searchTools) {
        searchTools.classList.remove('show-search-tools');
        forum.classList.remove('forum-translate');
      }
  }, [toolsOpened]);

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
        logoutFunc={handleLogout}
      />

      <div className="SubNavbar-desktop-content">
        <Typography 
            variant='h4' 
            gutterBottom 
            style={{ marginLeft: 20, fontWeight: 1000 }} 
            className='blue Subnavbar_title'
        >
          {title}
        </Typography>

        <Button onClick={() => toggleTools(!toolsOpened)} className="filter-icon-desktop">Search</Button>
      </div>



      <div style={{ flex: 1 }}/>

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
