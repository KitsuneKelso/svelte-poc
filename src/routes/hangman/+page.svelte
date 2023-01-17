<script lang="ts">
	import { page } from '$app/stores';
	import { getWord } from '$lib/api';
	import {
		Debugger,
		Gallows,
		HangmanWord,
		Keyboard,
		Loading,
		StatusMessage
	} from '$lib/components';
	import { MAX_NUMBER_OF_GUESSES } from '$lib/constants';
	import { hangmanGame } from '$lib/store';
	import type { KeypressEvent } from '$lib/types';
	import { hangman } from '$lib/utils';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let error = false;
	let loading = false;

	$: word = $hangmanGame.word;
	$: guessedLetters = $hangmanGame.guessedLetters;
	$: incorrectLetters = hangman.incorrectLetters(word, guessedLetters);
	$: onFinalGuess = incorrectLetters.length === MAX_NUMBER_OF_GUESSES - 1;
	$: hasWon = hangman.hasWon(word, guessedLetters);
	$: hasLost = hangman.hasLost(word, guessedLetters);

	const isDebugging = $page.url.searchParams.has('debugger');

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
		if (!guessedLetters.includes(pressedLetter)) {
			hangmanGame.guessLetter(pressedLetter);
		}
	};

	onMount(newGame);
</script>

<header>
	<span class="title">Svelte Hangman</span>
	<button on:click={newGame}>New Game</button>
</header>

{#if error}
	<p in:fly={{ y: 200 }} class="error">Something went wrong.</p>
{/if}

{#key word}
	<div class="word" in:fly={{ y: -20 }}>
		{#if loading}
			<Loading />
		{:else}
			<HangmanWord {onFinalGuess} {hasLost} {hasWon} />
		{/if}
	</div>
{/key}

<Gallows {incorrectLetters} />
<StatusMessage {word} {hasWon} {hasLost} />

<div class="controls">
	<span class="incorrect-letters">{incorrectLetters}</span>
	<Keyboard
		on:keypress={handleLetter}
		disabled={hasLost || hasWon}
		disabledLetters={guessedLetters}
	/>
</div>

{#if isDebugging}
	<Debugger entries={{ word, guessedLetters, hasWon, hasLost }} />
{/if}

<style>
	header {
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
		padding: 8px;
		font-size: 2.4em;
	}

	.controls {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		gap: 20px;
		padding-bottom: 40px;
	}

	.incorrect-letters {
		color: red;
		font-size: 1.6em;
	}
</style>
