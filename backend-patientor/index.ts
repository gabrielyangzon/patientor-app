import express from "express";
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api/ping", (_request, response) => {
  response.status(200).send("pong");
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`app listening to ${PORT}`);
});
