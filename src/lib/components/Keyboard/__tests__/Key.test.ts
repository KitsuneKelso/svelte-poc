import { fireEvent, render, screen } from '@testing-library/svelte';
import { vi } from 'vitest';
import Key from '../Key.svelte';

describe('Key', () => {
	it('should render the expected component', () => {
		const letter = 'not actually just a letter';

		render(Key, { letter, disabled: false, onClick: vi.fn() });

		expect(screen.getByText(letter)).toBeInTheDocument();
	});

	it('should call onClick when button is clicked', async () => {
		const mockedClick = vi.fn();

		render(Key, { letter: 'F', disabled: false, onClick: mockedClick });
		const button = screen.getByRole('button');

		expect(mockedClick).not.toHaveBeenCalled();

		await fireEvent.click(button);

		expect(mockedClick).toHaveBeenCalledTimes(1);
	});
});
