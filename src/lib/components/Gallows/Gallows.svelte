<script lang="ts">
	export let incorrectLetters: string[];
	$: numberOfGuesses = incorrectLetters.length;
</script>

<div class="gallows">
	<div class="gallows-piece base" />
	{#if numberOfGuesses > 0}
		<div class="gallows-piece vertical" />
	{/if}
	{#if numberOfGuesses > 1}
		<div class="gallows-piece horizontal" />
	{/if}
	{#if numberOfGuesses > 2}
		<div class="gallows-piece diagonal" />
	{/if}
	{#if numberOfGuesses > 3}
		<div class="gallows-piece rope" />
	{/if}
	{#if numberOfGuesses > 4}
		<div class="gallows-piece head" />
	{/if}
	{#if numberOfGuesses > 5}
		<div class="gallows-piece body" />
	{/if}
	{#if numberOfGuesses > 6}
		<div class="gallows-piece arm left-arm" />
		<div class="gallows-piece arm right-arm" />
	{/if}
	{#if numberOfGuesses > 7}
		<div class="gallows-piece leg left-leg" />
		<div class="gallows-piece leg right-leg" />
	{/if}
</div>

<style>
	.gallows {
		position: relative;
		width: 200px;
		height: 200px;
	}
	.gallows-piece {
		position: absolute;
		background-color: black;
	}
	.base {
		bottom: 20px;
		width: 100%;
		height: 2px;
	}
	.vertical {
		left: 30px;
		bottom: 20px;
		width: 2px;
		height: 160px;
	}
	.horizontal {
		left: 30px;
		bottom: 180px;
		width: 100px;
		height: 2px;
	}
	.diagonal {
		left: 27px;
		bottom: 169px;
		width: 30px;
		height: 2px;
		transform: rotate(-45deg);
	}
	.rope {
		bottom: 150px;
		left: 128px;
		height: 30px;
		width: 2px;
	}
	.head {
		bottom: 130px;
		left: 118px;
		height: 21px;
		width: 21px;
		background: none;
		border: 2px solid black;
		border-radius: 50%;
		box-sizing: border-box;
	}
	.body {
		bottom: 100px;
		left: 128px;
		width: 2px;
		height: 30px;
	}
	.arm {
		bottom: 105px;
		width: 2px;
		height: 20px;
	}
	.left-arm {
		left: 124px;
		transform: rotate(20deg);
	}
	.right-arm {
		left: 132px;
		transform: rotate(-20deg);
	}
	.leg {
		bottom: 80px;
		width: 2px;
		height: 24px;
	}
	.left-leg {
		left: 124px;
		transform: rotate(20deg);
	}
	.right-leg {
		left: 132px;
		transform: rotate(-20deg);
	}
</style>
