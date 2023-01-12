<script>
	let age = 0;
	let year = 2023;
</script>

<div style="display: flex; flex-direction: column; gap: 16px;">
	<div style="display: flex; flex-direction: column;">
		<span><b>How old are you?</b></span>
		<input type="nuber" bind:value={age} />
	</div>

	<div style="display: flex; flex-direction: column;">
		<span><b>If the year is {year}:</b></span>
		<span>You were probably born in {year - age}</span>
	</div>
</div>
