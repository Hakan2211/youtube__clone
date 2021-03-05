import React from "react";

import classes from "./VideoCard.module.css";

import Avatar from "@material-ui/core/Avatar";

const VideoCard = ({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) => {
  return (
    <div className={classes.videoCard}>
      <img className={classes.videoCard__thumbnail} src={image} alt="" />
      <div className={classes.videoCard__info}>
        <Avatar
          className={classes.videoCard__avatar}
          alt={channel}
          src={channelImage}
        />
        <div className={classes.videoCard__text}>
          <h4>{title}</h4>
          <p>{channel}</p>
          {views} • {timestamp}
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
