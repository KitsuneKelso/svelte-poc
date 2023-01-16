<script lang="ts">
	import { letters } from '$lib/constants';
	import { isLetter } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';
	import Key from './Key.svelte';

	export let disabled: boolean;
	export let disabledLetters: string[];

	const dispatch = createEventDispatcher();

	function dispatchKeypress(letter: string) {
		dispatch('keypress', { letter });
	}

	function handleClick(clickedKey: string) {
		dispatchKeypress(clickedKey);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (disabled || disabledLetters.includes(event.key)) {
			return;
		}

		if (isLetter(event.key)) {
			dispatchKeypress(event.key);
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="keyboard">
	{#each letters as letter}
		<Key
			{letter}
			disabled={disabled || disabledLetters.includes(letter)}
			onClick={() => handleClick(letter)}
		/>
	{/each}
</div>

<style>
	.keyboard {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 4px;
		max-width: 500px;
	}
</style>
