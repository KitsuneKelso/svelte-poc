import { letters, MAX_NUMBER_OF_GUESSES } from '$lib/constants';
import { describe, expect, it } from 'vitest';
import hangman from '../hangman';

describe('hangman', () => {
	it('should return the incorrectly guessed letters', () => {
		const word = 'sample';
		const guessedLetters = ['A', 'B', 'C', 'S'];

		const actual = hangman.incorrectLetters(word, guessedLetters);
		const expected = ['B', 'C'];

		expect(actual).toEqual(expected);
	});

	describe('when all letters in a word are guessed correctly', () => {
		it('should return the winning condition', () => {
			const word = 'sample';
			const firstGuess = ['S', 'A', 'M', 'P', 'L'];
			const secondGuess = ['S', 'A', 'M', 'P', 'L', 'E'];
			let hasWon: boolean;

			hasWon = hangman.hasWon(word, firstGuess);
			expect(hasWon).toBe(false);

			hasWon = hangman.hasWon(word, secondGuess);
			expect(hasWon).toBe(true);
		});
	});

	describe('when number of incorrect guesses crosses max threshold', () => {
		it('should return the losing condition', () => {
			const word = 'sample';
			const guessesBelowThreshold = letters.slice(0, MAX_NUMBER_OF_GUESSES + 1);
			const guessesAboveThreshold = letters.slice(0, MAX_NUMBER_OF_GUESSES + 2);
			let hasLost: boolean;

			hasLost = hangman.hasLost(word, guessesBelowThreshold);
			expect(hasLost).toBe(false);

			hasLost = hangman.hasLost(word, guessesAboveThreshold);
			expect(hasLost).toBe(true);
		});
	});
});
