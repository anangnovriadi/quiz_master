const conf = new (require("conf"))();
const chalk = require("chalk");

const deleteQuestion = no => {
  const data = conf.get("quiz-master-list");

  // Check Question
  let check = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].no == no) {
      check.push({
        no: data[i].no,
        question: data[i].question,
        answer: data[i].answer
      });
    }
  }

  if (check.length == 0) {
    console.log(chalk.red.bold("Question not found"));

    return;
  }

  let arr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].no !== no) {
      arr.push({
        no: data[i].no,
        text: data[i].text,
        done: data[i].done
      });
    }
  }

  conf.set("quiz-master-list", arr);

  console.log(chalk.green.bold("Question no " + no + " was deleted"));
};

const destroyAllQuestion = no => {
  conf.delete("quiz-master-list");

  console.log(chalk.green.bold("All Question was Deleted"));
};

module.exports = { deleteQuestion, destroyAllQuestion };
