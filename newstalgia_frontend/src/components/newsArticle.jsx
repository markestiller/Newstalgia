import { useState } from "react";
import "./NewswArticle.css";
import PropTypes from 'prop-types';

const NewsArticle = ({ heading, author, text, image }) => {
  return (
    <div className="news-article">
      <img src={image} alt="Article" />
      <h2>{heading}</h2>
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