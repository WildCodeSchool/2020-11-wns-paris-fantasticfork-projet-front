import React, { useEffect, useState } from 'react';
import { useQuery, useMutation, useSubscription } from '@apollo/client';
import { GET_CHAT_ROOMS, NEW_MESSAGE, CHAT_FEED, READ_CHAT } from '../../../graphql/Chat';
import ChatRoomList from './ChatRoomList';
import ChatMessages from './ChatMessages';
import './Chat.scss';

export default function Chat() {
  const [chatRooms, setChatRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState([]);
  const { loading, data:rooms, refetch } = useQuery(GET_CHAT_ROOMS, { variables: { userId: global.userId } });
  const [sendMsg] = useMutation(NEW_MESSAGE);
  const [checkChatRoom] = useMutation(READ_CHAT);
  const { data:newMsg, loading: subLoading } = useSubscription(CHAT_FEED);

  useEffect(() => {
      refetch();
  }, [refetch, subLoading, newMsg]);
  
  useEffect(() => {
    if (rooms?.myChatRooms?.length) {
      const sortedChatRooms = Array.from(rooms.myChatRooms)?.sort((a, b) => b.updatedAt - a.updatedAt);
      setChatRooms(sortedChatRooms);
      setSelectedRoom(sortedChatRooms[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rooms?.myChatRooms, loading]);

  const changeSelectedRoom = async(chatroom) => {
    await setSelectedRoom(chatroom)
    console.log(chatroom)
    checkChatRoom({
      variables: { chatRoomId: chatroom._id },
    })
  }

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
    refetch()
    setSelectedRoom(newRoom)
  }

  return (
    <div className='Chat_container'>
      <ChatRoomList
        data={chatRooms}
        setSelectedRoom={(idx) => changeSelectedRoom(chatRooms[idx])}
        roomCreated={(newRoom)=>roomCreated(newRoom)}
        refetch={() => refetch()}
      />
      {chatRooms && selectedRoom && 
        <ChatMessages data={selectedRoom} submitMessage={submitMessage} />
      }
    </div>
  );
}
