import React, { useState } from 'react';
import { Paper, IconButton, InputBase, Icon } from '@material-ui/core';
import ChatRoomBox from './ChatRoomBox';

export default function ChatRoomList({ data, setSelectedRoom }) {
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
            onChange={(e) => setSearchInput(e.target.value)}
          />
          {searchInput && (
            <IconButton className='txt-grey' aria-label='search' onClick={() => setSearchInput(null)}>
              <Icon>cancel</Icon>
            </IconButton>
          )}
        </Paper>
      </div>

      {data.map((msg, index) => (
        <ChatRoomBox key={msg.id} {...msg} index={index} setSelectedRoom={(idx) => setSelectedRoom(idx)} />
      ))}
    </div>
  );
}
