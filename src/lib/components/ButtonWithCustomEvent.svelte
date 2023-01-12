<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function dispatchCustomEvent() {
		dispatch('myEvent', {
			text: 'Hello!'
		});
	}
</script>

<button on:click|preventDefault|stopPropagation={dispatchCustomEvent}> Click to say hello</button>
