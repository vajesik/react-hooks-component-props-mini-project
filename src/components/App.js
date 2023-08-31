import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js";
import About from "./About.js";
import ArticleList from "./ArticleList.js";

function App() {
  const { name, image, about, posts } = blogData;
  return (
    <div className="App">
      <Header name={name} />
      <About about={about} image={image} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
