"use-strict";

const list = async req => {
  let data = await req.models.questions.findAll({});
  return data;
};

const detail = async (req, id) => {
  let data = await req.models.questions.findOne({
    where: {
      id: id
    }
  });
  return data;
};

const create = async (req, payload) => {
  let data = await req.models.questions.create(payload);
  return data;
};

module.exports = { list, detail, create };
