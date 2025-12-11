const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Netflix app deployed via ArgoCD & Kubernetes!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
