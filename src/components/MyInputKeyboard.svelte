<script lang="ts">
	import { onDestroy } from 'svelte';
	import Keyboard from './Keyboard.svelte';
	import { keyCount, timesReset } from '../store';

	let input = '';
	let keyboard: {
		clear: () => void;
	};

	/* --- store start --- */
	let keysTyped = 0;
	const unsubscribe = keyCount.subscribe((val) => {
		keysTyped = val;
	});

	onDestroy(unsubscribe);
	/* ---- store end ---- */
</script>

<div class="container">
	<div class="output">
		<div class="display">{input}</div>
		<button on:click={keyboard.clear}>Clear</button>
	</div>

	<!-- Manual subscription -->
	<span><i>Letters written:</i> {keysTyped}</span>

	<!-- Auto-subscription -->
	<span><i>Times reset:</i> {$timesReset}</span>

	<Keyboard bind:value={input} bind:this={keyboard} />
</div>

<style>
	.container {
		border: 1px solid black;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 8px;
	}

	.output {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: 4px;
		width: 100%;
		max-width: 200px;
	}

	.display {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		max-width: 100px;
		height: 20px;
		padding: 2px 8px;
		background-color: black;
		color: white;
	}
</style>
