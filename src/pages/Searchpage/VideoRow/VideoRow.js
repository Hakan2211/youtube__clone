import React from "react";
import classes from "./VideoRow.module.css";

const VideoRow = ({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) => {
  return (
    <div className={classes.videoRow}>
      <img src={image} alt="" />
      <div className={classes.videoRow__text}>
        <h3>{title}</h3>
        <p className={classes.videoRow__headline}>
          {channel} •{" "}
          <span className={classes.videoRow__subs}>
            {" "}
            <span className={classes.videoRow__subsNumber}>{subs}</span>{" "}
            Subscribers
          </span>
          • {views} Views • {timestamp}
        </p>
        <p className={classes.videoRow__description}>{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
