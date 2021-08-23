const express = require("express");
const axios = require("axios");
const qs = require("qs");
const router = express.Router();

// routes
router.get("/", getTokens);
module.exports = router;

function getTokens(req, res, next) {
  const data = qs.stringify({
    scope: "SERVER_ACCESS",
  });

  const config = {
    method: "post",
    url: "https://au-api.basiq.io/token",
    headers: {
      Authorization: `Basic OTUwNGU5ZjgtYzE0NC00ZTYwLWEwMjMtNjk2MThiZjdjMDliOjdlYjkyY2FkLWFmNDEtNDgxMi05MTQ0LTc3YWFlYzUzZmJhYw==`,
      "Content-Type": "application/x-www-form-urlencoded",
      "basiq-version": "2.0",
    },
    data: data,
  };

  return axios(config)
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
}
