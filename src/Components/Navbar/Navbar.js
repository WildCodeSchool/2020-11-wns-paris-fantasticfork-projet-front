import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Icon, Avatar, Typography } from '@material-ui/core';
import sampleImage from '../../images/cat.jpg';

import './Navbar.css';

export default function Navbar({ menu }) {
  return (
    <div className='Navbar'>
      <div className='flex_column' style={{ height: 230, justifyContent: 'center', alignItems: 'center', marginTop: -20 }}>
        <Avatar src={sampleImage} style={{ width: 80, height: 80, marginBottom: 10 }} />
        <Typography variant='h6' gutterBottom className='blue'>
          John Stud Edit 
          <Icon>create</Icon>
        </Typography>
      </div>
      <List disablePadding dense>
        {menu.map((elem, idx) => (
          <ListItem key={idx} button style={{ height: 50, marginBottom: 5 }} component={Link} to={elem.link}>
            <ListItemIcon style={{ marginLeft: 20 }}>
              <Icon fontSize='default'>{elem.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={elem.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
