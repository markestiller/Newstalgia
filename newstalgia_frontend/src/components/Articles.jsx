import { useEffect, useState } from "react";
import "./Articles.css";
import NewsArticle from "./newsArticle";

const Articles = () => {
  // const [articles, setArticles] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3000/news/home", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     // body: JSON.stringify({ input }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setArticles(
  //         data["articles"].map((article) => ({
  //           heading: article.title,
  //           author: article.author,
  //           description: article.description,
  //         }))
  //       );
  //     })
  //     .catch((error) => console.log(error));
  // });

  //   dummy data
  const articles = [
    {
      heading: "Lorem ipsum dolor, sit  consectetur adipisicing.",
      author: "Mark",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos illo voluptates consectetur itaque reprehenderit doloribus inventore aliquam dolor nesciunt delectus. Reiciendis at, autem sint beatae tenetur consequuntur a nulla repellendus, dignissimos in quibusdam, eius velit magnam. Hic voluptatibus vel suscipit aperiam placeat natus voluptate possimus consequuntur magni maxime totam ipsam corrupti laudantium architecto veniam odit, consectetur ut nobis sit voluptates ducimus quo molestias. Vel unde magnam nobis eius repellendus! Omnis nam molestiae voluptatibus qui, architecto dignissimos repellat tempore delectus consequatur atque sed veniam aperiam veritatis repudiandae cupiditate minus sint temporibus modi sunt explicabo eaque non odio necessitatibus cumque. Voluptatem repudiandae officiis ducimus asperiores aliquam inventore tenetur quas labore, distinctio et nemo ratione, odio tempora, assumenda ipsa quos quaerat nobis illo. Nemo saepe tempora ipsa, culpa similique quos temporibus expedita, architecto id, nobis aliquid atque voluptates praesentium maiores beatae natus quod corrupti tenetur eum recusandae eaque. Impedit reprehenderit, numquam distinctio amet dolore harum molestiae deleniti.",
    },
    {
      heading: "Lorem ipsum dolor, sit  consectetur adipisicing.",
      author: "Jessie",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint debitis, aperiam dolor accusamus et odit. Impedit assumenda, nisi molestias cupiditate consectetur hic tempora fugiat qui quod unde quo, quas deserunt. Harum delectus officiis, dolore alias eaque ratione veniam nemo illum quam! Aliquam alias magni deserunt laborum quasi, esse nostrum perspiciatis eum dolorum, earum impedit, id sed facere tempore odio dolore consequatur quidem! Assumenda perspiciatis blanditiis culpa provident incidunt labore reprehenderit explicabo architecto eum ullam voluptatum delectus quae, qui veritatis, vitae quam in dolores at mollitia dolore officia sint? Dicta necessitatibus eum error quam porro! Vitae, ipsam eos. Veniam non, maiores earum, excepturi accusantium enim iste eaque facilis nisi corrupti reiciendis blanditiis harum atque? Perferendis, repudiandae ipsa? Ea numquam quidem non blanditiis, reprehenderit laborum quibusdam facere incidunt?",
    },
    {
      heading: "Lorem ipsum dolor, sit  consectetur adipisicing.",
      author: "Lukas",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nesciunt similique voluptatibus non eum, dolorum deserunt iusto rerum quisquam, tempore, odio obcaecati praesentium. Est, laboriosam nisi quae odio autem aperiam ducimus, magnam architecto non, cum exercitationem. Recusandae debitis dolorum, delectus quidem sed quae architecto deleniti illo fugit laudantium aliquam labore commodi vel, in perspiciatis autem odit saepe nam doloremque maxime? Debitis consequatur ad repellat harum nisi sequi voluptate porro animi ipsam, enim minima fuga sint! Ab, nesciunt laborum ipsum veniam quae, animi voluptates repellat consequuntur saepe nemo et cupiditate, quaerat dicta harum obcaecati earum rerum illum aperiam! Quam dolore nemo est! Error cum asperiores, optio blanditiis amet dolore non laborum similique, saepe voluptate at quidem perferendis quia possimus, quasi animi ducimus quaerat facere ullam fugit facilis? Autem labore quia vitae eligendi maxime neque?",
    },
    {
      heading: "Lorem ipsum dolor, sit  consectetur adipisicing.",
      author: "Shy",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus assumenda culpa et temporibus, deleniti quod repudiandae inventore explicabo? Ratione quaerat repellendus illo dolores dolore adipisci, harum facere veniam! Nesciunt, sunt quos, totam neque dolores tempore magnam explicabo incidunt nemo adipisci aperiam similique dignissimos numquam odit facere ipsa magni nisi fugit, fuga consectetur. Qui libero perferendis fugit repellendus est. Repellat consequuntur voluptatum voluptatibus illum veritatis itaque mollitia ducimus. Nisi laboriosam unde ipsam minima numquam. Harum, laborum ipsum! Perspiciatis pariatur, eum iure numquam, non ullam molestias saepe unde quae incidunt laborum temporibus aperiam vero delectus! Similique magni eius tempore accusamus? Tempore assumenda eligendi ut quaerat nemo voluptatem accusantium quis inventore optio impedit, ad, tempora perferendis! Enim, unde.",
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
