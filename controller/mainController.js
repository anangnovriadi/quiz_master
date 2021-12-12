"use-strict";

const listData = async (req, res) => {
  try {
    let data = await req.services.questionService.list(req);

  let objectResponse = await {
    error: false,
    message: "Found",
    data: data
  };

  return req.output(req, res, objectResponse, "info", 200);
  } catch (e) {
    return req.output(req, res, {
      error: true,
      type: e.errors[0].type,
      message: e.errors[0].message
    }, "error", 500);
  }
};

const detailData = async (req, res) => {
  try {
    let data = await req.services.questionService.detail(req, req.params.id);

    let objectResponse = await {
      error: false,
      message: "Found",
      data: data
    };

    return req.output(req, res, objectResponse, "info", 200);
  } catch (e) {
    return req.output(req, res, {
      error: true,
      type: e.errors[0].type,
      message: e.errors[0].message
    }, "error", 500);
  }
};

const createData = async (req, res) => {
  try {
    await req.services.questionService.create(req, {
      question_number: req.body.question_number,
      question: req.body.question,
      answer: req.body.answer
    });
  
    let objectResponse = await {
      error: false,
      message: "Created"
    };
  
    return req.output(req, res, objectResponse, "info", 200);
  } catch(e) {
    return req.output(req, res, {
      error: true,
      type: e.errors[0].type,
      message: e.errors[0].message
    }, "error", 500);
  }
};

const updateData = async (req, res) => {
  try {
    await req.services.questionService.update(req, {
      question_number: req.body.question_number || null,
      question: req.body.question || null,
      answer: req.body.answer || null
    }, req.params.id);
  
    let objectResponse = await {
      error: false,
      message: "Updated",
    };
  
    return req.output(req, res, objectResponse, "info", 200);
  } catch(e) {
    return req.output(req, res, {
      error: true,
      type: e.errors[0].type,
      message: e.errors[0].message
    }, "error", 500);
  }
};

const deleteData = async (req, res) => {
  try {
    await req.services.questionService.destroy(req, req.params.id);
  
    let objectResponse = await {
      error: false,
      message: "Deleted",
    };
  
    return req.output(req, res, objectResponse, "info", 200);
  } catch(e) {
    return req.output(req, res, {
      error: true,
      type: e.errors[0].type,
      message: e.errors[0].message
    }, "error", 500);
  }
};

module.exports = { listData, detailData, createData, updateData, deleteData };
