<script lang="ts">
	import { letters } from '$lib/constants';
	import { isLetter } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';
	import Key from './Key.svelte';

	/** Disables all keys */
	export let disabled: boolean;
	/** Array of specifically disabled letter keys */
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

<!--
@component
Keyboard component with mouse and keyboard interaction.

__Usage:__

```tsx
<Keyboard on:keypress={handleKeypress} disabled={false} disabledLetters={['A', 'B', 'C']} />
```
The `on:keypress` event will return an event with a letter in the event detail:
```ts
event.detail.letter
```
-->

<svelte:window on:keydown={handleKeydown} />

<div>
	{#each letters as letter}
		<Key
			{letter}
			disabled={disabled || disabledLetters.includes(letter)}
			onClick={() => handleClick(letter)}
		/>
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 4px;
		max-width: 500px;
	}
</style>
