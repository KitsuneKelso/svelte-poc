import { writable } from 'svelte/store';

interface hangmanStore {
	word: null | string;
	guessedLetters: string[];
}

function createHangmanGame() {
	const { subscribe, set, update } = writable<hangmanStore>({
		word: null,
		guessedLetters: []
	});

	const setNewWord = (word: string) => {
		update((self) => {
			self.word = word;
			return self;
		});
	};

	const guessLetter = (letter: string) => {
		update((self) => {
			self.guessedLetters.push(letter.toUpperCase());
			return self;
		});
	};

	const reset = () => set({ word: null, guessedLetters: [] });

	return {
		subscribe,
		setNewWord,
		guessLetter,
		reset
	};
}

export const hangmanGame = createHangmanGame();
