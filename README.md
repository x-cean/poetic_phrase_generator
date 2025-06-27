# Poetic Phrase Generator

A web app that generates poetic phrases in the style of Oscar Wilde, paired with a relevant Unsplash image, based on your favorite activity and place.

## Features

- Generates a poetic phrase using OpenAI's API
- Fetches a random Unsplash image based on your input
- Stores prompts and results in local storage for efficiency

## Setup

1. Clone the repository.
2. Ensure you have Python 3 installed (for serving the site locally).
3. In the project directory, run: 'python3 -m http.server'
4. Open your browser and go to [http://localhost:8000](http://localhost:8000).

## Project Structure

- `index.html` — Main HTML file
- `index.js` — Entry point JavaScript
- `utils.js` — Contains logic for fetching images and generating quotes

## Usage

1. Enter your name, favorite activity, and favorite place.
2. Click the generate button.
3. View your personalized poetic phrase and background image.

## Dependencies

- Uses [Scrimba Unsplash API](https://apis.scrimba.com/unsplash/photos/random/)
- Uses [Scrimba OpenAI API](https://apis.scrimba.com/openai/v1/completions)

## License

MIT