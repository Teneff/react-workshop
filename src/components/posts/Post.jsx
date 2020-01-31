import React from "react";
import moment from "moment";
import Markdown from "../Markdown";

const Post = ({ title, date, author, contents }) => {
  return (
    <div className="blog-post">
      <h2 className="blog-post-title">{title}</h2>
      <p className="blog-post-meta" title={moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")}>
        {moment(date).fromNow()} by <a href="/">{author.name}</a>
      </p>

      <Markdown>
        {contents}
      </Markdown>
    </div>
  );
};

export default Post;
