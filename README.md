🎲 Tenzies – React Dice Game

An interactive dice game built using React.js, where the objective is to roll ten dice until all of them display the same number.

Players can hold individual dice to preserve their values between rolls and gradually work towards the winning combination.

🌐 Live Demo

Live Application: https://tenzies-kohl-psi.vercel.app/

📸 Project Overview

Tenzies is a simple dice game with an interactive interface. Players start with ten randomly generated dice and can select individual dice to hold their current values while rolling the remaining dice.

The game automatically detects when all ten dice display the same number and are held. Once the winning condition is achieved, a victory message and a custom confetti animation are displayed.

✨ Features

- Generates ten random dice at the beginning of the game.
- Allows players to hold and unhold individual dice.
- Rolls only the dice that are not held.
- Automatically detects the winning condition.
- Displays a victory message when the game is completed.
- Includes a custom confetti celebration effect.
- Provides a New Game option to restart.
- Responsive interface for mobile devices and smaller screens.
- Includes accessibility attributes for interactive elements.

🎮 How to Play

1. Start the game with ten randomly generated dice.
2. Click the Roll button to generate new values for unheld dice.
3. Click any die to hold its current value.
4. Continue rolling until all ten dice display the same number.
5. Make sure all ten dice are held to complete the game.
6. Once you win, click New Game to start again.

🛠️ Technologies Used

Technology| Purpose
React.js| Building the user interface and managing application state
JavaScript (ES6+)| Game logic and data manipulation
CSS3| Styling, responsive layout and animations
Vite| Development environment and build tooling
HTML5| Application structure

📂 Project Structure

The project is organized into the following directories and files:

- public/
  
  - "favicon.svg" – Application favicon.
  - "icons.svg" – SVG icons.

- src/
  
  - assets/
    - "react.svg" – React asset included in the project.
  - "App.jsx" – Main application component containing the game logic and state management.
  - "Die.jsx" – Reusable component for displaying and interacting with individual dice.
  - "Confetti.jsx" – Component responsible for generating the custom confetti effect.
  - "index.css" – Application styling, responsive layouts and confetti animations.
  - "main.jsx" – React application entry point.

- "index.html" – Main HTML document.

- "package.json" – Project dependencies and scripts.

- "vite.config.js" – Vite configuration.

- "eslint.config.js" – ESLint configuration.

- "README.md" – Project documentation.

⚛️ React Concepts Practiced

This project provided practical experience with several important React concepts.

1. useState

Used to manage the dice array, including the current value and held status of each die.

const [dice, setDice] = useState(() => generateAllNewDice())

2. useEffect

Used to perform an action when the winning condition changes, specifically focusing the game button after winning.

3. useRef

Used to access the game button directly through its DOM reference.

4. Props

Used to pass dice values, held states and event-handling functions from the parent component to individual Die components.

5. List Rendering

Used JavaScript's ".map()" method to render multiple dice from an array of objects.

6. Conditional Rendering

Used to display different content depending on the current game state, including:

- Game instructions before winning.
- The "You Won Game!" message after winning.
- The confetti animation when the winning condition is achieved.
- The New Game button after completing the game.

7. Immutable State Updates

Used the JavaScript spread operator and array mapping to update dice without directly modifying existing state.

8. Array Methods

Used ".every()" to check whether all dice satisfy the winning conditions.

9. useMemo

Used in the Confetti component to generate and retain the confetti configuration during the component's lifetime.

🏆 Game Logic – Winning Condition

The player wins when two conditions are satisfied:

- All ten dice are held.
- All ten dice have the same numerical value.

The application checks these conditions using JavaScript's ".every()" method.

const gameWon =
  dice.every(die => die.isHeld) &&
  dice.every(die => die.value === dice[0].value)

Once the condition becomes true, the application displays the victory message, triggers the confetti animation and changes the main button to New Game.

🛠️ Custom Improvements & Modifications

Apart from following the course tutorial, I made additional modifications to improve the application's user experience and implementation.

1. Custom Responsive UI

Customized the original interface to provide a better experience for mobile users and smaller-screen devices.

Improvements include:

- Added custom CSS media queries for mobile responsiveness.
- Adjusted layouts, spacing and font sizes for smaller screens.
- Modified dice dimensions and gaps to maintain a balanced layout.
- Added additional styling adjustments for very small mobile screens.

2. Custom Confetti Effect

The original tutorial included a confetti effect that required an external package.

Instead of depending on an additional package, I implemented a custom confetti effect with AI assistance.

Improvements include:

- Created a separate React component for the confetti effect.
- Generated 80 individual confetti pieces.
- Used randomized positions, animation delays, durations and rotations.
- Implemented falling animations using CSS keyframes.
- Integrated the effect with the game's winning condition.

This approach allowed me to understand how simple animations can be created using React components and CSS without relying on an external animation package.

3. Conditional Victory Message

Added conditional rendering to display the "You Won Game!" message when the player successfully completes the game.

- Replaces the normal game instructions after winning.
- Displays a victory message based on the game state.
- Changes the main button from "Roll" to "New Game".
- Triggers the confetti animation when the winning condition is satisfied.

These modifications helped me explore responsive design, component-based animations, conditional rendering and improving the overall user experience.

🔮 Future Improvements

Some features that could be added in future versions:

- Add a roll counter to track the number of attempts.
- Introduce a game timer.
- Track the best completion time.
- Add keyboard controls.
- Store previous game statistics.
- Add automated tests for game logic.
- Further improve accessibility and user experience.

📚 Learning & Acknowledgment

This project was developed as part of my React learning journey by following a course tutorial.

The original project concept and tutorial guidance were provided by the course. I implemented the project while learning and practicing React fundamentals.

Along with the tutorial implementation, I made additional modifications to the responsive UI, implemented a custom confetti effect with AI assistance, and added conditional victory messaging.

The main objective of this project was to gain practical experience with React Hooks, state management, component communication, event handling and interactive UI development.

👨‍💻 Author

Harsh Bakraniya

- GitHub: https://github.com/HarshBakraniya/

---

⭐ Feel free to explore the repository, try the live game and share your feedback!
