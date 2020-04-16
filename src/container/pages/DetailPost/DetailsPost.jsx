import React, { Component } from "react";
import Axios from "axios";
import "./DetailsPost.css";

class DetailPost extends Component {
  state = {
    post: {
      title: "",
      body: ""
    }
  };
  componentDidMount() {
    let id = this.props.match.params.id;
    Axios.get(`http://localhost:3004/posts/${id}`).then(res => {
      console.log("res", res);
      let post = res.data;
      this.setState({
        post: {
          title: post.title,
          body: post.body
        }
      });
    });
  }
  render() {
    return (
      <div className="cardd">
        <h4>Title</h4>
        <p className="detail-title">{this.state.post.title}</p>
        <h4>Description</h4>
        <p className="detail-desc">{this.state.post.body}</p>
      </div>
    );
  }
}

export default DetailPost;
