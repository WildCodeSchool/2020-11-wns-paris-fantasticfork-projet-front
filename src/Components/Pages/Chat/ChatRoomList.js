import React, { useState } from 'react';
import { Paper, IconButton, InputBase, Icon } from '@material-ui/core';
import ChatRoomBox from './ChatRoomBox';

const dummyMessages = [
  { name: 'Dummy Name', message: 'This is message', time: '11:50', unread: '2' },
  { name: 'My Name', message: 'This is message22', time: '18:10', unread: '1' },
  { name: 'Your Name', message: 'This is message33', time: '04/02', unread: null },
  { name: 'Their Name', message: 'This is message44', time: '04/01', unread: null },
  { name: 'Our Name', message: 'This is message55', time: '03/31', unread: null },
  { name: 'No Name', message: 'This is message66', time: '03/15', unread: null },
];

export default function ChatRoomList() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className='ChatRoomList'>
      <div className='ChatRoomList_header'>
        <Paper className='ChatRoomList_searchbar' elevation={1}>
          <IconButton type='submit' aria-label='search'>
            <Icon>search</Icon>
          </IconButton>
          <InputBase
            className='ChatRoomList_searchbar_input'
            placeholder='Search'
            value={searchInput}
            inputProps={{ 'aria-label': 'recherche routes' }}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          {searchInput && (
            <IconButton className='txt-grey' aria-label='search' onClick={() => setSearchInput(null)}>
              <Icon>cancel</Icon>
            </IconButton>
          )}
        </Paper>
      </div>

      {dummyMessages.map((msg) => (
        <ChatRoomBox {...msg} />
      ))}
    </div>
  );
}
