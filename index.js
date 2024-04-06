#! /usr/bin/env node
import inquirer from 'inquirer';
const currency = {
    "USD": 1,
    "EUR": 0.9,
    "GBP": 0.8,
    "JPY": 110,
    "INR": 75,
    "PKR": 280,
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'JPY', 'INR', 'PKR']
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'JPY', 'INR', 'PKR']
    },
    {
        name: "amount",
        message: "Enter your ammount",
        type: 'number',
    }
]);
let userFromCurrency = userAnswer.from;
let userToCurrency = userAnswer.to;
let fromAmount = currency[userFromCurrency]; //exchange rate
let toAmount = currency[userToCurrency]; //exchange rate
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount; //USD base currency 4
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
