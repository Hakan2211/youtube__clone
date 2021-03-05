import React from "react";
import classes from "./Searchpage.module.css";

import ChannelRow from "./ChannelRow/ChannelRow";
import VideoRow from "./VideoRow/VideoRow";

import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

const Searchpage = () => {
  return (
    <div className={classes.searchPage}>
      <div className={classes.searchPage__filter}>
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="data:image/jpeg;base64,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"
        channel="Elon Musk"
        verified
        subs="800K"
        noOfVideos="435"
        description="You can find awesome inspiration about tech."
      />
      <hr />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a Free one hour traning in html css and js and react. Then join our bootcamp."
        timestamp="59 seconds ago"
        channel="Smarter than yesterday"
        title="Learn to make websites and apps"
        image="https://cdn.pixabay.com/photo/2017/08/06/00/50/table-2587226_960_720.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a Free one hour traning in html css and js and react. Then join our bootcamp."
        timestamp="59 seconds ago"
        channel="Smarter than yesterday"
        title="Learn to make websites and apps"
        image="https://cdn.pixabay.com/photo/2017/08/06/00/50/table-2587226_960_720.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a Free one hour traning in html css and js and react. Then join our bootcamp."
        timestamp="59 seconds ago"
        channel="Smarter than yesterday"
        title="Learn to make websites and apps"
        image="https://cdn.pixabay.com/photo/2017/08/06/00/50/table-2587226_960_720.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a Free one hour traning in html css and js and react. Then join our bootcamp."
        timestamp="59 seconds ago"
        channel="Smarter than yesterday"
        title="Learn to make websites and apps"
        image="https://cdn.pixabay.com/photo/2017/08/06/00/50/table-2587226_960_720.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a Free one hour traning in html css and js and react. Then join our bootcamp."
        timestamp="59 seconds ago"
        channel="Smarter than yesterday"
        title="Learn to make websites and apps"
        image="https://cdn.pixabay.com/photo/2017/08/06/00/50/table-2587226_960_720.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a Free one hour traning in html css and js and react. Then join our bootcamp."
        timestamp="59 seconds ago"
        channel="Smarter than yesterday"
        title="Learn to make websites and apps"
        image="https://cdn.pixabay.com/photo/2017/08/06/00/50/table-2587226_960_720.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a Free one hour traning in html css and js and react. Then join our bootcamp."
        timestamp="59 seconds ago"
        channel="Smarter than yesterday"
        title="Learn to make websites and apps"
        image="https://cdn.pixabay.com/photo/2017/08/06/00/50/table-2587226_960_720.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a Free one hour traning in html css and js and react. Then join our bootcamp."
        timestamp="59 seconds ago"
        channel="Smarter than yesterday"
        title="Learn to make websites and apps"
        image="https://cdn.pixabay.com/photo/2017/08/06/00/50/table-2587226_960_720.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a Free one hour traning in html css and js and react. Then join our bootcamp."
        timestamp="59 seconds ago"
        channel="Smarter than yesterday"
        title="Learn to make websites and apps"
        image="https://cdn.pixabay.com/photo/2017/08/06/00/50/table-2587226_960_720.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a Free one hour traning in html css and js and react. Then join our bootcamp."
        timestamp="59 seconds ago"
        channel="Smarter than yesterday"
        title="Learn to make websites and apps"
        image="https://cdn.pixabay.com/photo/2017/08/06/00/50/table-2587226_960_720.jpg"
      />
    </div>
  );
};

export default Searchpage;
