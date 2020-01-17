import React from "react";
import Markdown from "./Markdown";
import * as moment from 'moment';

const Post = ({ title, date, author, contents }) => {
  return (
    <div className="blog-post">
      <h2 className="blog-post-title">{title}</h2>

      <p className="blog-post-meta" title={moment(date).fromNow()}>
        {moment(date).format("MMMM Do YYYY")} by <a href={`/author/${author.id}`}>{author.name}</a>
      </p>

      <Markdown>
        {contents}
      </Markdown>
    </div>
  );
};

export default Post;
