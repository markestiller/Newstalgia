import { useEffect, useState } from "react";
import "./Articles.css";
import NewsArticle from "./newsArticle";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/news/home", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ input }),
    })
      .then((response) => response.json())
      .then((data) => {
        setArticles(
          data["articles"].map((article) => ({
            heading: article.title,
            author: article.author,
            description: article.description,
          }))
        );
      })
      .catch((error) => console.log(error));
  });

  // dummy data
  // const articles = [
  //   {
  //     heading: "headingone",
  //     author: "authorone",
  //     content: "contentone",
  //   },
  //   {
  //     heading: "headingone",
  //     author: "authorone",
  //     content: "contentone",
  //   },
  //   {
  //     heading: "headingone",
  //     author: "authorone",
  //     content: "contentone",
  //   },
  // ];

  return (
    <div className="articles">
      {articles.map((article, index) => (
        <li key={index}>
          <NewsArticle
            heading={article.heading}
            author={article.author}
            description={article.description}
          />
        </li>
      ))}
    </div>
  );
};

export default Articles;
