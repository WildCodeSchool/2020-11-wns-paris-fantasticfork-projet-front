import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHAT_ROOMS } from '../../../graphql/Chat';
import ChatRoomList from './ChatRoomList';
import ChatMessages from './ChatMessages';
import './Chat.scss';

export default function Chat() {
  const [chatRooms, setChatRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState([]);
  const { loading, data } = useQuery(GET_CHAT_ROOMS, { variables: { userId: global.userId } });

  useEffect(() => {
    if (data?.myChatRooms) {
      setChatRooms(data.myChatRooms);
      setSelectedRoom(data.myChatRooms[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, data?.myChatRooms, loading]);

  if (!chatRooms || !selectedRoom) {
    return null;
  }
  return (
    <div className='Chat_container'>
      <ChatRoomList data={chatRooms} setSelectedRoom={(idx) => setSelectedRoom(chatRooms[idx])} />
      <ChatMessages data={selectedRoom} />
    </div>
  );
}
