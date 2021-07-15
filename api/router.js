const express = require("express");

const router = express.Router();

router.get("/:id", (req, res, next) => {
  try {
    res.status(500).json({ message: "Get recipe by ID endpoint" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
