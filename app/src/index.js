const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Netflix clone home page");  // replace with your UI
});

// simple health endpoint for K8s probes
app.get("/healthz", (req, res) => res.status(200).send("OK"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
