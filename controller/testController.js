"use-strict";

const listData = async (req, res) => {
  let data = await req.services.auditTrailService.get(req);

  let objectResponse = await {
    error: true,
    message: "Found",
    data: data
  };

  return req.output(req, res, objectResponse, "info", 200);
};

const detailData = async (req, res) => {
  let data = await req.services.auditTrailService.detail(req, req.params.id);

  let objectResponse = await {
    error: true,
    message: "Found",
    data: data
  };

  return req.output(req, res, objectResponse, "info", 200);
};

module.exports = { listData, detailData };
