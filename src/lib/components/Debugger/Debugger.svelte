<script lang="ts">
	export let entries: Record<string, any>;
</script>

<div class="debugger">
	<code><b><u>Debugger</u></b></code>
	{#each Object.entries(entries) as [key, value]}
		<code><b>{key}:</b> {value}</code>
	{/each}
</div>

<style>
	.debugger {
		position: fixed;
		bottom: 20px;
		right: 20px;
		left: 20px;
		display: flex;
		flex-direction: column;
		background: black;
		color: white;
		padding: 8px;
	}
</style>
