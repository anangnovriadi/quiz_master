"use-strict";

const express = require("express");
const router = express.Router();
const mainController = require("../controller/mainController");

module.exports = app => {
  router.get("/questions", mainController.listData);
  router.get("/question/:id", mainController.detailData);
  router.post("/question", mainController.createData);

  app.use("/api", router);
};
