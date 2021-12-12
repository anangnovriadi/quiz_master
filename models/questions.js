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
        allowNull: true
      },
      question: {
        type: DataTypes.STRING,
        allowNull: true
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      tableName: "questions",
      timestamps: false
    }
  );
};
