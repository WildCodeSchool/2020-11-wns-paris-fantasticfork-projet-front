import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_CHAT_ROOMS, NEW_MESSAGE } from '../../../graphql/Chat';
import ChatRoomList from './ChatRoomList';
import ChatMessages from './ChatMessages';
import './Chat.scss';

export default function Chat() {
  const [chatRooms, setChatRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState([]);
  const { loading, data } = useQuery(GET_CHAT_ROOMS, { variables: { userId: global.userId } });
  const [sendMsg] = useMutation(NEW_MESSAGE);

  useEffect(() => {
    if (data?.myChatRooms) {
      setChatRooms(data.myChatRooms);
      setSelectedRoom(data.myChatRooms[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, data?.myChatRooms, loading]);

  const submitMessage = (variables) => {
    sendMsg({
      variables,
      awaitRefetchQueries: true,
      refetchQueries: [
        {
          query: GET_CHAT_ROOMS,
          variables: { userId: global.userId },
        },
      ],
    });
  };

  if (!chatRooms || !selectedRoom) {
    return null;
  }
  return (
    <div className='Chat_container'>
      <ChatRoomList data={chatRooms} setSelectedRoom={(idx) => setSelectedRoom(chatRooms[idx])} />
      <ChatMessages data={selectedRoom} submitMessage={submitMessage} />
    </div>
  );
}
