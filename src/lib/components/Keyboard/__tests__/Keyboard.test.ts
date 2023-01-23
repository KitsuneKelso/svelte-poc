import '@testing-library/jest-dom';
import { letters } from '$lib/constants';
import { render, screen } from '@testing-library/svelte';
import { describe } from 'vitest';
import Keyboard from '..';

describe('Keyboard', () => {
	it('should render all letters in keyboard', () => {
		render(Keyboard, { disabled: false, disabledLetters: [] });

		letters.forEach((letter) => {
			expect(screen.getByText(letter)).toBeInTheDocument();
		});
	});
});
