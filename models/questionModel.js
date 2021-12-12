"use strict";

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "questions",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true
      },
      question_number: {
        type: DataTypes.STRING,
        allowNull: false
      },
      question: {
        type: DataTypes.STRING,
        allowNull: false
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: "questions",
      timestamps: false
    }
  );
};
