import { MAX_NUMBER_OF_GUESSES } from '$lib/constants';

const incorrectLetters = (word: string | null, guessedLetters: string[]) => {
	return guessedLetters.filter((letter) => !word?.toUpperCase().includes(letter));
};

const hasWon = (word: string | null, guessedLetters: string[]) => {
	if (!word || guessedLetters.length === 0) {
		return false;
	}

	const lettersInWord = word.toUpperCase().split('');
	return lettersInWord.every((v) => guessedLetters.includes(v));
};

const hasLost = (word: string | null, guessedLetters: string[]) => {
	const numberOfIncorrectGuesses = incorrectLetters(word, guessedLetters).length;
	return numberOfIncorrectGuesses >= MAX_NUMBER_OF_GUESSES;
};

export default { incorrectLetters, hasWon, hasLost };
