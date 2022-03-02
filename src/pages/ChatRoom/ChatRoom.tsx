/*
Part of the OASIS ART PROJECT - https://github.com/orgs/oasis-art-project
Copyright (c) 2019-22 TEAM OASIS
License Artistic-2.0
*/

import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useChat from '../../hooks/useChat';
import Interweave from 'interweave';
import { UrlMatcher, HashtagMatcher } from 'interweave-autolink';

import './style.css';

const ChatRoom = () => {
  const { roomId }: { roomId: string } = useParams();
  const allowedUsers = roomId.split('-');
  const auth: any = useAuth();
  const { messages, sendMessage } = useChat(roomId, auth.user.identity);
  const [newMessage, setNewMessage] = React.useState('');

  if (allowedUsers.indexOf(auth.user.identity.toString()) === -1) {
    return (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    );
  }

  const handleNewMessageChange = (event: any) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (auth.user) {
      const userId = auth.user.identity;
      // The full name of the user sending the message is included
      // in the user claims of the auth token
      const userName = auth.user.user_claims.fullName;
      const text = newMessage.trim();
      if (text) {
        sendMessage(text, roomId, userId, userName);
      }
      setNewMessage('');
    } else {
      alert('Please login first to send messages to other users');
      setNewMessage('');
    }
  };

  // Get first message not owned by the current user, this should be the other person in the chat...
  const result = messages.find(function (message: any) {
    return !message.ownedByCurrentUser;
  });

  return (
    <div className="chat-room-container">
      <h1 className="room-name">Chatting with {result ? result.userName : 'nobody'}</h1>
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message: any, i: number) => (
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? 'my-message' : 'received-message'
              }`}
            >
              <Interweave
                content={message.body}
                newWindow={true}
                matchers={[new UrlMatcher('url'), new HashtagMatcher('hashtag')]}
              />
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
