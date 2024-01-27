import { useState } from "react";
import "./NewsArticle.css";
import PropTypes from 'prop-types';

const NewsArticle = ({ heading, author, text, image }) => {
  return (
    <div className="news-article">
        <h2>{heading}</h2>
        <img src={image} alt="Article" />
        <p><strong>Author:</strong> {author}</p>
        <p>{text}</p>
    </div>
  );
}

NewsArticle.propTypes = {
  heading: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default NewsArticle;