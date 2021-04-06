import React from 'react';
import ChatRoomList from './ChatRoomList';
import ChatRoom from './ChatRoom';
import './Chat.scss';

export default function Chat() {
  return (
    <div className='Chat_container'>
      <ChatRoomList />
      <ChatRoom />
    </div>
  );
}
