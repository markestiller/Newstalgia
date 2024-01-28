import { useState, useEffect } from "react";
import "./NewstalgiaTitle.css";

const NewstalgiaTitle = () => {
  
  // const [quote, setQuote] = useState('');

  // useEffect(() => {
    
  //   const proxyUrl = 'https://cors-anywhere.herokuapp.com/corsdemo';
  //   const apiUrl = 'https://zenquotes.io/api/today';
    
  //   const fetchQuote = async () => {
  //     try {
  //       const response = await fetch(proxyUrl + apiUrl);
  //       const data = await response.json();
  //       console.log(data);
  //       const quoteText = data[0].q;
  //       setQuote(quoteText);
  //     } catch (error) {
  //       console.error('Error fetching quote:', error);
  //     }
  //   };

  //   fetchQuote();
  // }, []);

  return (
    <>
        <div>
          {/* <h2><blockquote>{quote}</blockquote></h2> */}
        </div>
        <h1 className="newstalgia-title">Newstalgia</h1>
        <div></div>
    </>
  );
};

export default NewstalgiaTitle;