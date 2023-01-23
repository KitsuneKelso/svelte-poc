import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import { describe } from 'vitest';
import StatusMessage from '../StatusMessage.svelte';

describe('StatusMessage', () => {
	it('should show congratulation when player has won', () => {
		render(StatusMessage, { word: 'something', hasWon: true, hasLost: false });
		const congratulation = screen.getByText('Congratulations, you guessed the word!');
		expect(congratulation).toBeInTheDocument();
	});

	it('should reveal the word when player has lost', () => {
		render(StatusMessage, { word: 'something', hasWon: false, hasLost: true });
		const gameOver = screen.getByText('Game over! The word was:');
		const word = screen.getByText('something');
		expect(gameOver).toBeInTheDocument();
		expect(word).toBeInTheDocument();
	});
});
