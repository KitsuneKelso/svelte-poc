<script>
	import { getWord } from '$lib/api';
	import MyInputKeyboard from '$lib/components/MyInputKeyboard.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let word = '';
	let error = false;

	onMount(async () => {
		try {
			const newWord = await getWord();
			word = newWord;
		} catch (e) {
			error = true;
		}
	});
</script>

<svelte:head>
	<title>Hangman</title>
	<meta name="description" content="Hangman game written using Svelte" />
</svelte:head>

<section>
	<h1>Svelte Hangman</h1>

	{#if error}
		<p class="error">Something went wrong.</p>
	{/if}

	<div class="word">
		{#if word.length === 0}
			<span><i>Loading, please wait...</i></span>
		{/if}
		{#key word}
			<span in:fly={{ y: -20 }}>{word}</span>
		{/key}
	</div>

	<div class="controls">
		<MyInputKeyboard />
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
