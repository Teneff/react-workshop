import React from "react";
import "./blog.css";
import "bootstrap/scss/bootstrap.scss";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Jumbotron from "./components/posts/Jumbotron";
import Featured from "./components/posts/Featured";

import Footer from "./components/Footer";
import Home from "./pages/Home";

import { posts, featuredIDs } from "./config";

function App() {
  const [jumbotron, ...featured] = posts.filter(post => featuredIDs.includes(post.id));
  console.log(jumbotron);
  return (
    <div className="App">
      <div className="container">
        <Header />

        <Navigation />

        <Jumbotron {...jumbotron} />

        <div className="row mb-2">
          <Featured />
          <Featured />
        </div>
      </div>

      <Home />

      <Footer />
    </div>
  );
}

export default App;
