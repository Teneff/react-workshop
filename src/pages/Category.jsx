import React, { useEffect, useState } from "react";

import { authors } from "../config.json";
import Post from "../components/posts/Post.jsx";
import api from "../api.js";

const Category = ({ match }) => {

  const [ posts, setPosts ] = useState([]);

  useEffect(() => {

    api.get('/posts').then(response => {
      const postsWithAuthor = response.data.map(post => {
        return {
          ...post,
          author: authors.find(author => author.id === post.author)
        };
      });
      setPosts(postsWithAuthor);
    });
  }, [ match.params.category ]);

  

  return (
    <main role="main" className="container">
      <div className="row">
        <div className="blog-main">
          <h3 className="pb-4 mb-4 font-italic border-bottom">
            {match.params.category}
          </h3>

          {posts.filter(post => {
            return post.category === match.params.category
          }).map(post => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Category;
