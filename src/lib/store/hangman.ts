import { writable } from 'svelte/store';

interface hangmanStore {
	word: null | string;
	guessedLetters: string[];
}

const initialState: hangmanStore = {
	word: null,
	guessedLetters: []
};

function createHangmanGame() {
	const { subscribe, set, update } = writable<hangmanStore>(initialState);

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

	return {
		subscribe,
		setNewWord,
		guessLetter,
		reset: () => set(initialState)
	};
}

export const hangmanGame = createHangmanGame();
