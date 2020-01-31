import React from "react";

import Post from "../components/posts/Post";
import Pagination from "../components/Pagination";
import Sidebar from "../components/Sidebar";

const Home = ({ posts }) => {
  return (
    <main role="main" className="container">
      <div className="row">
        <div className="col-md-8 blog-main">
          <h3 className="pb-4 mb-4 font-italic border-bottom">
            From the Firehose
          </h3>

          {posts.map(post => <Post key={post.id} {...post} />)}

          <Pagination />
        </div>

        <Sidebar />
      </div>
    </main>
  );
};

export default Home;
