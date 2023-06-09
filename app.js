const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    message: "GET request to / route",
  });
});

app.post("/", (req, res) => {
  res.json({
    message: "POST request to / route",
    data: req.body,
  });
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
