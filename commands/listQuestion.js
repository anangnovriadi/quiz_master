const conf = new (require("conf"))();
const chalk = require("chalk");

const listQuestion = () => {
  const data = conf.get("quiz-master-list");

  if (data && data.length) {
    console.log(chalk.yellow.bold("No | Question | Answer"));
    data.forEach((row, i) => {
      console.log(chalk.green(`${row.no} | ${row.question} | ${row.answer}`));
    });
  } else {
    console.log(chalk.yellow.bold("No | Question | Answer"));
  }
};

module.exports = listQuestion;
