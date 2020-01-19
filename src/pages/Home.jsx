import React from "react";

import Post from "../components/posts/Post";
import Pagination from "../components/Pagination";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <main role="main" className="container">
      <div className="row">
        <div className="col-md-8 blog-main">
          <h3 className="pb-4 mb-4 font-italic border-bottom">
            From the Firehose
          </h3>

          <Post />
          <Post />
          <Post />

          <Pagination />
        </div>

        <Sidebar />
      </div>
    </main>
  );
};

export default Home;
