<script>
	let name = 'Regent';
</script>

<div style="display: flex; flex-direction: row; align-items: center; gap: 8px;">
	<input bind:value={name} />
	<span>Hello {name}!</span>
</div>
