import React from "react";

const Pagination = () => {
  return (
    <nav className="blog-pagination">
      <a className="btn btn-outline-primary" href="/">
        Older
      </a>
      <a
        className="btn btn-outline-secondary disabled"
        href="/"
        tabIndex="-1"
        aria-disabled="true"
      >
        Newer
      </a>
    </nav>
  );
};

export default Pagination;
