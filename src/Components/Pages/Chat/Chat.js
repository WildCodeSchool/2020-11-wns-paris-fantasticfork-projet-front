import React, { useEffect, useState } from 'react';
import { useQuery, useMutation, useSubscription } from '@apollo/client';
import { GET_CHAT_ROOMS, NEW_MESSAGE, CHAT_FEED } from '../../../graphql/Chat';
import ChatRoomList from './ChatRoomList';
import ChatMessages from './ChatMessages';
import './Chat.scss';

export default function Chat() {
  const [chatRooms, setChatRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState([]);
  const { loading, data, refetch } = useQuery(GET_CHAT_ROOMS, { variables: { userId: global.userId } });
  const [sendMsg] = useMutation(NEW_MESSAGE);
  const { data: subData, loading: subLoading, error } = useSubscription(CHAT_FEED);

  useEffect(() => {
    if (data?.myChatRooms?.length) {
      const sortedChatRooms = Array.from(data.myChatRooms)?.sort((a, b) => b.updatedAt - a.updatedAt);
      setChatRooms(sortedChatRooms);
      setSelectedRoom(sortedChatRooms[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, data?.myChatRooms, loading]);

  useEffect(() => {
    if (!subLoading && subData) {
      refetch();
    }
    if (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }, [error, refetch, subData, subLoading]);

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

  const roomCreated = (newRoom) => {
    setChatRooms([newRoom, ...chatRooms])
    setSelectedRoom(newRoom)
  }

  return (
    <div className='Chat_container'>
      <ChatRoomList
        data={chatRooms}
        setSelectedRoom={(idx) => setSelectedRoom(chatRooms[idx])}
        roomCreated={(newRoom)=>roomCreated(newRoom)}
        refetch={() => refetch()}
      />
      {chatRooms && selectedRoom && 
        <ChatMessages data={selectedRoom} submitMessage={submitMessage} />
      }
    </div>
  );
}
