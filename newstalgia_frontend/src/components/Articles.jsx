import { useEffect, useState } from "react";
import "./Articles.css";
import NewsArticle from "./newsArticle";

const Articles = () => {
//   const [articles, setArticles] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:3000/news/home", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       // body: JSON.stringify({ input }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setArticles(
//           data["articles"].map((article) => ({
//             heading: article.title,
//             author: article.author,
//             description: article.description,
//           }))
//         );
//       })
//       .catch((error) => console.log(error));
//   });

//   dummy data
  const articles = [
    {
      heading: "headingone",
      author: "ass",
      content: "contentoneasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkj asdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj sj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlksj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlksj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlksj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkkldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkj",
    },
    {
      heading: "headingtwo",
      author: "twp",
      content: "contentoneasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk lsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlksj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkj",
    },
    {
      heading: "four",
      author: "mark",
      content: "contentoneasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlksj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlksj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlksj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlksj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlk",
    },
    {
        heading: "dog eats bark this is testinte testt",
        author: "mark",
        content: "contentoneasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlksj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlksj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlksj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlksj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlk",
    },
    {
        heading: "bark eats dog",
        author: "mark",
        content: "contentoneasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlksj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlksj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlksj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlksj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlkjasdfdsfdsfa sdf asd asdf sdf  dalkdsj kldjkl jkl jj kljk ljk j jlj lkjklj lkj lkjl jlk",
      },
  ];

  return (
    <div className="articles">
      {articles.map((article, index) => (
        <li key={index}>
          <NewsArticle
            heading={article.heading}
            authors={article.author}
            content={article.content}
          />
        </li>
      ))}
    </div>
  );
};

export default Articles;
