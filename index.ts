#! /usr/bin/env node 
import inquirer from "inquirer";

let myBalance = 5000;
let myPin = 2699447;

let pinAns = await inquirer.prompt(
    {
        name : "Pin",
        type : "number",
        message : "Enter you Pin Number",
    }
);
if  (pinAns.Pin === myPin)
{



 console.log ("This is the correct pin code!");

 let operationAns = await inquirer.prompt
 (
    [
        {
            name : "operation",
            type : "list",
            message : "Please select an option",
            choices : ["Would you like to Check your Current Balance" ,"Fast Cash", "Would you like to Withdraw"]

        }
    ]

 );
 //console.log(operationAns);

 if (operationAns.operation === "Would you like to Withdraw")
 {
   let amount = await inquirer.prompt
    (
     [
        {
            name : "Desired_Amount",
            message : "Enter your desired amount",
            type : "number"
        }
     ]

    );
      
     if(amount.Desired_Amount > myBalance){
        console.log("Insufficient Balance");
     }
     if (amount.Desired_Amount <= myBalance){
     console.log(`Your remaining balance is: ${myBalance - amount.Desired_Amount}`);}
 }
  else if (operationAns.operation === "Fast Cash")
  {
    let fastAmount = await inquirer.prompt
    (
        [
            {
                name : "Fastcash",
                message : "Please select an option",
                type : "list",
                choices :[1000 , 2000 , 5000 , 10000]
            }
        ]
    );
    if(fastAmount.Fastcash > myBalance){
        console.log("Insufficient Balance");
     }
     if (fastAmount.Fastcash <= myBalance)
     {
        
     if(fastAmount.Fastcash === 1000){
     console.log(`Your remaining balance is: ${myBalance - 1000}` );
     }else if (fastAmount.Fastcash === 2000){
        console.log(`Your remaining balance is ${myBalance - 2000}`);
     }else if (fastAmount.Fastcash === 5000){
        console.log(`Your remaining balance is ${myBalance - 5000}`);
     }else if (fastAmount.Fastcash === 10000){
        console.log(`Your remaining balance is ${myBalance-10000}`);
     }}

 }
    else if (operationAns.operation==="Would you like to Check your Current Balance"){
        console.log(`Your Current Balance is ${myBalance}`)
    }
}
else {console.log("This is an Incorrect Pin code");
}   
