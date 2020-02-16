import React, { useState } from "react";
import Markdown from "../Markdown";

const Edit = () => {
  const [text, setText] = useState("");
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <textarea
            onChange={e => {
              setText(e.target.value);
            }}
            value={text}
          ></textarea>
        </div>
        <div className="col-md-6">
          <Markdown>
            {text}
          </Markdown>
        </div>
      </div>
    </div>
  );
};

export default Edit;
