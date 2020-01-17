import React from "react";
import About from "./About";
import Archives from "./Archives";
import Social from "./Social";

const Sidebar = ({ posts, social}) => {
  return (
    <aside className="col-md-4 blog-sidebar">
      <About />

      <Archives posts={posts} />

      <Social links={social} />
    </aside>
  );
};

export default Sidebar;
