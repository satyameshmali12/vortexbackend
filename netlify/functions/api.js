const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API is working!" });
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Test successful!" });
});

module.exports.handler = serverless(app);
