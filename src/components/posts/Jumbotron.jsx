import React from "react";
import Markdown from "../Markdown";

const Jumbotron = ({ title, contents, onTitleClick }) => {
  return (
    <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
      <h1 className="display-4 font-italic">{title}</h1>
      <Markdown>
        {contents}
      </Markdown>
    </div>
  );
};

export default Jumbotron;
