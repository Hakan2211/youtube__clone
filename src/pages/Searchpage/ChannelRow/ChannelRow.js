import React from "react";
import classes from "./ChannelRow.module.css";

import { Avatar } from "@material-ui/core";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

const ChannelRow = ({
  image,
  channel,
  subs,
  verified,
  noOfVideos,
  description,
}) => {
  return (
    <div className={classes.channelRow}>
      <Avatar className={classes.channelRow__logo} alt={channel} src={image} />
      <div className={classes.channelRow__text}>
        <h4>
          {channel}
          {verified && <CheckCircleOutlineOutlinedIcon />}
        </h4>
        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
