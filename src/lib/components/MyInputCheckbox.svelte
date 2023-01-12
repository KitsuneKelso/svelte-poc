<script>
	let yes = false;
</script>

<div style="display: flex; flex-direction: column;">
	<span><b>Can we stay in touch?</b></span>
	<label>
		<input type="checkbox" bind:checked={yes} />
		Yes! Send me regular email spam
	</label>

	{#if yes}
		<span><i>Thank you. We will bombard your inbox and sell your personal details.</i></span>
	{:else}
		<span><i>You must opt-in to continue. If you're not paying, you're the product.</i></span>
	{/if}

	<button disabled={!yes}> Subscribe </button>
</div>
