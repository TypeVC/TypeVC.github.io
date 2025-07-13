const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("✅ TypeVC Bot Backend Running!");
});

app.get("/start", (req, res) => {
  res.send("🚀 Bot started!");
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
