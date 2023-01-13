<script lang="ts">
	import { hangmanGame } from '$lib/store';
	import Letter from './Letter.svelte';

	let { word } = $hangmanGame;
	let letters = word?.split('');
</script>

<div class="hangman-word">
	{#if letters && letters.length > 0}
		{#each letters as letter}
			<Letter {letter} />
		{/each}
	{/if}
</div>

<style>
	.hangman-word {
		display: flex;
		gap: 8px;
	}
</style>
