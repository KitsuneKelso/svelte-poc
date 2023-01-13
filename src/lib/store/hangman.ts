import { writable } from 'svelte/store';

interface hangmanStore {
	guessedLetters: string[];
}

function createHangmanGame() {
	const { subscribe, set, update } = writable<hangmanStore>({
		guessedLetters: []
	});

	const guessLetter = (letter: string) => {
		update((self) => {
			self.guessedLetters.push(letter);
			return self;
		});
	};

	return {
		subscribe,
		set,
		update,
		guessLetter
	};
}

export const hangmanGame = createHangmanGame();
