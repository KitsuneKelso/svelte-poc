<script lang="ts">
	import { getWord } from '$lib/api';
	import { Keyboard } from '$lib/components';
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

	const handleClick = () => {
		newGame();
	};

	const handleLetter = (event: KeypressEvent) => {
		const pressedLetter = event.detail.letter;
		if (!$hangmanGame.guessedLetters.includes(pressedLetter)) {
			hangmanGame.guessLetter(event.detail.letter);
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
		<button on:click={handleClick}>New Game</button>
	</div>

	{#if error}
		<p class="error">Something went wrong.</p>
	{/if}

	<div class="word">
		{#if loading}
			<span in:fly={{ y: -20 }}><i>Loading new word...</i></span>
		{:else}
			{#key $hangmanGame.word}
				<span in:fly={{ y: -20 }}>{$hangmanGame.word}</span>
			{/key}
		{/if}
	</div>

	<div>
		<span>{$hangmanGame.guessedLetters}</span>
	</div>

	<div class="controls">
		<Keyboard on:keypress={handleLetter} />
	</div>
</section>

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
		align-items: center;
		justify-content: center;
		padding: 8px;
		font-size: 1.8em;
	}

	.controls {
		flex-grow: 1;
		display: flex;
		align-items: flex-end;
	}
</style>
