<script lang="ts">
	import { getWord } from '$lib/api';
	import { HangmanWord, Keyboard } from '$lib/components';
	import { hangmanGame } from '$lib/store';
	import type { KeypressEvent } from '$lib/types';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let loading = false;
	let error = false;

	const newGame = async () => {
		loading = true;
		try {
			hangmanGame.reset();
			const newWord = await getWord();
			hangmanGame.setNewWord(newWord);
			loading = false;
		} catch (e) {
			error = true;
			loading = false;
		}
	};

	const handleLetter = (event: KeypressEvent) => {
		const pressedLetter = event.detail.letter.toUpperCase();
		if (!$hangmanGame.guessedLetters.includes(pressedLetter)) {
			hangmanGame.guessLetter(pressedLetter);
		}
	};

	onMount(newGame);
</script>

<svelte:head>
	<title>Hangman</title>
	<meta name="description" content="Hangman game written using Svelte" />
</svelte:head>

<section>
	<div class="header">
		<span class="title">Svelte Hangman</span>
		<button on:click={newGame}>New Game</button>
	</div>

	{#if error}
		<p class="error">Something went wrong.</p>
	{/if}

	{#key $hangmanGame.word}
		<div class="word" in:fly={{ y: -20 }}>
			{#if loading || !$hangmanGame.word}
				<span><i>Loading new word...</i></span>
			{:else}
				<HangmanWord />
			{/if}
		</div>
	{/key}

	<div class="controls">
		<Keyboard on:keypress={handleLetter} />
	</div>
</section>

<div class="debugger">
	<code><u>Debugger</u></code>
	<code>Word: {$hangmanGame.word}</code>
	<code>Guessed: {$hangmanGame.guessedLetters}</code>
</div>

<style>
	section {
		border: 2px solid rebeccapurple;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		flex-grow: 1;
	}

	.header {
		border-bottom: 2px solid rebeccapurple;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 16px;
		box-sizing: border-box;
	}

	.title {
		font-size: 2em;
	}

	.error {
		color: red;
		font-weight: bold;
	}

	.word {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 8px;
		font-size: 2.4em;
	}

	.controls {
		flex-grow: 1;
		display: flex;
		align-items: flex-end;
	}

	.debugger {
		position: fixed;
		bottom: 20px;
		right: 20px;
		display: flex;
		flex-direction: column;
		background: black;
		color: white;
		padding: 8px;
	}
</style>
