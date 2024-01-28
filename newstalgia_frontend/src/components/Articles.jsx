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
      heading: "Biden's embrace of tougher border measures is a major shift",
      author: "Priscilla Alvarez",
      content:"President Joe Biden is embracing tougher border measures, including shutting down the US-Mexico border, marking a stark shift from his early days in office as he tries to fend off former President Donald Trumps attacks on immigration policy ahead of the election. Hours after House Speaker Mike Johnson warned on Friday that the emerging border deal in the Senate is dead on arrival, Biden offered this message to House Republicans: “Securing the border through these negotiations is a win for America. For everyone who is demanding tougher border control, this is the way to do it. If you’re serious about the border crisis, pass a bipartisan bill and I will sign it.” Biden took office pledging to restore asylum and manage the border in a “humane” way. But his administration has faced the harsh realities and challenges at the US-Mexico border amid record migration across the Western Hemisphere — making it a political vulnerability seized on by Republicans.In recent weeks, Trump has lobbied Republicans to oppose the border compromise being delicately hashed out in the Senate because he wants to campaign on the issue this November.Over the course of his administration, Biden has leaned on more restrictive measures to try to stem the flow of migration, but Friday’s statement revealed a tougher stance as the president tries to control an issue thats dogged him, while risking putting him at odds with some allies.would give me, as President, a new emergency authority to shut down the border when it becomes overwhelmed. And if given that authority, I would use it the day I sign the bill into law.Biden’s embrace of an authority that would allow him to shut down the border in the event of a migrant surge was striking to current and former administration officials, as well as to immigrant advocates.Johnson on Saturday attacked Biden over his endorsement of the potential border deal, arguing the president can take executive action without Congress to clamp down on migrant crossings.And in his first statement on the Senate deal, Johnson claimed that it would force the US to surrender to illegal migration. “According to reports, the Senate’s pending proposal would expressly allow as many as 150,000 illegal crossings each month (1.8 million per year) before any new ‘shutdown’ authority could be used. At that point, America will have already been surrendered,” Johnson said in the statement.",
    },
    {
      heading: "A tanker truck carrying 7,500 gallons of diesel exploded in Ohio, leaving 1 dead",
      author: "Sarah Dewberry",
      content:"A man is dead, several northeast Ohio roads are closed and diesel has poured into a river after a tanker truck lost control and exploded Saturday morning.The driver of the truck was heading north on State Route 8 in Macedonia, about 18 miles north of Akron, the Summit County Sheriff’s Office said in a news release. As he attempted to merge on Interstate 271, he lost control and went over the side of a bridge, causing the truck to explode in a burst of flames when it crashed back on State Route 8, the sheriff’s office said.The sheriff’s office said officials from multiple departments, including a hazmat team responded to the fiery wreck at 9:15 a.m. local time.Ohio Environmental Protection Agency spokesperson Bryant Somerville told CNN the truck was carrying 7,500 gallons of diesel when it crashed.The sheriff’s office said diesel from the tanker got into a nearby river and leaked into Brandywine Falls, a 60-foot waterfall, briefly causing a creek to catch on fire.“The nearby Brandywine Creek has been impacted with diesel from the crash,” Somerville said in an email Saturday. “The creek briefly caught fire initially after the accident, and Ohio EPA’s on-scene coordinator is reporting the fire is out.”Somerville said the agency is installing containment measures in the creek to stop the diesel spread and will oversee abatement efforts.The sheriff’s office said ramps from State Route 8 to Interstate 271 are closed in both directions.Officials say the roads “will remain closed until the bridge can be inspected for safety,” which is ongoing.Ohio Department of Transportation spokesperson Matt Bruning said crews at the scene are inspecting both the bridge and road. A part of the road where the tanker landed and exploded “will need to be repaved,” he said in an email to CNN. don’t have a timeline on that,” Bruning said. “I also have not yet heard details about the bridge inspection. We will not reopen anything until we deem it safe to motorists.”Authorities are investigating the cause of the crash."    },
    {
      heading: "Number of assisted deaths jumped more than 30 per cent in 2022, report says",
      author: "Benjamin Lopez Steven",
      content:"A new Health Canada report says the number of medically assisted deaths in 2022 was more than 30 per cent higher than the year prior.Medically assisted deaths constituted 4.1 per cent of all deaths in Canada last year, said the report, which was published on Tuesday.The report is a comprehensive overview of Canada's medical assistance in dying (MAID) law and its effects. The law is set to extend access to medical assistance in dying to those whose sole medical condition is a mental illness in March 2024.Experts and advocates who spoke with CBC News questioned whether the MAID growth rate and the percentage of deaths should be causes for concern. Some cited perceived gaps in the data.The report says 13,241 people received medically assisted deaths in 2022 — a 31.2 per cent jump over 2021.It says 44,958 people have received medically assisted deaths since the introduction of federal legislation in 2016.Rebecca Vachon, the program director for health at the non-partisan Christian think tank Cardus, described the year-over-year MAID growth as 'alarming.'To access MAID, an individual must have a serious illness, disease or disability which causes irreversible decline and unbearable suffering that cannot be relieved under conditions [the patient considers] acceptable, says the federal government.We should be ensuring that we never get to that point because we have better care available, Vachon said."    },
    {
      heading: "Harden’s triple-double.",
      author: "John Chidley-Hill",
      content:"Toronto Raptors rookie Gradey Dick is getting on-the-job training from head coach Darko Rajakovic, even in the middle of games.Dick fouled future Hall of Famer James Harden early in the second quarter of Toronto’s lopsided 127-107 loss to the Los Angeles Clippers on Friday. Rajakovic immediately went over to the 20-year-old forward for a one-on-one conversation as officials reviewed the play.“I walked over to him with a smile on, he had a smile too,” said Dick, who knew he’d made a mistake when he put his foot in Harden’s landing space. “Communication like that, where it’s positive, that definitely helps me as a player where I can personally learn like that and he knows that to.”After the chat with Rajakovic, veteran forwards Chris Boucher, Thad Young, and Garrett Temple also came over to Dick to review the intricacies of guarding one of the NBA’s top players.“It’s great, it’s like having multiple coaches going at one-time, especially with Thad and Garrett, when they’ve been in league for so long and the knowledge that they have,” said Dick. “But in that particular play, it’s more like I’m talking to them knowing exactly what they’re gonna say because, yeah, I landed under him.”Harden finished with 22 points, 13 assists and 10 rebounds, for his 75th career triple-double, the eighth most in NBA history. Rajakovic was forgiving of Dick’s mistake as the rookie is playing more minutes with Toronto’s roster thinned by injuries and trades."    },
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
