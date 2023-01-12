<script>
	import ButtonWithCustomEvent from './ButtonWithCustomEvent.svelte';
</script>

<div style="border: 2px solid red; padding: 10px;">
	<ButtonWithCustomEvent on:myEvent />
</div>
