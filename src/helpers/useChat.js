import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_CHAT_MESSAGE_EVENT = "send_message";
const SOCKET_SERVER_URL = "http://localhost:5000/";

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    });

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {

      console.log("<<<<<<<<<<<<<<<")
      console.log("RECEIVING MESSAGE")
      console.log(message.senderId)
      console.log(message)
  
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const sendMessage = (messageBody) => {
    console.log(">>>>>>>>>>>>>>>>>>>")
    console.log("SENDING MESSAGE")
    console.log(messageBody)
    console.log(socketRef.current)
    console.log(socketRef.current.id)
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
    });
  };

  return { messages, sendMessage };
};

export default useChat;
