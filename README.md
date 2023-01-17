# Svelte Proof of Concept App

Hi and welcome! This is a simple PoC running [Svelte](https://svelte.dev/).

## Prerequisites

To get started, [generate a new API Key for the API Ninjas Directory](https://api-ninjas.com/profile).

Copy this key and create a new file in the root of this project named:

### `.env.local`

In this file, add your API Key by replacing `<YOU_API_KEY_HERE>` with your key:

```js
VITE_API_KEY=<YOU_API_KEY_HERE>
```

## Installation

Install all required dependencies by running:

```bash
npm install
```

Make sure you have the API key set up as previously stated, and then you're ready to rock! 😎

## Developing

Start the app by running:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open

# or just the shorthand
npm start
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Routes

These are the routes besides the standard Svelte routes that I have set up.

### /hangman

This is a simple implementation of [Hangman, the classic guessing game](<https://en.wikipedia.org/wiki/Hangman_(game)>). A random word will be fetched from [the API Ninjas Random Word endpoint](https://api-ninjas.com/api/randomword).

#### Debugging

When visiting the `/hangman` route, simply add the `?debugger` query parameter to get the debugger console for the game to appear: [/hangman?debugger](http://127.0.0.1:5173/hangman?debugger)
