const conf = new (require("conf"))();
const chalk = require("chalk");

const createQuestion = (no, question, answer) => {
  let data = conf.get("quiz-master-list");
  let arr = [];
  if (!data) {
    data = [];
  }

  // Check Question
  for (let i = 0; i < data.length; i++) {
    if (data[i].no == no) {
      arr.push({
        no: data[i].no,
        question: data[i].question,
        answer: data[i].answer
      });
    }
  }

  if (arr.length >= 1) {
    console.log(
      chalk.red.bold("Question no " + arr[0].no + " already existed!")
    );

    return;
  }

  data.push({
    no: no,
    question: question,
    answer: answer
  });

  conf.set("quiz-master-list", data);

  // Log
  console.log(chalk.green.bold("Question no " + no + " created"));

  // Log Question
  console.log(chalk.blue.bold("Q: " + question));

  // Log Answer
  console.log(chalk.blue.bold("A: " + answer));
};

module.exports = createQuestion;
