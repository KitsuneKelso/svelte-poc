import { render, screen } from '@testing-library/svelte';
import { describe } from 'vitest';
import Loading from '../Loading.svelte';

describe('Loading', () => {
	it('should show congratulation when player has won', () => {
		render(Loading);
		const message = screen.getByText('Loading new word...');
		expect(message).toBeInTheDocument();
	});
});
