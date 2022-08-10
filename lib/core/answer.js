import inquirer from "inquirer";
import { questions } from "./questions.js";

console.log("run to answer.js");
const answer = await inquirer.prompt(questions);
console.log(answer);

export { answer };
