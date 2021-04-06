import React, { useState } from 'react';
import ChatRoomList from './ChatRoomList';
import ChatMessages from './ChatMessages';
import './Chat.scss';

const dummyMessages = [
  { name: 'Dummy Name', message: 'This is a message', time: '11:50', unread: '2' },
  {
    name: 'My Name',
    message: 'This is a message more than 50 letters. I am long very long',
    time: '18:10',
    unread: '1',
  },
  { name: 'Your Name', message: 'This is a message33', time: '04/02', unread: null },
  { name: 'Their Name', message: 'This is a message44', time: '04/01', unread: null },
  { name: 'Our Name', message: 'This is a message55', time: '03/31', unread: null },
  { name: 'No Name', message: 'This is a message66', time: '03/15', unread: null },
];

export default function Chat() {
  const [selectedRoom, setSelectedRoom] = useState(dummyMessages[0]);
  return (
    <div className='Chat_container'>
      <ChatRoomList data={dummyMessages} setSelectedRoom={(idx) => setSelectedRoom(dummyMessages[idx])} />
      <ChatMessages data={selectedRoom} />
    </div>
  );
}
