#!/usr/bin/env node
import chalk from "chalk";
import terminalImage from "terminal-image";
import got from "got";

const body = await got("https://www.bariserkus.com/myPhoto.jpg").buffer();
console.log(
  await terminalImage.buffer(body, {
    width: "100%",
    height: "100%",
  })
);
console.log(chalk.yellowBright("Baris Erkus - Front-End Developer"));
console.log();
console.log(
  chalk.yellow(
    `Barış Erkuş was born on April 18, 2002, in Adana. 
He attended Iskenderun Technical University from 2020 to 2024. 
Throughout his educational journey, he completed internships at three 
different companies, held a full-time position at a company, 
and gained extensive freelance work experience. 
He graduated as the top-ranking student in his class. 
Towards the end of his education, he participated in the 
Front-End Bootcamp Training program provided by Turkcell. 
Barış Erkuş's internships and work experiences have predominantly 
been in Web Development and Mobile Development. 
His career goal is to become a professional trainer 
and consultant in these fields.The most important 
thing for him is to be remembered for his commitment to quality.`
  )
);
console.log();
console.log(
  chalk.red(
    `Skills:
      HTML, CSS, JavaScript, React,
      React Native,
      C#, .Net`
  )
);
console.log();
console.log(chalk.gray("Email: 1bariserkus@gmail.com"));
console.log();
console.log(chalk.blue("LinkedIn: https://www.linkedin.com/in/bariserkus/"));
console.log();
console.log(chalk.magenta("GitHub: https://github.com/1BarisErkus"));
console.log();
console.log(chalk.cyan("Medium: https://medium.com/@baris.erkus"));
console.log();
console.log(chalk.magentaBright("Website: https://www.bariserkus.com/"));
console.log();
console.log(chalk.dim("Adres: Adana, Turkey"));
console.log();
console.log(chalk.dim("Birthday: 18-04-2002"));
