<script lang="ts">
	/** Label displayed on key */
	export let letter: string;
	/** Disable user input for key */
	export let disabled: boolean;
	/** Function executed when key is pressed */
	export let onClick: () => void;
</script>

<!--
@component
Styled `button` for individual keyboard keys

__Usage:__
```tsx
<Key letter="F" disabled={false} onClick={handleClick} />
```
-->

<div class:disabled>
	<button {disabled} on:click={onClick}>
		<code>{letter}</code>
	</button>
</div>

<style>
	div {
		box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
	}

	.disabled {
		box-shadow: none;
	}

	button {
		background: white;
		border: 2px solid black;
		border-radius: 4px;
		box-shadow: inset 1px 1px 10px rgba(0, 0, 0, 0.3);
		color: black;
		cursor: pointer;
		font-size: 30px;
		font-weight: bold;
		width: 50px;
		height: 50px;
		transition: 0.2s all;
	}

	button:focus,
	button:hover {
		background: black;
		color: white;
		box-shadow: inset -1px -1px 10px rgba(255, 255, 255, 0.7);
	}

	button:disabled {
		background-color: lightgrey;
		border-color: darkgray;
		box-shadow: inset 1px 1px 8px rgba(0, 0, 0, 0.2);
		color: grey;
		cursor: not-allowed;
		opacity: 0.7;
	}
</style>
