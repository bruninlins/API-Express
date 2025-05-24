import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("curso de Node.js com express");
});

export default app;
