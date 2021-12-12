"use-strict";

const express = require("express");
const router = express.Router();
const mainController = require("../controller/mainController");

module.exports = app => {
  router.get("/questions", mainController.listData);
  router.get("/question/:id", mainController.detailData);
  router.post("/question", mainController.createData);
  router.patch("/question/:id", mainController.updateData);
  router.delete("/question/:id", mainController.deleteData);

  app.use("/api", router);
};
