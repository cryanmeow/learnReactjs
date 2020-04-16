import React, { Component } from "react";
import YoutubeComp from "../../../component/YoutubeComponent/YoutubeComp";

class YoutubeComponent extends Component {
  render() {
    return (
      <div>
        <h1>DAE SIK</h1>
        <hr />
        <YoutubeComp
          time="7.21"
          title="Day6 Congratulation"
          desc="200x ditonton 2 hari yang lalu"
        />
        <YoutubeComp
          time="6.21"
          title="Day6 Better"
          desc="271x ditonton 3 hari yang lalu"
        />
        <YoutubeComp
          time="2.41"
          title="Day6 How to Love"
          desc="871x ditonton 2 hari yang lalu"
        />
        <YoutubeComp
          time="4.31"
          title="Day6 I Need Somebody"
          desc="767x ditonton 1 hari yang lalu"
        />
        <YoutubeComp />
      </div>
    );
  }
}
YoutubeComp.defaultProps = {
  time: "00.00",
  title: "....",
  desc: "xx ditonton x hari yang lalu"
};
export default YoutubeComponent;
