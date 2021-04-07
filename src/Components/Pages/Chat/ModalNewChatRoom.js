import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
} from '@material-ui/core';
import sampleImage from '../../../images/cat.jpg';

export default function ModalNewChatRoom({ open, onClose, onSelected, users }) {
  const [selectedUser, setSelectedUser] = useState([]);

  const handleToggle = (user) => {
    const currentIndex = selectedUser.indexOf(user);
    const _selectedUser = [...selectedUser];

    if (currentIndex === -1) {
      _selectedUser.push(user);
    } else {
      _selectedUser.splice(currentIndex, 1);
    }

    setSelectedUser(_selectedUser);
  };

  return (
    <Dialog className='ModalNewChatRoom' maxWidth='md' scroll='body' open={open} onClose={() => onClose()}>
      <DialogTitle>Create new chat with</DialogTitle>
      <DialogContent dividers className='ModalNewChatRoom_body'>
        <List dense>
          {users &&
            users.map((user) => (
              <ListItem key={user._id} button>
                <ListItemAvatar>
                  <Avatar alt={user.lastname} src={sampleImage} />
                </ListItemAvatar>
                <ListItemText id={user._id} primary={`${user.firstname} ${user.lastname}`} />
                <ListItemSecondaryAction>
                  <Checkbox
                    edge='end'
                    onChange={() => handleToggle(user)}
                    checked={selectedUser.indexOf(user) !== -1}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => onClose()} color='primary'>
          Cancel
        </Button>
        <Button onClick={() => onSelected(selectedUser)} color='primary'>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
