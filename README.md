# Overview

What is TypeScript? 

TypeScript is a free, open-source programming language developed by Microsoft that serves as a strict syntactical "superset" of JavaScript. TypeScript is static and JavaScript is dynamic.

It's a basic quiz generator written in TypeScript. It has five categories, with one quiz in each. There is a small twist to how the quiz starts. When you first start the program, it randomly chooses one of the five quizzes for you to take. Once you finish the quiz, it shows your score and asks if you want to continue. If you choose yes, it takes you to a menu where you can pick which category you want to try next. It also keeps track of which quizzes you have completed. If you choose no, the program exits.

My purpose for writing this program was to practice using TypeScript and get more comfortable with a new programming language.

[Software Demo Video]()

# Development Environment
- I used Visual Studio Code (VS Code) to write and edit my code. I used Node.js to run the program and TypeScript as the programming language. I also used the VS Code terminal to test the quiz generator and check for errors.

- I used TypeScript to create the quiz generator. I used interfaces to organize the questions and quiz categories, arrays to store the quizzes, and a class to keep track of completed quizzes. I also used async functions and await to handle user input. For the terminal input, I used Node.js built-in libraries, including readline/promises and process. I did not need any additional third-party libraries for the program.

- To Start the program: npx tsx quizgen.ts

# Useful Websites

{Make a list of websites that you found helpful in this project}

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript - The Basics](https://www.youtube.com/watch?v=ahCwqrYpIuM)

# Future Work

- Add more quiz categories and questions so there is more variety when playing.
- Improve the menu and input validation so it handles incorrect answers or invalid selections better.
- Add a way to save completed quizzes and scores so the progress is still there when the program is started again.