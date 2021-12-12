"use-strict";

const express = require("express");
const router = express.Router();
const testController = require("../controller/testController");

module.exports = app => {
  router.get("/test", testController.listData);
  router.get("/test/detail/:id", testController.detailData);

  app.use("/api", router);
};
