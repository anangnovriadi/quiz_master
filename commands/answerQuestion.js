const conf = new (require("conf"))();
const chalk = require("chalk");
const converter = require("number-to-words");

const answerQuestion = (no, answer) => {
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
    const convert = converter.toWords(arr[0].answer);

    if (
      arr[0].answer == answer ||
      convert.toUpperCase() == answer.toUpperCase()
    ) {
      console.log(chalk.green.bold("Correct!"));
    } else {
      console.log(chalk.green.bold("Incorrect!"));
    }
  }
};

module.exports = answerQuestion;
