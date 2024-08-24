// q no 1
// function displayDateTime() {
//     // Get the current date and time
//     const now = new Date();

//     // Format the date and time
//     const date = now.toLocaleDateString();
//     const time = now.toLocaleTimeString();

//     // Display the date and time in the paragraph with id "datetime"
//     document.getElementById('datetime').innerHTML = `${date} ${time}`;
// }

// // Call the function to display the date and time immediately
// displayDateTime();

// // Optionally, update the date and time every second
// setInterval(displayDateTime, 1000);

// q no 2

// function greetUser(firstName, lastName) {
//     // Combine the first and last name into a full name
//     const fullName = firstName + " " + lastName;

//     // Display a greeting message
//     console.log("Hello, " + fullName + "!");
// }

// // Example usage:
// greetUser("Subul", "Kashif");  // This will output: Hello, Subul Kashif!

// q no 3

// function addNumbers(num1, num2) {
//     // Parse the input as numbers and calculate the sum
//     const sum = parseFloat(num1) + parseFloat(num2);
//     return sum;
// }

// document.getElementById('sumForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting

//     // Get the values from the input fields
//     const num1 = document.getElementById('num1').value;
//     const num2 = document.getElementById('num2').value;

//     // Call the function to add the numbers and display the result
//     const sum = addNumbers(num1, num2);
//     document.getElementById('result').innerText = "The sum is: " + sum;
// });


// q no 4

// function calculate(num1, num2, operator) {
//     // Convert the input strings to numbers
//     const number1 = parseFloat(num1);
//     const number2 = parseFloat(num2);

//     let result;

//     // Perform the operation based on the operator
//     switch (operator) {
//         case "+":
//             result = number1 + number2;
//             break;
//         case "-":
//             result = number1 - number2;
//             break;
//         case "*":
//             result = number1 * number2;
//             break;
//         case "/":
//             // Check if the second number is zero to prevent division by zero
//             if (number2 === 0) {
//                 result = "Error: Division by zero is not allowed!";
//             } else {
//                 result = number1 / number2;
//             }
//             break;
//         default:
//             result = "Error: Invalid operator!";
//     }

//     return result;
// }

// document.getElementById('calculatorForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting

    // Get the values from the input fields
//     const num1 = document.getElementById('num1').value;
//     const operator = document.getElementById('operator').value;
//     const num2 = document.getElementById('num2').value;

//     // Call the function to calculate the result and display it
//     const result = calculate(num1, num2, operator);
//     document.getElementById('result').innerText = "Result: " + result;
// });


// q no 5
// function squareNumber(num) {
//     return num * num;
// }

// // Example usage:
// const result = squareNumber(5);  // This will return 25
// console.log("The square of 5 is: " + result);

// Q no 6

// function factorial(num) {
//     if (num < 0) {
//         return "Error: Factorial is not defined for negative numbers.";
//     } else if (num === 0 || num === 1) {
//         return 1;
//     } else {
//         let result = 1;
//         for (let i = 2; i <= num; i++) {
//             result *= i;
//         }
//         return result;
//     }
// }

// // Example usage:
// const result = factorial(5);  // This will return 120
// console.log("The factorial of 5 is: " + result);

// q no 7

// function displayCounting(start, end) {
//     let counting = "";

//     if (start > end) {
//         for (let i = start; i >= end; i--) {
//             counting += i + " ";
//         }
//     } else {
//         for (let i = start; i <= end; i++) {
//             counting += i + " ";
//         }
//     }

//     return counting;
// }

// document.getElementById('countingForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting

//     // Get the values from the input fields
//     const start = parseInt(document.getElementById('startNumber').value);
//     const end = parseInt(document.getElementById('endNumber').value);

//     // Call the function to display the counting and show the result
//     const result = displayCounting(start, end);
//     document.getElementById('result').innerText = result;
// });

// q no 8

// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(number) {
//         return number * number;
//     }

//     const baseSquare = calculateSquare(base);
//     const perpendicularSquare = calculateSquare(perpendicular);

//     const hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);
//     return hypotenuse;
// }

// document.getElementById('hypotenuseForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting

    // Get the values from the input fields
//     const base = parseFloat(document.getElementById('base').value);
//     const perpendicular = parseFloat(document.getElementById('perpendicular').value);

//     // Call the function to calculate the hypotenuse and display the result
//     const hypotenuse = calculateHypotenuse(base, perpendicular);
//     document.getElementById('result').innerText = "The hypotenuse is: " + hypotenuse.toFixed(2);
// });

// q no 9

// function calculateArea(width, height) {
//     return width * height;
// }

// document.getElementById('areaForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting

//     // Get the values from the input fields
//     const width = parseFloat(document.getElementById('width').value);
//     const height = parseFloat(document.getElementById('height').value);

//     // Calculate the area using the function
//     const area = calculateArea(width, height);
//     document.getElementById('result').innerText = "The area of the rectangle is: " + area;
// });

// q no 10

// function isPalindrome(str) {
//     // Normalize the string: remove non-alphanumeric characters and convert to lowercase
//     const normalizedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

//     // Reverse the normalized string
//     const reversedStr = normalizedStr.split('').reverse().join('');

//     // Check if the normalized string is equal to its reversed version
//     return normalizedStr === reversedStr;
// }

// document.getElementById('palindromeForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting

//     // Get the value from the input field
//     const inputString = document.getElementById('inputString').value;

//     // Check if the input string is a palindrome
//     const result = isPalindrome(inputString);
//     document.getElementById('result').innerText = result ? "The string is a palindrome." : "The string is not a palindrome.";
// });

// q no 11

// function capitalizeFirstLetterOfEachWord(str) {
//     // Split the string into words
//     const words = str.split(' ');

//     // Map over each word to capitalize the first letter
//     const capitalizedWords = words.map(word => {
//         if (word.length > 0) {
//             return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//         }
//         return word;
//     });

//     // Join the words back into a single string
//     return capitalizedWords.join(' ');
// }

// document.getElementById('capitalizeForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting

//     // Get the value from the input field
//     const inputString = document.getElementById('inputString').value;

    // Capitalize the first letter of each word
//     const result = capitalizeFirstLetterOfEachWord(inputString);
//     document.getElementById('result').innerText = result;
// });


// q no 12

// function findLongestWord(str) {
//     // Split the string into words
//     const words = str.split(' ');

//     // Initialize the longest word variable
//     let longestWord = '';

//     // Iterate through the words to find the longest one
//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     return longestWord;
// }

// document.getElementById('longestWordForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting

//     // Get the value from the input field
//     const inputString = document.getElementById('inputString').value;

    // Find the longest word
//     const result = findLongestWord(inputString);
//     document.getElementById('result').innerText = "The longest word is: " + result;
// });

// Q no 13

// function countOccurrences(str, letter) {
//     // Initialize the count variable
//     let count = 0;

//     // Iterate through the string to count occurrences of the letter
//     for (const char of str) {
//         if (char === letter) {
//             count++;
//         }
//     }

//     return count;
// }

// document.getElementById('countForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting

//     // Get the values from the input fields
//     const inputString = document.getElementById('inputString').value;
//     const inputLetter = document.getElementById('inputLetter').value;

//     // Ensure inputLetter is a single character
//     if (inputLetter.length !== 1) {
//         document.getElementById('result').innerText = "Please enter a single letter.";
//         return;
//     }

//     // Count occurrences of the letter
//     const count = countOccurrences(inputString, inputLetter);
//     document.getElementById('result').innerText = "The letter '" + inputLetter + "' occurs " + count + " times.";
// });

// q no 14

// Function to calculate the circumference of a circle
// function calcCircumference(radius) {
//     // Calculate the circumference
//     const circumference = 2 * Math.PI * radius;
//     // Output the result
//     document.getElementById('circumferenceResult').innerText = `The circumference is ${circumference.toFixed(2)}`;
// }

// // Function to calculate the area of a circle
// function calcArea(radius) {
//     // Calculate the area
//     const area = Math.PI * Math.pow(radius, 2);
//     // Output the result
//     document.getElementById('areaResult').innerText = `The area is ${area.toFixed(2)}`;
// }

// Function to handle button click and calculate properties
// function calculateProperties() {
//     // Get the value from the input field
//     const radius = parseFloat(document.getElementById('radius').value);
    
//     // Check if the radius is valid
//     if (!isNaN(radius) && radius > 0) {
//         calcCircumference(radius);
//         calcArea(radius);
//     } else {
//         document.getElementById('circumferenceResult').innerText = 'Please enter a valid radius.';
//         document.getElementById('areaResult').innerText = '';
//     }
// }
