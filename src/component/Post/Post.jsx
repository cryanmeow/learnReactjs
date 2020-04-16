import React from "react";

const Post = props => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="http://placeimg.com/200/250/tech" alt="" />
      </div>
      <div className="content">
        <p className="title" onClick={() => props.goDetail(props.data.id)}>
          {props.data.title}
        </p>
        <p className="desc">{props.data.body}</p>
        <button onClick={() => props.remove(props.data.id)}>Remove</button>
        <button onClick={() => props.update(props.data)}>Edit</button>
      </div>
    </div>
  );
};
export default Post;
