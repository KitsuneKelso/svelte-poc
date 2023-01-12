<script lang="ts">
	import ButtonWrapper from './ButtonWrapper.svelte';

	function handleMessage(event: CustomEvent<any>) {
		console.log(event);
		alert(event.detail.text);
	}
</script>

<ButtonWrapper on:myEvent={handleMessage} />
