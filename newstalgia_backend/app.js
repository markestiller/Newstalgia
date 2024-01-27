require("dotenv").config(); // Load environment variables

const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 3000;

app.use(express.json());
