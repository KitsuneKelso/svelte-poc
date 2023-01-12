<script>
	let experience = 'yes';
	let frameworks = ['React', 'Svelte', 'Vue'];
	let selected = ['React'];
</script>

<div style="display: flex; flex-direction: column; gap: 16px;">
	<div style="display: flex; flex-direction: column;">
		<span><b>Do you have experience with modern JS?</b></span>

		<label>
			<input type="radio" bind:group={experience} name="experience" value="yes" />
			Yes
		</label>
		<label>
			<input type="radio" bind:group={experience} name="experience" value="no" />
			No
		</label>
	</div>

	<div style="display: flex; flex-direction: column;">
		<span><b>Which frameworks have you used?</b></span>

		{#each frameworks as lib}
			<label>
				<input
					type="checkbox"
					bind:group={selected}
					name="frameworks"
					value={lib}
					disabled={experience === 'no'}
				/>
				{lib}
			</label>
		{/each}
	</div>

	<span
		><i>
			{#if experience === 'yes' && selected.length > 0}
				You have worked with {selected.length}
				{selected.length === 1 ? 'framework' : 'frameworks'}.
			{:else}
				You have NO experience!
			{/if}
		</i></span
	>
</div>
