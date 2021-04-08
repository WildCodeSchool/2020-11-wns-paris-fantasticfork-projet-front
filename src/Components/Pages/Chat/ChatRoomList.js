import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Paper, IconButton, InputBase, Icon, Fab } from '@material-ui/core';
import { GET_USERS, CREATE_CHAT } from '../../../graphql/Chat';
import ChatRoomBox from './ChatRoomBox';
import ModalNewChatRoom from './ModalNewChatRoom';

export default function ChatRoomList({ data, setSelectedRoom }) {
  const [searchInput, setSearchInput] = useState('');
  const [openNewRoomModal, setOpenNewRoomModal] = useState(false);
  const { data: allUsers } = useQuery(GET_USERS);
  const [createChat] = useMutation(CREATE_CHAT);

  const createChatRoom = (users) => {
    const participants = users.map((user) => ({ userId: user._id, name: `${user.firstname} ${user.lastname}` }));
    const me = allUsers?.users.find((user) => user._id === global.userId);

    participants.push({ userId: global.userId, name: `${me.firstname} ${me.lastname}` });

    createChat({ variables: { participants } });

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

      {data?.map((msg, index) => (
        <ChatRoomBox key={msg._id || index} {...msg} index={index} setSelectedRoom={(idx) => setSelectedRoom(idx)} />
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
