// This is not ai generated Code.
// Lirbaries
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";// It allows your program to ask questions and receive answers from the user.

const rl = createInterface({ input, output });
// An interface describes the structure of an object. So basic it define the question and the answer.
interface Question {
    id: number;//A number identifying the question
    prompt: string;// The actual question displayed
    options: string[];// A list of possible answers
    answer: string; // The correct answer
    catergory?: string;// The question mark means this property is optional. A question doesn't have to include it.
}
interface QCategories {
    name: string;
    questions: Question[];
}

class QuizProgress {
    completedQuizzes: string[] = [];

    markCompleted(categoryName: string): void {
        if (!this.completedQuizzes.includes(categoryName)) {
            this.completedQuizzes.push(categoryName);
        }
    }

    isCompleted(categoryName: string): boolean {
        return this.completedQuizzes.includes(categoryName);
    }
}
const quizProgress = new QuizProgress();

// Quiz Categories and Questions
// const creates a variable that cannot be reassigned.
const categories: QCategories[] = [// this variable contains a list of quiz categories.
    {
        name: "Thanksgiving",// This only fun Quiz.
        questions: [
            {
                id: 1,
                prompt: "Where did the tradition of breaking the wishbone come from?",
                options: [
                    "Italy", 
                    "England", 
                    "France", 
                    "Germany"
                    ],
                answer: "Italy"
            },
            {
                id: 2,
                prompt: "What Thanksgiving vegetable was grown in space?",
                options: [
                    "The tomato", 
                    "The potato", 
                    "The squash", 
                    "The corn"
                    ],
                answer: "The potato"
            },
            {
                id: 3,
                prompt: "What Christmas song was originally written for Thanksgiving?",
                options: [
                    "Let It Snow! Let It Snow! Let It Snow!", 
                    "O Come, All Ye Faithful", 
                    "My Favorite Things", 
                    "Jingle Bells"
                    ],
                answer: "Jingle Bells"
            },
            {
                id: 4,
                prompt: "How many women were at the very first Thanksgiving celebration?",
                options: [
                    "Ten", 
                    "None", 
                    "Four", 
                    "Eight"
                    ],
                answer: "Four"
            },
            {
                id: 5,
                prompt: "What professional football team has played almost every Thanksgiving since 1934?",
                options: [
                    "Detroit Lions", 
                    "Green Bay Packers", 
                    "Chicago Bears", 
                    "New England Patriots"
                    ],
                answer: "Detroit Lions"
            }
        ]
    },
        {
        name: "Web Frontend Development II ",
        questions: [
            {
                id: 1,
                prompt: "What happens when a fetch() request resolves with an HTTP status code of 404 (Not Found)?",
                options: [
                    "The promise resolves normally, and you must check response.ok or response.status to handle the HTTP error.", 
                    "It automatically throws a JavaScript network error and jumps directly to the .catch() block.", 
                    "It returns null from the awaited expression instead of a Response object.", 
                    "The browser throws a synchronous TypeError before the promise is even created."
                    ],
                answer: "The promise resolves normally, and you must check response.ok or response.status to handle the HTTP error."
            },
            {
                id: 2,
                prompt: "Which of the following statements is true regarding ES6 JavaScript modules loaded via <script type='module'>?",
                options: [
                        "Variables declared at the top level of a module are automatically attached to the global window object.", 
                        "Modules are automatically executed in strict mode and have their own local module scope.", 
                        "Modules are parsed and executed immediately in the main thread, blocking HTML document rendering by default.", 
                        "You can have multiple export default statements in a single module file as long as they have unique internal identifiers."
                        ],
                answer: "Modules are automatically executed in strict mode and have their own local module scope."
            },
            {
                id: 3,
                prompt: "What value is actually stored in localStorage if you run the code localStorage.setItem('user', { name: 'Alice' })?",
                options: [
                    "{'name':'Alice'} via automatic JSON serialization.", 
                    "A live JavaScript object reference that can be retrieved and mutated directly.", 
                    "The string '[object Object]' because non-string values are implicitly converted via .toString().", 
                    "A TypeError is thrown immediately by the Web Storage API during execution."
                    ],
                answer: "The string '[object Object]' because non-string values are implicitly converted via .toString()."
            },
            {
                id: 4,
                prompt: "In an event delegation pattern where a click listener is attached to a parent <ul> to handle clicks on child <li> items, what is the primary difference between event.target and event.currentTarget?",
                options: [
                    "event.target refers to the <ul> element, while event.currentTarget refers to the specific <li> that was clicked.", 
                    "event.target is read-only, whereas event.currentTarget can be reassigned during the event bubbling phase.", 
                    "Both properties always reference the exact same DOM node regardless of event bubbling.", 
                    "event.target is the actual element that was clicked, while event.currentTarget is the element the event listener is attached to."
                    ],
                answer: "event.target is the actual element that was clicked, while event.currentTarget is the element the event listener is attached to."
            },
            {
                id: 5,
                prompt: "In a client-side JavaScript MVC architecture, what is the primary responsibility of the Controller?",
                options: [
                    "Rendering the HTML/CSS presentation layer and handling direct DOM layout reflows.", 
                    "Handling user interaction events, requesting data updates from the Model, and instructing the View to re-render.", 
                    "Storing the application's persistent state and enforcing business logic rules independently of the UI.", 
                    "Managing network routing tables and server-side database migrations."
                ],
                answer: "Handling user interaction events, requesting data updates from the Model, and instructing the View to re-render."
            }
        ]
    },
        {
        name: "Web Services",
        questions: [
            {
                id: 1,
                prompt: "In an Express.js application using asynchronous route handlers (without a helper or Express 5 automatic rejection handling), what happens if you throw an error or return a rejected promise inside an async route handler without wrapping it in a try...catch block or passing it to next(err)?",
                options: [
                    "Express automatically catches it and returns a clean 500 JSON error response by default.", 
                    "It results in an unhandled promise rejection that can leave the HTTP request hanging or cause runtime issues if not forwarded to next(err).", 
                    "Express immediately terminates the Node.js cluster worker and reloads the entire application.", 
                    "The async engine implicitly converts the rejection into a 400 Bad Request status code."
                ],
                answer: "It results in an unhandled promise rejection that can leave the HTTP request hanging or cause runtime issues if not forwarded to next(err)."
            },
            {
                id: 2,
                prompt: "Which Mongoose model method is shorthand for finding a single document by its unique primary _id field?",
                options: [
                    "Model.findId()",
                    "Model.searchById()",
                    "Model.queryById()", 
                    "Model.findById()"
                ],
                answer: "Model.findById()"
            },
            {
                id: 3,
                prompt: "Which HTTP method is defined in REST architecture as idempotent, meaning that making the same request multiple times produces the same state on the server as making it once?",
                options: [
                    "PUT", 
                    "POST",
                    "CONNECT", 
                    "TRACE"
                ],
                answer: "PUT"
            },
            {
                id: 4,
                prompt: "In a standard JSON Web Token (JWT), which parts of the token are signed together to generate the signature component?",
                options: [
                    "The private key and the public key",
                    "The encoded Header and the encoded Payload",
                    "The user's plaintext password and database salt", 
                    "The HTTP Cookie header and User-Agent string"
                ],
                answer: "The encoded Header and the encoded Payload"
            },
            {
                id: 5,
                prompt: "When defining OpenAPI/Swagger specifications for a Node.js and Express Web Service, which data formats are natively and most commonly used to write API definitions?",
                options: [
                    "Compiled C++ header files (.h)", 
                    "Raw SQL DDL migration scripts",
                    "YAML or JSON", 
                    "Compiled WebAssembly binary modules (.wasm)"
                ],
                answer: "YAML or JSON"
            }
        ]
    },
        {
        name: "TypeScript",
        questions: [
            {
                id: 1,
                prompt: "What is the fundamental difference between the unknown type and the any type in TypeScript?",
                options: [
                    "unknown can only hold primitive values, while any can hold objects and arrays.", 
                    "any triggers full type-checking at runtime, whereas unknown bypasses compile-time checks entirely.",
                    "unknown is an alias for void, whereas any is an alias for never.", 
                    "unknown is a type-safe alternative to any; you cannot perform arbitrary operations on an unknown value without first narrowing or asserting its type"
                ],
                answer: "unknown is a type-safe alternative to any; you cannot perform arbitrary operations on an unknown value without first narrowing or asserting its type"
            },
            {
                id: 2,
                prompt: "TypeScript uses a structural type system (often called duck typing). What does this mean in practice?",
                options: [
                    "Two classes are only compatible if they explicitly inherit from the same base class or implement the identical named interface.", 
                    "Two types are compatible if they share the same shape (properties and types), regardless of their explicit names or declaration origins.",
                    "The compiler ignores all object shapes and defers all typing evaluations to runtime checks.", 
                    "You can only use objects that are explicitly instantiated from classes using the new keyword."
                ],
                answer: "Two types are compatible if they share the same shape (properties and types), regardless of their explicit names or declaration origins."
            },
            {
                id: 3,
                prompt: "What does the keyof operator do when applied to an interface or object type in TypeScript?",
                options: [
                    "• It returns an array of runtime string values containing the object's keys.", 
                    "It instantiates a new instance of an object using the type definition.",
                    "It produces a union type of string or number literal types representing the keys of the object type.", 
                    "It checks if a specific property exists inside a JSON string payload at runtime."
                ],
                answer: "It produces a union type of string or number literal types representing the keys of the object type."
            },
            {
                id: 4,
                prompt: "With strictNullChecks enabled in tsconfig.json, what happens if you declare a variable as let item: Question; and try to assign null or undefined to it?",
                options: [
                    "• The code compiles cleanly, but the variable defaults to an empty string at runtime.", 
                    "The compiler throws a type error because null and undefined are not assignable to standard types unless explicitly specified via a union.",
                    "The code automatically executes a fallback mechanism using the ?? operator to build an object template.", 
                    "TypeScript automatically throws a synchronous NullPointerException during compiler initialization."
                ],
                answer: "The compiler throws a type error because null and undefined are not assignable to standard types unless explicitly specified via a union."
            },
            {
                id: 5,
                prompt: "What is the primary benefit of using Generics (<T>) in TypeScript functions and classes?",
                options: [
                    "They increase performance by compiling the JavaScript code directly into binary code.", 
                    "They allow functions to dynamically update database schemas during script execution.",
                    "They force a function to only accept the native any wildcard type for execution efficiency.", 
                    "They allow you to create reusable components that work over a variety of types while still maintaining precise type safety and relationships between inputs and outputs."
                ],
                answer: "They allow you to create reusable components that work over a variety of types while still maintaining precise type safety and relationships between inputs and outputs."
            }
        ]
    },
        {
        name: "Baking",
        questions: [
            {
                id: 1,
                prompt: "What is the fundamental difference between using baking soda and baking powder in a batter or dough?",
                options:  [
                    "Baking soda requires heat to activate, while baking powder activates purely through mechanical mixing.", 
                    "Baking powder is purely organic, whereas baking soda is a synthetic laboratory chemical.",
                    "Baking soda requires an acidic ingredient to activate, while baking powder contains its own acid and only needs moisture and heat.", 
                    "Baking soda is exclusively used for yeast breads, while baking powder is used for laminated pastries."
                ],
                answer: "Baking soda requires an acidic ingredient to activate, while baking powder contains its own acid and only needs moisture and heat."
            },
            {
                id: 2,
                prompt: "What are the two specific proteins present in wheat flour that combine with water and mechanical kneading to form gluten?",
                options:  [
                    "Albumin and Globulin", 
                    "Gliadin and Glutenin",
                    "Casein and Whey", 
                    "Collagen and Gelatin"
                ],
                answer: "Gliadin and Glutenin"
            },
            {
                id: 3,
                prompt: "When making laminated doughs like croissants or puff pastry, what happens if the butter layer becomes too warm and melts into the dough before baking?",
                options:  [
                    "The pastry will rise twice as high because the melted fat absorbs more steam.", 
                    "The distinct layers collapse together, causing the pastry to turn out dense, heavy, and greasy instead of flaky.",
                    "The yeast will overactivate and ferment the dough into a sour sourdough block.", 
                    "The baking time drops by half because liquid fat conducts heat faster than solid fat."
                ],
                answer: "The distinct layers collapse together, causing the pastry to turn out dense, heavy, and greasy instead of flaky."
            },
            {
                id: 4,
                prompt: "Beyond providing sweetness, how does sugar affect the texture and tenderness of baked goods like cakes and cookies?",
                options:  [
                    "Sugar strengthens the gluten matrix, making cakes chewier and sturdier.", 
                    "Sugar accelerates protein coagulation, causing cakes to set faster in the oven/",
                    "Sugar dries out batters by acting as a powerful dehydrating agent.", 
                    "Sugar attracts water (hygroscopy), which delays gluten formation and egg protein coagulation, resulting in a softer, more tender crumb."
                ],
                answer: "Sugar attracts water (hygroscopy), which delays gluten formation and egg protein coagulation, resulting in a softer, more tender crumb."
            },
            {
                id: 5,
                prompt: "What is the primary purpose of 'blind baking' a pie crust?",
                options:  [
                    "Baking the pie crust inside a completely dark oven to prevent UV light degradation.", 
                    "Whipping air bubbles into the raw dough so it turns into a transparent meringue layer.",
                    "Pre-baking the crust (often weighted down) before adding wet fillings to prevent the bottom from becoming soggy.", 
                    "Rubbing the surface of the dough with coarse sugar crystals to obscure surface imperfections."
                ],
                answer: "Pre-baking the crust (often weighted down) before adding wet fillings to prevent the bottom from becoming soggy."
            }
        ]
    }
];

function displayCategories(): void {
    console.log("\n----- QUIZ GENERATOR -----");
    console.log("Available Quiz Categories:");

    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];

        if (!category) {
            continue;
        }

        const completed = quizProgress.isCompleted(category.name)
    ? " (Completed)"
    : "";

        console.log(`${i + 1}. ${category.name}${completed}`);;
    }

    console.log("0 to Exit");
}
// Promise<void> = This function will run asynchronously, and when it finishes, it won't give anything back.
async function startQuiz(category: QCategories): Promise<void> {
    let score = 0;

    console.log(`\nStarting ${category.name} Quiz!`);

    for (const question of category.questions) {
        console.log(`\n${question.prompt}`);

        for (let i = 0; i < question.options.length; i++) {
            console.log(`${i + 1}. ${question.options[i]}`);
        }

        const userAnswer = await rl.question("Enter your answer (1-4): ");

        const selectedAnswer = question.options[Number(userAnswer) - 1];

        if (selectedAnswer?.toLowerCase() === question.answer.toLowerCase()) {
            console.log("Correct!");
            score++;
        } else {
            console.log(`Incorrect! The correct answer is: ${question.answer}`);
        }
    }
    // Mark this quiz as completed
    quizProgress.markCompleted(category.name);

    console.log("\n----- QUIZ RESULTS -----");
    console.log(`Your score: ${score}/${category.questions.length}`);

    const playAgain = await rl.question(
    "\nWould you like to take another quiz? (y/n): "
);

if (playAgain.toLowerCase() === "y") {
    await main();
} else {
    console.log("Thanks for playing!");
    rl.close();
    return;
}
}

// Main program
async function main(): Promise<void> {

    displayCategories();

    const choice = await rl.question("\nChoose a quiz category (0 to exit): ");
    const selectedNumber = Number(choice);

    if (selectedNumber === 0) {
        console.log("Thanks for playing!");
        rl.close();
        return;
    }

    if (
        Number.isInteger(selectedNumber) &&
        selectedNumber >= 1 &&
        selectedNumber <= categories.length
    ) {
        const selectedCategory = categories[selectedNumber - 1];

        if (selectedCategory) {
            await startQuiz(selectedCategory);
        }
    } else {
        console.log("Invalid choice. Please try again.");
        await main();
    }
}
async function startRandomQuiz(): Promise<void> {
    // Randomly select a quiz category when the program opens
    const randomIndex = Math.floor(Math.random() * categories.length);
    const randomCategory = categories[randomIndex];

if (randomCategory) {
    console.log("\n----- QUIZ GENERATOR -----");
    console.log(`Today's quiz: ${randomCategory.name}`);

    await startQuiz(randomCategory);
} else {
    console.log("No quiz categories available.");
    rl.close();
}
}
startRandomQuiz();