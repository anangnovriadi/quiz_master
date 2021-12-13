#! /usr/bin/env node

const { program } = require("commander");

const createQuestion = require("./commands/createQuestion");
const listQuestion = require("./commands/listQuestion");
const detailQuestion = require("./commands/detailQuestion");
const updateQuestion = require("./commands/updateQuestion");
const {
  deleteQuestion,
  destroyAllQuestion
} = require("./commands/deleteQuestion");
const answerQuestion = require("./commands/answerQuestion");

program
  .command("create_question <no> <question> <answer>")
  .description("create_question <no> <question> <answer> | Create a question")
  .action(createQuestion);

program
  .command("questions")
  .description("questions | Shows question list")
  .action(listQuestion);

program
  .command("question <no>")
  .description("question <no> | Shows a question")
  .action(detailQuestion);

program
  .command("update_question <no> <question> <answer>")
  .description("update_question <no> <question> <answer> | Updates a question")
  .action(updateQuestion);

program
  .command("delete_question <no>")
  .description("delete_question <no> | Deletes a question")
  .action(deleteQuestion);

program
  .command("delete_questions")
  .description("delete_questions | Deletes all question")
  .action(destroyAllQuestion);

program
  .command("answer_question <no> <answer>")
  .description("answer_question <no> | Answer a question")
  .action(answerQuestion);

program.parse();
