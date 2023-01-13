<script lang="ts">
	import { letters } from '$lib/constants';
	import { isLetter } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function dispatchKeypress(letter: string) {
		dispatch('keypress', { letter });
	}

	function handleClick(clickedKey: string) {
		dispatchKeypress(clickedKey);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (isLetter(event.key)) {
			dispatchKeypress(event.key);
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="keyboard">
	{#each letters as letter}
		<button class="key" on:click={() => handleClick(letter)}>
			<code>{letter}</code>
		</button>
	{/each}
</div>

<style>
	.keyboard {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 2px;
		max-width: 200px;
	}
</style>