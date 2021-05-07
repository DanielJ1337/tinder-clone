import React from "react";
import { chatHistory } from "./ChatHistory";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

import "../css/Chats.css";

export const Chats = () => {
  return (
    <React.Fragment>
      {chatHistory.map(function (index, iter) {
        return (
          <>
            <Link to={`/chat/${chatHistory.name}`}>
              <div className="chats">
                <Avatar
                  className="chats__image"
                  alt="name"
                  src={chatHistory[iter].image}
                />
                <div className="chats__details">
                  <h3 className="chats__contact">{chatHistory[iter].name}</h3>
                  <p className="chats__message">{chatHistory[iter].message} </p>
                </div>
                <p className="chats__time">{chatHistory[iter].timestamp} </p>
              </div>
            </Link>
          </>
        );
      })}
    </React.Fragment>
  );
};
