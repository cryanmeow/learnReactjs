import React from "react";
import "./YoutubeComp.css";
const YoutubeComp = props => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img
          src="https://pbs.twimg.com/media/ENQUY6VVAAMRMQF?format=jpg&name=large"
          alt=""
        />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};
export default YoutubeComp;
