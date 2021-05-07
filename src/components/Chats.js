import React from "react";
import { chatHistory } from "./ChatHistory";
import Avatar from "@material-ui/core/Avatar";

import "../css/Chats.css";

export const Chats = () => {
  return (
    <React.Fragment>
      {chatHistory.map(function (index, iter) {
        return (
          <>
            <div className="chats">
              <Avatar
                className="chats__image"
                alt="name"
                src={chatHistory[iter].image}
              />
              <h3>{chatHistory[iter].name}</h3>
              <p>{chatHistory[iter].timestamp} </p>
            </div>
            <div className="chats__body">
              <p>{chatHistory[iter].message} </p>
            </div>
          </>
        );
      })}
    </React.Fragment>
  );
};
