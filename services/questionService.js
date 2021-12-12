"use-strict";

const list = async req => {
  let data = await req.models.questions.findAll({});
  return data;
};

const detail = async (req, params) => {
  let data = await req.models.questions.findOne({
    where: {
      id: params
    }
  });
  return data;
};

const create = async (req, payload) => {
  let data = await req.models.questions.create(payload);
  return data;
};

const update = async (req, payload, params) => {
  let data = await req.models.questions.update(payload, {
    where: {
      id: params
    }
  });
  return data;
};

const destroy = async (req, params) => {
  let data = await req.models.questions.destroy({
    where: {
      id: params
    }
  });
  return data;
};

module.exports = { list, detail, create, update, destroy };
