import React from "react";

const Jumbotron = ({ title, contents, onTitleClick }) => {
  return (
    <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
      <h1 className="display-4 font-italic">{title}</h1>
      {contents}
    </div>
  );
};

export default Jumbotron;
