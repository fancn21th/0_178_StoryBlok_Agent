const express = require("express");
const app = express();
const port = 3000;

// 1. Require the Storyblok client
const StoryblokClient = require("storyblok-js-client");

// 2. Initialize the client with the preview token
// from your space dashboard at https://app.storyblok.com
let Storyblok = new StoryblokClient({
  accessToken: "pHoqjoiXRms6gRAJpDcTJQtt",
});

app.get("/", (req, res) => {
  Storyblok.get("cdn/stories/home", {
    version: "draft",
  })
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
