const conf = new (require("conf"))();
const chalk = require("chalk");

const detailQuestion = no => {
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
    console.log(chalk.green.bold("Q: " + arr[0].question));
    console.log(chalk.green.bold("A: " + arr[0].answer));
  }
};

module.exports = detailQuestion;
