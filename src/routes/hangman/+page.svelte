<script>
	import { getWord } from '$lib/api';
	import MyInputKeyboard from '$lib/components/MyInputKeyboard.svelte';
	import { onMount } from 'svelte';

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

	<p>{word}</p>
	<MyInputKeyboard />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.error {
		color: red;
		font-weight: bold;
	}
</style>
