import React from "react";
import { markdown } from "markdown";

global.markdown = markdown;

const FullFeatured = ({ id, title, contents, author }) => {
  global.contents = contents;
  return (
    <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
      <div className="col-md-6 px-0">
        <h1 className="display-4 font-italic">{title}</h1>
        <h3>by {author.name}</h3>
      </div>
      <p className="lead mb-0">
        <a href={`/post/${id}`} className="text-white font-weight-bold">
          Continue reading...
        </a>
      </p>
    </div>
  );
};

export default FullFeatured;
