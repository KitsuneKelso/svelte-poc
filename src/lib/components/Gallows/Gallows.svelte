<script lang="ts">
	export let incorrectLetters: string[];
	$: numberOfGuesses = incorrectLetters.length;
</script>

<div>
	<div class="shape base" data-testid="gallows-base" />
	{#if numberOfGuesses > 0}
		<div class="shape vertical" data-testid="gallows-vertical" />
	{/if}
	{#if numberOfGuesses > 1}
		<div class="shape horizontal" data-testid="gallows-horizontal" />
	{/if}
	{#if numberOfGuesses > 2}
		<div class="shape diagonal" data-testid="gallows-diagonal" />
	{/if}
	{#if numberOfGuesses > 3}
		<div class="shape rope" data-testid="gallows-rope" />
	{/if}
	{#if numberOfGuesses > 4}
		<div class="shape head" data-testid="gallows-head" />
	{/if}
	{#if numberOfGuesses > 5}
		<div class="shape body" data-testid="gallows-body" />
	{/if}
	{#if numberOfGuesses > 6}
		<div class="shape arm left" data-testid="gallows-left-arm" />
		<div class="shape arm right" data-testid="gallows-right-arm" />
	{/if}
	{#if numberOfGuesses > 7}
		<div class="shape leg left" data-testid="gallows-left-leg" />
		<div class="shape leg right" data-testid="gallows-right-leg" />
	{/if}
</div>

<style>
	div {
		position: relative;
		width: 200px;
		height: 200px;
	}
	.shape {
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
	.leg {
		bottom: 80px;
		width: 2px;
		height: 24px;
	}
	.left {
		left: 124px;
		transform: rotate(20deg);
	}
	.right {
		left: 132px;
		transform: rotate(-20deg);
	}
</style>
