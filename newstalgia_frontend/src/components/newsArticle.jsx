import { useState } from "react";
import "./NewsArticle.css";
import PropTypes from 'prop-types';

const NewsArticle = ({ heading, authors, content, image }) => {
    // function that capitalizes
    const capitalizeString = (str) => {
        return str.toUpperCase();
    };


  return (
    <div className="news-article">
        <h2 className="heading"><b>{capitalizeString(heading)}</b></h2>
        <p className="authors"><b>{authors}</b></p>
        <p className="content">{content}</p>
    </div>
  );
}

NewsArticle.propTypes = {
  heading: PropTypes.string.isRequired,
  authors: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default NewsArticle;