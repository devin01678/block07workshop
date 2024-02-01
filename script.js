
// Pseudocode:

// I want to create an object. This object will have 3 properties. Each property will have a value that is the result of a unique mathematical calculation.
// I will then create an alert message that will pop up on the browser to the user. 
// This alert message will display a secret message that is followed by the result of those 3 mathematical calcuations; the calculations will be completed and stored as values to the properties beforehand.
// To achieve this, I will create a string literal so that the three numbers do not add up. I want them to be read as separate numbers, not added together or calculated in any way.
// A dialog box will pop up displaying the secret message and the secret code containing those 3 object keys upon entering the website.



// This an object with 3 properties.
// For the key num1, the value will be the result of the expression 5 + 2.
// For the key num2, the value will be the result of the expression 50 / 2.
// For the key num3, the value will be the result of the expression 8 * 4.

const combination = {
    num1: 5 + 2,
    num2: 50 / 2,
    num3: 8 * 4,
}

// This is my secret message that I am adding to the dialog box.
// By using a string literal with `, I am able to display each key without the keys adding or calculating together.
// By using a string literal, the + signs will act as strings rather than calculations.

alert(`You have received this message because you have been chosen to open an important vault. Here is the secret combination: ${combination.num1} + ${combination.num2} + ${combination.num3}`);






// scratch work below!

// const alertMsg="You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
// alert(alertMsg);

// Then, I'll use a second, third, and fourth alert which includes each of the 3 variables in order.

// alert(combination.num1)
// alert(combination.num2)
// alert(combination.num3)

// const num1= 5 + 2;

// const num2= 50 / 2;

// const num3= 8 * 4

// const num4= num1

// alert(num4)

// alert(`${num1} + ${num2} + ${num3}`);

// const alertMsg2= num1, num2, num3;

// alert(alertMsg2)

// const num1= 8-2
// console.log(num1);

// Create three variables, each variable being the result of a unique mathematical calcuation.
// Create an initial alert message that displays for the user.
// Each of these alert messages will display back to back, providing the 3 digit code to the vault.

// alert(combination.num1 + " " + combination.num2 + " " + combination.num3)

// Each number of the vault combination will be displayed in order, one dialog box after the other.