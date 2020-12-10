import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const ChatHome = () => {
  const [roomName, setRoomName] = React.useState("");

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <div className="home-container">
      <input
        type="text"
        placeholder="Room"
        value={roomName}
        onChange={handleRoomNameChange}
        className="text-input-field"
      />
      <Link to={`room/${roomName}`} className="enter-room-button">
        Join room
      </Link>
    </div>
  );
};

export default ChatHome;
