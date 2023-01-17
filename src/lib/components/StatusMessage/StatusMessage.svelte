<script lang="ts">
	export let word: string | null;
	export let hasWon: boolean;
	export let hasLost: boolean;
</script>

<span>
	{#if hasLost}
		Game over! The word was: <b>{word}</b>
	{:else if hasWon}
		Congratulations, you guessed the word!
	{:else}
		&nbsp;
	{/if}
</span>

<style>
	span {
		font-size: 1.6em;
	}
</style>
