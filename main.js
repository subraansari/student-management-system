#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(1000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter Student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please Enter a non-empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select the course to enrolled",
        choices: ["Office Automation", "CIT", "Digital Marketing", "Graphic Designing", "Web Designing", "Web Development"]
    }
]);
const tutionFee = {
    "Office Automation": 6500,
    "CIT": 6000,
    "Digital Marketing": 10000,
    "Graphic Designing": 12000,
    "Web Designing": 9000,
    "Web Development": 15000,
};
console.log(`\n Tution Fees : ${tutionFee[answer.courses]}/-\n`);
console.log(`Balance : ${myBalance} \n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select Payment Method",
        choices: ["Bank transfer", "Easypaisa", "Jazzcash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value";
        },
    }
]);
console.log(`\nYou Select payment method ${paymentType.payment} \n`);
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(`Cogratulations! You have Successfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would You Like to do next",
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.select === "View Status") {
        console.log("\n*******Status*******\n");
        console.log(`Student Name: ${answer.students}`);
        console.log(`Student Id: ${randomNumber}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`Tution Fees Paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("\n Exit from Student Management System");
    }
}
else {
    console.log("Invalid Amount");
}
