<script lang="ts">
	import letters from '../constants/letters';
	import { keyCount, timesReset } from '../store';

	export let value = '';

	function handleClick(clickedKey: string) {
		value = value + clickedKey;

		// store update
		keyCount.update((cur) => cur + 1);
	}

	export function clear() {
		value = '';

		// store reset
		keyCount.set(0);
		timesReset.update((cur) => cur + 1);
	}
</script>

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
