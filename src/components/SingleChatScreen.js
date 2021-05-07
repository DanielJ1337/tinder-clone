import { Avatar } from "@material-ui/core";
import React, { useState } from "react";

import "../css/SingleChatScreen.css";

export const SingleChatScreen = () => {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      name: "BlackWidow",
      image:
        "https://www.rollingstone.de/wp-content/uploads/2020/03/05/09/black-widow-scarlett-johansson.jpg",
      message: "Need assistance asap!\u{1F4A3} ",
    },
    {
      name: "BlackWidow",
      image:
        "https://www.rollingstone.de/wp-content/uploads/2020/03/05/09/black-widow-scarlett-johansson.jpg",
      message: "Hello? U there?",
    },
    {
      name: "BlackWidow",
      image:
        "https://www.rollingstone.de/wp-content/uploads/2020/03/05/09/black-widow-scarlett-johansson.jpg",
      message: "Hey!",
    },
    {
      message: "I'm here - what do you need?",
    },
  ]);

  const handleClick = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="singleChatScreen">
      <p className="singleChatScreen__heading">
        YOU MATCHED WITH {messages[0].name} ON 05/07/21
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="singleChatScreen__container">
            <Avatar
              className="singleChatScreen__avatar"
              alt={message.name}
              src={message.image}
            />
            <p className="singleChatScreen__body">{message.message}</p>
          </div>
        ) : (
          <p className="singleChatScreen__userBody">{message.message}</p>
        )
      )}

      <form className="singleChatScreen__inputForm">
        <input
          className="singleChatScreen__inputField"
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="singleChatScreen__inputButton"
          onClick={handleClick}
        >
          SEND
        </button>
      </form>
    </div>
  );
};
