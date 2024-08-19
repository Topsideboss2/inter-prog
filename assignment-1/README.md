# Assignment 1

This assignment focuses on creating a simple web application that determines the generation a user belongs to based on their age. The application takes input from the user, specifically their username and age, and displays a friendly message indicating their generation.

## Technologies Used
- HTML
- CSS
- JavaScript

## File Structure
The project consists of the following files:
- `index.html`: The main HTML file that contains the form for user input.
- `styles/style.css`: The CSS file that styles the HTML elements.
- `scripts/script.js`: The JavaScript file that handles the logic for determining the user's generation.

## How It Works
1. The user enters their username and age in the provided form.
2. Upon clicking the "Submit" button, the JavaScript function `friendlyMessage()` is triggered.
3. The function retrieves the user's age and username from the form.
4. Based on the user's age, the function determines their generation and updates the heading with a friendly message.
5. The message is displayed below the form.

## Generation Categories
The application categorizes users into the following generations based on their age:
- Baby Boomer Generation: Ages 60-78
- Generation X: Ages 41-59
- Generation Y (Millennials): Ages 26-40
- Generation Z: Ages 10-25
- Other: Users who are either too young or too old to belong to a specific generation.

## Getting Started
To run the application, simply open the `index.html` file in a web browser. The form will be displayed, and you can enter your username and age to see the friendly message indicating your generation.

## License
This project is licensed under the [MIT License](LICENSE).
