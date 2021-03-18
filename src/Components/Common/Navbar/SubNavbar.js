import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Icon, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import './SubNavbar.scss';
import menu from './menu';

export default function SubNavbar({ title }) {
  // const [Log, setLog] = useState(false);
  const [isToggled, toggleMenu] = useState(false);

  return (
    <div className='subNavbar'>
      <Typography variant='h4' gutterBottom style={{ marginLeft: 60 }} className='blue'>
        {title}
      </Typography>


      <div style={{ flex: 1 }} />

      <Icon onClick={() => toggleMenu(true)}  className="menu_icon" fontSize="large">menu</Icon>

      <Drawer anchor="left" open={ isToggled } onClose={() => toggleMenu(false)}>
        <List style={{width: '200px'}} dense>
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
      </Drawer>


      {/* <Badge badgeContent={7} color='secondary' style={{ position: 'fixed', right: 200 }}>
        <Icon>comments</Icon>
      </Badge>
      <Badge badgeContent={4} color='secondary' style={{ position: 'fixed', right: 150 }}>
        <Icon>mail</Icon>
      </Badge> */}

      {/* <div className='logButton' onClick={() => setLog(!Log)}>
        <p>{Log ? 'Login' : 'Logout'}</p>
      </div> */}
    </div>
  );
}
