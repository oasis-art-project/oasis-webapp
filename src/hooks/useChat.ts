import { useEffect, useRef, useState } from 'react';
import socketIOClient from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:5000/';

const useChat = (roomId: any, userId: any) => {
  const [messages, setMessages]: [any, any] = useState([]);
  const socketRef: any = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId: roomId, userId: userId },
    });

    socketRef.current.on('send_message', (message: any) => {
      console.log('<<<<<<<<<<<<<<<');
      console.log('RECEIVING MESSAGE');
      console.log(message.senderId);
      console.log(message);

      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages: any) => [...messages, incomingMessage]);
    });

    socketRef.current.on('send_notification', (message: any) => {
      console.log('<<<<<<<<<<<<<<<');
      console.log('RECEIVING NOTIFICATION');
      console.log(message);
      if (message.to === userId) {
        alert('Waiting messages on chat room ' + message.room);
      }
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId, userId]);

  const sendMessage = (messageBody: any, roomId: any, userId: any) => {
    console.log('>>>>>>>>>>>>>>>>>>>');
    console.log('SENDING MESSAGE');
    console.log(messageBody);
    console.log(socketRef.current);
    console.log(socketRef.current.id);
    socketRef.current.emit('send_message', {
      roomId: roomId,
      userId: userId,
      body: messageBody,
      senderId: socketRef.current.id,
    });
  };

  return { messages, sendMessage };
};

export default useChat;
