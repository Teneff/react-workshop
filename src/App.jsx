import React from "react";
import "./blog.css";
import "bootstrap/scss/bootstrap.scss";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import FullFeatured from "./components/Post/FullFeatured";

import { posts, featuredIDs, authors, social } from "./config";
import Featured from "./components/Post/Featured";
import Post from "./components/Post/Post";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const [fullFeatured, ...featured] = posts
  .filter(post => featuredIDs.includes(post.id))
  .slice(0, 3)
  .map(post => {
    return {
      ...post,
      author: authors.find(({ id }) => id === post.author)
    };
  });

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Navigation categories={
          posts.reduce((acc, { category }) => acc.includes(category) ? acc : acc.concat(category), [])
        } />
        <FullFeatured {...fullFeatured} />

        <div className="row mb-2">
          {featured.map(post => {
            const author = authors.find(({ id }) => id === post.author);
            return <Featured key={post.id} {...post} author={author} />;
          })}
        </div>
      </div>

      <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            <h3 className="pb-4 mb-4 font-italic border-bottom">
              From the Firehose
            </h3>

            {posts
              .filter(post => !featuredIDs.includes(post.id))
              .slice(0, 4)
              .map(post => {
                const author = authors.find(({ id }) => id === post.author);
                return <Post key={post.id} {...post} author={author} />;
              })}

            <Pagination />
          </div>

          <Sidebar posts={posts} social={social} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
