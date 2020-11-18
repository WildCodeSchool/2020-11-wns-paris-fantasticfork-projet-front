import { List, ListItem, ListItemIcon, ListItemText, Icon, Avatar, Typography, Badge } from '@material-ui/core';
import sampleImage from '../../images/cat.jpg';

import './Navbar.css';

export default function Navbar({ menu }) {
  return (
    <div className='Navbar'>
      <div className='flex_column' style={{ height: 230, justifyContent: 'center', alignItems: 'center', marginTop: -20 }}>
        <Avatar src={sampleImage} style={{ width: 80, height: 80, marginBottom: 10 }} />
        <Typography variant='h6' gutterBottom className='blue'>
          John Stud
        </Typography>
      </div>
      <List disablePadding dense>
        {menu.map((elem) => (
          <ListItem button style={{ height: 50, marginBottom: 5 }}>
            <ListItemIcon style={{ marginLeft: 20 }}>
              <Icon fontSize='medium'>{elem.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={elem.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
