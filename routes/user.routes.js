const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ name: "salut" });
});

router.post("/", (req, res) => {
  res.send(req.body);
});

module.exports = router;
