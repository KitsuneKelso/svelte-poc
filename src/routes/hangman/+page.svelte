<script lang="ts">
	import { getWord } from '$lib/api';
	import { HangmanWord, Keyboard } from '$lib/components';
	import { hangmanGame } from '$lib/store';
	import type { KeypressEvent } from '$lib/types';
	import { hangman } from '$lib/utils';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let error = false;
	let loading = false;

	$: incorrectLetters = hangman.incorrectLetters($hangmanGame.word, $hangmanGame.guessedLetters);
	$: hasWon = hangman.hasWon($hangmanGame.word, $hangmanGame.guessedLetters);
	$: hasLost = hangman.hasLost($hangmanGame.word, $hangmanGame.guessedLetters);

	const newGame = async () => {
		error = false;
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
		<span class="incorrect-letters">{incorrectLetters}</span>
		<Keyboard
			on:keypress={handleLetter}
			disabled={hasLost || hasWon}
			disabledLetters={$hangmanGame.guessedLetters}
		/>
	</div>
</section>

<div class="debugger">
	<code><b><u>Debugger</u></b></code>
	<code><b>Word:</b> {$hangmanGame.word ? $hangmanGame.word : ''}</code>
	<code><b>Guessed:</b> {$hangmanGame.guessedLetters}</code>
	<code><b>Has won:</b> {hasWon}</code>
	<code><b>Has lost:</b> {hasLost}</code>
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
		flex-direction: column;
		justify-content: flex-end;
		gap: 20px;
	}

	.incorrect-letters {
		color: red;
		font-size: 1.6em;
	}

	.debugger {
		position: fixed;
		bottom: 20px;
		right: 20px;
		left: 20px;
		display: flex;
		flex-direction: column;
		background: black;
		color: white;
		padding: 8px;
	}
</style>
