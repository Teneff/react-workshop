import React from "react";
import "./blog.css";
import "bootstrap/scss/bootstrap.scss";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Jumbotron from "./components/posts/Jumbotron";
import Featured from "./components/posts/Featured";

import Footer from "./components/Footer";
import Home from "./pages/Home";

import { posts, featuredIDs, authors } from "./config";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Category from "./pages/Category";

const postsWithAuthor = posts.map(post => {
  return {
    ...post,
    author: authors.find(author => author.id === post.author)
  };
});

function App() {
  const [jumbotron, ...featured] = postsWithAuthor.filter(post =>
    featuredIDs.includes(post.id)
  );
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Header />

          <Navigation />

          <Switch>
            <Route path="/" exact>
              <Jumbotron {...jumbotron} />
              <div className="row mb-2">
                {featured.map(post => (
                  <Featured key={post.id} {...post} />
                ))}
              </div>
            </Route>
            <Route path="*" />
          </Switch>
        </div>

        <Switch>
          <Route path="/" exact>
            <Home posts={postsWithAuthor} />
          </Route>
          <Route path="/author/:authorId">
            <div>author by id</div>
          </Route>
          <Route path="/category/:category" component={Category} />
          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
