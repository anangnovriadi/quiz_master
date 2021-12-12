"use-strict";

const get = async req => {
  let data = await req.models.testModel.findAll({});
  return data;
};

const detail = async (req, id) => {
  let data = await req.models.testModel.findOne({
    where: {
      id: id
    }
  });
  return data;
};

module.exports = { get, detail };
