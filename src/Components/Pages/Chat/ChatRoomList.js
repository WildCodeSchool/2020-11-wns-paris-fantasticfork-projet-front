import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Paper, IconButton, InputBase, Icon, Fab } from '@material-ui/core';
import { GET_USERS_TO_CREATE_CHAT } from '../../../graphql/Chat';
import ChatRoomBox from './ChatRoomBox';
import ModalNewChatRoom from './ModalNewChatRoom';

export default function ChatRoomList({ data, setSelectedRoom }) {
  const [searchInput, setSearchInput] = useState('');
  const [openNewRoomModal, setOpenNewRoomModal] = useState(false);
  const { data: allUsers } = useQuery(GET_USERS_TO_CREATE_CHAT);

  const createChatRoom = (users) => {
    console.log(users);
    setOpenNewRoomModal(false);
  };

  const searchbox = () => (
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
        <IconButton className='txt-grey' aria-label='search' onClick={() => setSearchInput('')}>
          <Icon>cancel</Icon>
        </IconButton>
      )}
    </Paper>
  );

  return (
    <div className='ChatRoomList'>
      <div className='ChatRoomList_header'>
        {searchbox()}
        <div className='flex1' />
        <Fab color='primary' onClick={() => setOpenNewRoomModal(true)}>
          <Icon>add</Icon>
        </Fab>
      </div>

      {data.map((msg, index) => (
        <ChatRoomBox key={msg.id} {...msg} index={index} setSelectedRoom={(idx) => setSelectedRoom(idx)} />
      ))}

      <ModalNewChatRoom
        open={openNewRoomModal}
        onClose={() => setOpenNewRoomModal(false)}
        onSelected={(users) => createChatRoom(users)}
        users={allUsers?.users}
      />
    </div>
  );
}
