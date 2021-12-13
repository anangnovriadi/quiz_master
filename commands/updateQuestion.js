const conf = new (require("conf"))();
const chalk = require("chalk");

const updateQuestion = (no, question, answer) => {
  const data = conf.get("quiz-master-list");
  let arr = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].no == no) {
      arr.push({
        no: data[i].no,
        question: data[i].question,
        answer: data[i].answer
      });
    }
  }

  if (arr.length == 0) {
    console.log(chalk.red.bold("Question not found"));
  } else {
    for (let i = 0; i < data.length; i++) {
      if (data[i].no == no) {
        arr.push({
          no: data[i].no,
          question: question,
          answer: answer
        });
      }
    }

    conf.set("quiz-master-list", arr);

    // Log
    console.log(chalk.green.bold("Question no " + no + " updated"));
    console.log(chalk.green.bold("Q: " + question));
    console.log(chalk.green.bold("A: " + answer));
  }
};

module.exports = updateQuestion;
