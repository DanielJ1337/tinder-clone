import React from "react";
import "../css/Footer.css";

import ReplaySharpIcon from "@material-ui/icons/ReplaySharp";
import CloseSharpIcon from "@material-ui/icons/CloseSharp";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

import IconButton from "@material-ui/core/IconButton";

function Footer() {
  return (
    <div className="footer">
      <IconButton>
        <ReplaySharpIcon className="footer__repeat" />
      </IconButton>
      <IconButton>
        <CloseSharpIcon className="close" />
      </IconButton>
      <IconButton>
        <StarRateIcon className="footer__star" />
      </IconButton>
      <IconButton>
        <FavoriteIcon className="footer__heart" />
      </IconButton>
      <IconButton>
        <FlashOnIcon className="footer__lightning" />
      </IconButton>
    </div>
  );
}

export default Footer;
