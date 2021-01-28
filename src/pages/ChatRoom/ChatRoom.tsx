import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useChat from '../../hooks/useChat';

import './style.css';

const ChatRoom = () => {
  const { roomId }: { roomId: string} = useParams();
  const auth: any = useAuth();
  const { messages, sendMessage } = useChat(roomId, auth.user.identity);
  const [newMessage, setNewMessage] = React.useState('');

  const handleNewMessageChange = (event: any) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (auth.user) {
      const userId = auth.user.identity;
      sendMessage(newMessage, roomId, userId);
      setNewMessage('');
    } else {
      alert('Please login first to send messages to other users');
      setNewMessage('');
    }
  };

  return (
    <div className="chat-room-container">
      <h1 className="room-name">Room: {roomId}</h1>
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message: any, i: number) => (
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? 'my-message' : 'received-message'
              }`}
            >
              {message.body}
            </li>
          ))}
        </ol>
      </div>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write message..."
        className="new-message-input-field"
      />
      <button onClick={handleSendMessage} className="send-message-button">
        Send
      </button>
    </div>
  );
};

export default ChatRoom;
