import React, { useState } from 'react';
import ChatRoomList from './ChatRoomList';
import ChatMessages from './ChatMessages';
import './Chat.scss';

const dummyMessageRooms = [
  { id: 1, name: 'Dummy Name', lastMessage: 'This is a message', time: '11:50', unread: '2' },
  {
    id: 2,
    name: 'My Name',
    lastMessage: 'This is a message more than 50 letters. I am long very long',
    time: '18:10',
    unread: '1',
  },
  { id: 3, name: 'Your Name', lastMessage: 'This is a message33', time: '04/02', unread: null },
  { id: 4, name: 'Their Name', lastMessage: 'This is a message44', time: '04/01', unread: null },
  { id: 5, name: 'Our Name', lastMessage: 'This is a message55', time: '03/31', unread: null },
  { id: 6, name: 'No Name', lastMessage: 'This is a message66', time: '03/15', unread: null },
];

export default function Chat() {
  const [selectedRoom, setSelectedRoom] = useState(dummyMessageRooms[0]);
  return (
    <div className='Chat_container'>
      <ChatRoomList data={dummyMessageRooms} setSelectedRoom={(idx) => setSelectedRoom(dummyMessageRooms[idx])} />
      <ChatMessages data={selectedRoom} />
    </div>
  );
}
