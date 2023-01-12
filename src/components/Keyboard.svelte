<script lang="ts">
	import { isLetter } from '../utils';
	import letters from '../constants/letters';
	import { keyCount } from '../store';

	export let value = '';

	function handleClick(clickedKey: string) {
		value = value + clickedKey;
		keyCount.increment();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Backspace' && value.length > 0) {
			value = value.slice(0, -1);
			keyCount.decrement();
		}

		if (isLetter(event.key)) {
			value = value + event.key.toUpperCase();
			keyCount.increment();
		}
	}

	export function clear() {
		value = '';
		keyCount.reset();
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="keyboard">
	{#each letters as letter}
		<button class="key" class:typed={value.includes(letter)} on:click={() => handleClick(letter)}>
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

	.key {
		background-color: white;
		color: black;
	}

	.typed {
		background-color: black;
		color: white;
	}
</style>
