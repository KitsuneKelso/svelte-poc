<script>
	/*
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	*/

	import MyButton from '../components/MyButton.svelte';
	import MyInputText from '../components/MyInputText.svelte';
	import MyInputNumber from '../components/MyInputNumber.svelte';
	import MyInputCheckbox from '../components/MyInputCheckbox.svelte';
	import MyInputGroup from '../components/MyInputGroup.svelte';
	import MyInputSelect from '../components/MyInputSelect.svelte';
	import MyInputKeyboard from '../components/MyInputKeyboard.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div style="display: flex; flex-direction: column; gap: 16px;">
		<MyInputKeyboard />
		<MyButton />
		<MyInputText />
		<MyInputNumber />
		<MyInputCheckbox />
		<MyInputGroup />
		<MyInputSelect />
	</div>

	<!--
		<h1>
			<span class="welcome">
				<picture>
					<source srcset={welcome} type="image/webp" />
					<img src={welcome_fallback} alt="Welcome" />
				</picture>
			</span>

			to your new<br />SvelteKit app
		</h1>
		<h2>
			try editing <strong>src/routes/+page.svelte</strong>
		</h2>
		<Counter />
	-->
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	/*
	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
	*/
</style>
