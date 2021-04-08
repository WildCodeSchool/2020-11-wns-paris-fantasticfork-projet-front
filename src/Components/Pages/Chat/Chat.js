import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHAT_ROOMS } from '../../../graphql/Chat';
import ChatRoomList from './ChatRoomList';
import ChatMessages from './ChatMessages';
import './Chat.scss';

const dummyMessageRooms = [
  { _id: 1, name: 'Dummy Name', lastMessage: 'This is a message', time: '11:50', unread: '2' },
  {
    _id: 2,
    name: 'My Name',
    lastMessage: 'This is a message more than 50 letters. I am long very long',
    time: '18:10',
    unread: '1',
  },
  { _id: 3, name: 'Your Name', lastMessage: 'This is a message33', time: '04/02', unread: null },
  { _id: 4, name: 'Their Name', lastMessage: 'This is a message44', time: '04/01', unread: null },
  { _id: 5, name: 'Our Name', lastMessage: 'This is a message55', time: '03/31', unread: null },
  { _id: 6, name: 'No Name', lastMessage: 'This is a message66', time: '03/15', unread: null },
];

export default function Chat() {
  const [chatRooms, setChatRooms] = useState(dummyMessageRooms);
  const [selectedRoom, setSelectedRoom] = useState(chatRooms[0]);
  const { loading, data } = useQuery(GET_CHAT_ROOMS, { variables: { userId: global.userId } });

  useEffect(() => {
    if (data?.myChatRooms) {
      setChatRooms(data.myChatRooms);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, data?.myChatRooms, loading]);

  if (!chatRooms || !selectedRoom) {
    return null;
  }
  return (
    <div className='Chat_container'>
      <ChatRoomList data={chatRooms} setSelectedRoom={(idx) => setSelectedRoom(dummyMessageRooms[idx])} />
      <ChatMessages data={selectedRoom} />
    </div>
  );
}
