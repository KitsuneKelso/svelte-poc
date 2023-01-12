<script>
	import { getWord } from '$lib/api';
	import MyInputKeyboard from '$lib/components/MyInputKeyboard.svelte';
	import { onMount } from 'svelte';

	let word = '';

	onMount(async () => {
		const newWord = await getWord();
		word = newWord;
	});
</script>

<svelte:head>
	<title>Hangman</title>
	<meta name="description" content="Hangman game written using Svelte" />
</svelte:head>

<section>
	<h1>Svelte Hangman</h1>
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
</style>
