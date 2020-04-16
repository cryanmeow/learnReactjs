import React, { Component, Fragment } from "react";
import Post from "../../../component/Post/Post";
import "./BlogPost.css";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userid: 1
    },
    isUpdate: false
  };
  getPostAPI = () => {
    axios.get("http://localhost:3004/posts?_sort=id&_order=desc").then(res => {
      console.log(res.data);
      this.setState({
        post: res.data
      });
    });
  };

  postDataToAPI = () => {
    axios
      .post("http://localhost:3004/posts", this.state.formBlogPost)
      .then(res => {
        console.log(res);
        this.getPostAPI();
      });
    this.setState({
      formBlogPost: {
        id: 1,
        title: "",
        body: "",
        userid: 1
      }
    });
  };

  putDataToAPI = () => {
    axios
      .put(
        `http://localhost:3004/posts/${this.state.formBlogPost.id}`,
        this.state.formBlogPost
      )
      .then(res => {
        console.log(res);
        this.getPostAPI();
        this.setState({
          isUpdate: false,
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userid: 1
          }
        });
      });
  };
  handleRemove = data => {
    console.log(data);
    axios.delete(`http://localhost:3004/posts/${data}`).then(res => {
      this.getPostAPI();
    });
  };
  handleUpdate = data => {
    this.setState({
      formBlogPost: data,
      isUpdate: true
    });
  };
  handleFormChange = event => {
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timeStamp = new Date().getTime();
    if (!this.state.isUpdate) {
      formBlogPostNew["id"] = timeStamp;
    }
    formBlogPostNew[event.target.name] = event.target.value;
    this.setState({
      formBlogPost: formBlogPostNew
    });
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
  };

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then(response => response.json())
    //   .then(json => {
    //     this.setState({
    //       post: json
    //     });
    //   });
    this.getPostAPI();
  }

  handleDetail = id => {
    this.props.history.push(`/detail-post/${id}`);
  };

  render() {
    return (
      <Fragment>
        <p className="section-title">BlogPost</p>
        <div className="form-add-post">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Add Title"
              className="form-control"
              value={this.state.formBlogPost.title}
              onChange={this.handleFormChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Blog Content</label>
            <textarea
              name="body"
              id="body"
              cols="30"
              rows="10"
              placeholder="Content"
              className="form-control"
              value={this.state.formBlogPost.body}
              onChange={this.handleFormChange}
            ></textarea>
          </div>
          <button className="btn" onClick={this.handleSubmit}>
            Simpan
          </button>
        </div>
        {this.state.post.map(post => {
          return (
            <Post
              key={post.id}
              data={post}
              remove={this.handleRemove}
              update={this.handleUpdate}
              goDetail={this.handleDetail}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
