<script>
	let options = [
		{ id: 'dk', text: 'Denmark' },
		{ id: 'fi', text: 'Finland' },
		{ id: 'no', text: 'Norway' },
		{ id: 'se', text: 'Sweden' }
	];

	let selected = options[3];
</script>

<div style="display: flex; flex-direction: column;">
	<span><b>Which Nordic country do you live in?</b></span>

	<!-- NOTE: Will pause and debug with comma-separated values:
	{@debug options, selected}
	-->

	<select bind:value={selected}>
		{#each options as country}
			<option value={country}>{country.text}</option>
		{/each}
	</select>
</div>
