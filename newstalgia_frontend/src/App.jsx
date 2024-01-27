import { useState } from "react";
import "./App.css";
import NewsArticle from "./components/newsArticle";
import NewstalgiaTitle from "./components/NewstalgiaTitle";
import Articles from "./components/Articles";

function App() {
  return (
    <>
      <NewstalgiaTitle/> 
      <Articles/>
    </>

  );
}

export default App;
