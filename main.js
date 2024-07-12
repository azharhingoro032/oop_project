#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.blue("============================================================"));
console.log(chalk.blue("||                                                         ||"));
console.log(chalk.blue("||               Welcome to My OOP Project                 ||"));
console.log(chalk.blue("||                                                         ||"));
console.log(chalk.blue("============================================================"));
async function main() {
    let exit = false;
    let students = [];
    while (!exit) {
        let oop = await inquirer.prompt([
            {
                type: "list",
                name: "OOP",
                message: "Please select an option:",
                choices: [
                    { name: "Self-Reflection", value: "selfReflection" },
                    { name: "Speak to a Student", value: "speakToStudent" },
                    { name: "Exit", value: "exit" }
                ]
            }
        ]);
        if (oop.OOP === "selfReflection") {
            console.log("Hello! I'm reflecting on myself.");
            console.log("I am doing well and in great health.");
        }
        else if (oop.OOP === "speakToStudent") {
            let student = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'studentName',
                    message: 'Please enter the student name:',
                },
                {
                    type: 'input',
                    name: 'question',
                    message: 'Nice to meet you! How are you doing today?',
                }
            ]);
            students.push(student.studentName);
            console.log(`Hello, I am ${student.studentName}.`);
            console.log(`My today plain: ${student.question}`);
            console.log("\n--- List of Students ---");
            students.forEach((name, index) => {
                console.log(`${index + 1}. ${name}`);
            });
        }
        else if (oop.OOP === "exit") {
            await new Promise(resolve => setTimeout(resolve, 1000));
            exit = true;
            console.log("Exiting the program. Goodbye!");
        }
    }
}
main();
