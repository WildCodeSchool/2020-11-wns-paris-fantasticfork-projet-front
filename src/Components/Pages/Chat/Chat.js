import React from 'react';
import ChatRoomList from './ChatRoomList';
import ChatMessages from './ChatMessages';
import './Chat.scss';

export default function Chat() {
  return (
    <div className='Chat_container'>
      <ChatRoomList />
      <ChatMessages />
    </div>
  );
}
