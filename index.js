import { generateTextAndImage } from "./utils.js"

// 1. Change the value of the variable to your name
let name = "xcean"

// 2. Change the value of the variable to your favorite activity
let favoriteActivity = "floating"

// 3. Assign the favoritePlace variable your favorite place
// I.e. city, mountain, pub, forrest, beach, Manhattan, etc.
let favoritePlace = "seaside"

// 4. Configure the AI by setting a temperature from 0 to 1
// The higher temperature, the more random & experimental output
let temperature = 0.3

// Optional: delete "avatar.jpg" and add a photo of yourself
// (remember to use "avatar.jpg" as the name of your photo)

generateTextAndImage(name, favoriteActivity, favoritePlace, temperature)


// How to run:
// Make sure you have an index.html file in the poetic_phrase_generator folder that includes a script tag for index.js.
// Open a terminal, navigate to the poetic_phrase_generator directory.
// Start a simple HTTP server. For example, using Python:
// python3 -m http.server
// Open your browser and go to http://localhost:8000