import React from "react";
import { Link } from "react-router-dom";

import { posts } from '../config';

const Navigation = () => {
  return (
    <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex justify-content-between">
        <Link to="/category/World" className="p-2 text-muted">World</Link>
        <Link className="p-2 text-muted" to="/category/U.S.">
          U.S.
        </Link>
        <a className="p-2 text-muted" href="/">
          Technology
        </a>
        <a className="p-2 text-muted" href="/">
          Design
        </a>
        <a className="p-2 text-muted" href="/">
          Culture
        </a>
        <a className="p-2 text-muted" href="/">
          Business
        </a>
        <a className="p-2 text-muted" href="/">
          Politics
        </a>
        <a className="p-2 text-muted" href="/">
          Opinion
        </a>
        <a className="p-2 text-muted" href="/">
          Science
        </a>
        <a className="p-2 text-muted" href="/">
          Health
        </a>
        <a className="p-2 text-muted" href="/">
          Style
        </a>
        <a className="p-2 text-muted" href="/">
          Travel
        </a>
      </nav>
    </div>
  );
};

export default Navigation;
