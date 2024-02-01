
// Pseudocode:
// Create an initial alert message that displays for the user.
// Create three variables, each variable being the result of a unique mathematical calcuation.
// Create a second alert message that displays the calculation/result of variable 1.
// Create a third alert message that displays the calculation/result of variable 2.
// Create a fourth alert message that displays the calculation/result of variable 3.
// Each of these alert messages will display back to back, providing the 3 digit code to the vault.

// First, I'll assign the alert message as a string to a variable named alertMsg.
// I'll create an alert and include the alertMsg as the message that displays.

const alertMsg="You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
alert(alertMsg);

// A dialog box will pop up displaying the alertMsg upon entering the website.

// After, I'll create 3 variables and assign each variable with a value that will be the result of unique calculations.

const combination = {
    num1: 5 + 2,
    num2: 50 / 2,
    num3: 8 * 4,
}

// Then, I'll use a second, third, and fourth alert which includes each of the 3 variables in order.

alert(combination.num1)
alert(combination.num2)
alert(combination.num3)

// Each number of the vault combination will be displayed in order, one dialog box after the other.













// scratch work below!

// const num1= 5 + 2;

// const num2= 50 / 2;

// const num3= 8 * 4

// const num4= num1

// alert(num4)

// alert(${num1} + ${num2} + ${num3});

// const alertMsg2= num1, num2, num3;

// alert(alertMsg2)

// const num1= 8-2
// console.log(num1);

