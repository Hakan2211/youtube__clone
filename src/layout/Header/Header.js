import React, { useState } from "react";
import classes from "./Header.module.css";

import { Link } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className={classes.header}>
      <div className={classes.header__left}>
        <MenuIcon />
        <Link to="/">
          <img
            className={classes.header__logo}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/512px-YouTube_Logo.svg.png"
            alt=""
          />
        </Link>
      </div>

      <div className={classes.header__input}>
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className={classes.header__inputButton} />
        </Link>
      </div>
      <div className={classes.header__icons}>
        <VideoCallIcon className={classes.header__icon} />
        <AppsIcon className={classes.header__icon} />
        <NotificationsIcon className={classes.header__icon} />
        <Avatar
          alt="Remy Sharp"
          src="https://cdn.pixabay.com/photo/2019/12/21/21/15/man-4711375_960_720.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
