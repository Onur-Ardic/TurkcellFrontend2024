#!/usr/bin/env node
import chalk from "chalk";
import terminalImage from "terminal-image";
import got from "got";

const body = await got("https://i.ibb.co/P4q2JSr/IMG-2126.jpg").buffer();
console.log(
  await terminalImage.buffer(body, {
    width: "100%",
    height: "100%",
  })
);

console.log(
  chalk.yellow(`
Hello, I am Abdullah. I was born in 2000 in Bolu. 
After living in Bolu for 19 years, I moved to Muğla
for my university education. I am currently a 
senior student at Muğla Sıtkı Koçman University,
Department of Computer Engineering. I develop 
projects in the field of frontend development.

My interest in technology and the experiences I 
gained during my internship period motivate me 
even more. Taking part in creative projects, 
mastering new technologies and shaping my career
in this field has become a lifestyle for me. 
By sharing the knowledge and experience I have 
gained during my education life with you, I aim
to evaluate growth opportunities and to sign 
more beautiful projects together. Are you 
ready to join this journey with me? 
  
Let's work together.
`)
);
console.log(
  chalk.red(`Tech Stack : 
HTML, CSS, SASS, SCSS, Bootstrap, Tailwind
Styled Components, Javascript, React, Next`)
);
console.log();
console.log(chalk.blue.bold("Email: abdullahakkol@gmail.com"));
console.log();
console.log(chalk.magenta("GitHub: https://github.com/akkologlu"));
console.log();
console.log(chalk.cyan("LinkedIn: https://www.linkedin.com/in/akkologlu"));
console.log();
console.log(
  chalk.green(
    "CV: https://drive.google.com/file/d/17cDyQc90Uew_SuGP47CVCSAydr1ep8Ez/view?usp=drive_link"
  )
);
console.log();
