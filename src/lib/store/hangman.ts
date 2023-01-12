import { writable } from 'svelte/store';

function createHangmanGame() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		set,
		update
	};
}

export const hangmanGame = createHangmanGame();
