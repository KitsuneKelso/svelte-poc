<script lang="ts">
	import { hangmanGame } from '$lib/store';
	import { fly } from 'svelte/transition';

	export let letter: string;

	$: guessed = $hangmanGame.guessedLetters?.includes(letter.toUpperCase());
</script>

{#key guessed}
	<code in:fly={{ y: 20 }}>
		{#if guessed}
			{letter.toUpperCase()}
		{:else}
			_
		{/if}
	</code>
{/key}
