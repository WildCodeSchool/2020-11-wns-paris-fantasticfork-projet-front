import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Icon, Avatar, Typography } from '@material-ui/core';
import sampleImage from '../../../images/cat.jpg';
import './Navbar.css';

const menu = [
  { text: 'Home', icon: 'home', link: '/' },
  { text: 'Dashboard', icon: 'dashboard', link: '/dashboard' },
  { text: 'My Class', icon: 'school', link: '/classroom' },
  { text: 'Forum', icon: 'forum', link: '/topics' },
  { text: 'Daily', icon: 'today', link: '/daily' },
];

export default function Navbar() {
  return (
    <div className='Navbar'>
      <div className='flex_column Navbar_profile'>
        <Avatar src={sampleImage} className='Navbar_img' />
        <Typography variant='h6' gutterBottom className='blue'>
          John Stud Edit
          <Icon>create</Icon>
        </Typography>
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
