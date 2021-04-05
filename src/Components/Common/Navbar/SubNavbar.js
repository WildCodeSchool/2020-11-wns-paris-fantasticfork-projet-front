import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
import { useMutation } from '@apollo/client';
import { LOGOUT } from '../../../graphql/User';
import UserMenu from './UserMenu';
import { navigationMenu } from './menus';
import sampleImage from '../../../images/cat.jpg';
import './SubNavbar.scss';


export default function SubNavbar({ title }) {
  const [isMenuOpened, showMenu] = useState(false);
  const [isUserMenuOpened, toggleUserMenu] = useState(false);
  const userMenuArrow = useRef(null);

  const isAuth = !!localStorage.getItem('stud-connect@userID');
  const history = useHistory();
  const [logoutUser, { client }] = useMutation(LOGOUT);

  const goToLogin = () => {
    history.push('/login');
  };

  const handleLogout = async () => {
    await logoutUser();

    localStorage.setItem('stud-connect@userID', '');
    localStorage.setItem('stud-connect@token', '');
    localStorage.setItem('stud-connect@tokenExpiration', '');

    await client.resetStore();

    history.push('/');
  };

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


      <Typography 
          variant='h4' 
          gutterBottom 
          style={{ marginLeft: 20, fontWeight: 1000 }} 
          className='blue Subnavbar_title'
      >
        {title}
      </Typography>

      <div className='logButton'>
        {isAuth &&
          <Button variant='contained' color='primary' onClick={goToLogin}>
            Login
          </Button>
        }
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
