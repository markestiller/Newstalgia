const fetch = require("node-fetch");

const NEWS_API_KEY = "f819ffdf37d140c3889fc99de73b594f";
const pageSize = 4;
const baseUrl = "https://newsapi.org/v2/top-headlines";

const getRecentNews = async function (req, res, next) {
  try {
    // using fetch to get data from an APIs
    const response = await fetch(
      `${baseUrl}?country=us&apiKey=${NEWS_API_KEY}&pageSize=${pageSize}`
    );
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error(error);
  }
};

const getSportsNews = async function (req, res, next) {
  try {
    // using fetch to get data from an APIs
    const response = await fetch(
      `${baseUrl}?country=us&category=sports&apiKey=${NEWS_API_KEY}&pageSize=${pageSize}`
    );
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error(error);
  }
};

const getTechNews = async function (req, res, next) {
  try {
    // using fetch to get data from an APIs
    const response = await fetch(
      `${baseUrl}?country=us&category=technology&apiKey=${NEWS_API_KEY}&pageSize=${pageSize}`
    );
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getRecentNews,
  getSportsNews,
  getTechNews,
};
