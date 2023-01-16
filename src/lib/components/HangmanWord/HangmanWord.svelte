<script lang="ts">
	import { hangmanGame } from '$lib/store';
	import Letter from './Letter.svelte';

	export let onFinalGuess: boolean;
	export let hasLost: boolean;
	export let hasWon: boolean;

	let { word } = $hangmanGame;
	let letters = word?.split('');
</script>

<div class="hangman-word" class:onFinalGuess class:hasLost class:hasWon>
	{#if letters && letters.length > 0}
		{#each letters as letter}
			<Letter {letter} />
		{/each}
	{/if}
</div>

<style>
	@keyframes warning {
		0%,
		100% {
			color: black;
		}
		50% {
			color: red;
		}
	}
	.hangman-word {
		display: flex;
		gap: 8px;
	}

	.onFinalGuess {
		animation: warning 1s infinite;
	}

	.hasLost {
		color: red;
	}

	.hasWon {
		color: green;
	}
</style>
