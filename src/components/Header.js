import React from "react";
import "../css/header.css";
import PersonIcon from "@material-ui/icons/Person";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { Link, useHistory } from "react-router-dom";

const Header = ({ backButton }) => {
  const history = useHistory();
  return (
    <div className="header__container">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header__icon"
          src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg"
          alt="tinder-icon"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <QuestionAnswerIcon fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};
export default Header;
