import { render, screen } from '@testing-library/svelte';
import { describe } from 'vitest';
import Gallows from '..';

describe('Gallows', () => {
	it('should render base', () => {
		render(Gallows, { incorrectLetters: [] });
		expect(screen.queryByTestId('gallows-base')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-vertical')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-horizontal')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-diagonal')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-rope')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-head')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-body')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-left-arm')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-right-arm')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-left-leg')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-right-leg')).not.toBeInTheDocument();
	});

	it('should render the first guess', () => {
		render(Gallows, { incorrectLetters: ['A'] });
		expect(screen.queryByTestId('gallows-base')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-vertical')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-horizontal')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-diagonal')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-rope')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-head')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-body')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-left-arm')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-right-arm')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-left-leg')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-right-leg')).not.toBeInTheDocument();
	});

	it('should render the second guess', () => {
		render(Gallows, { incorrectLetters: ['A', 'B'] });
		expect(screen.queryByTestId('gallows-base')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-vertical')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-horizontal')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-diagonal')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-rope')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-head')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-body')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-left-arm')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-right-arm')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-left-leg')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-right-leg')).not.toBeInTheDocument();
	});

	it('should render the third guess', () => {
		render(Gallows, { incorrectLetters: ['A', 'B', 'C'] });
		expect(screen.queryByTestId('gallows-base')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-vertical')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-horizontal')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-diagonal')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-rope')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-head')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-body')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-left-arm')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-right-arm')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-left-leg')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-right-leg')).not.toBeInTheDocument();
	});

	it('should render the fourth guess', () => {
		render(Gallows, { incorrectLetters: ['A', 'B', 'C', 'D'] });
		expect(screen.queryByTestId('gallows-base')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-vertical')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-horizontal')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-diagonal')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-rope')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-head')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-body')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-left-arm')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-right-arm')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-left-leg')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-right-leg')).not.toBeInTheDocument();
	});

	it('should render the fifth guess', () => {
		render(Gallows, { incorrectLetters: ['A', 'B', 'C', 'D', 'E'] });
		expect(screen.queryByTestId('gallows-base')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-vertical')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-horizontal')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-diagonal')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-rope')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-head')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-body')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-left-arm')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-right-arm')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-left-leg')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-right-leg')).not.toBeInTheDocument();
	});

	it('should render the sixth guess', () => {
		render(Gallows, { incorrectLetters: ['A', 'B', 'C', 'D', 'E', 'F'] });
		expect(screen.queryByTestId('gallows-base')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-vertical')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-horizontal')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-diagonal')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-rope')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-head')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-body')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-left-arm')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-right-arm')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-left-leg')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-right-leg')).not.toBeInTheDocument();
	});

	it('should render the seventh guess', () => {
		render(Gallows, { incorrectLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G'] });
		expect(screen.queryByTestId('gallows-base')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-vertical')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-horizontal')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-diagonal')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-rope')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-head')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-body')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-left-arm')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-right-arm')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-left-leg')).not.toBeInTheDocument();
		expect(screen.queryByTestId('gallows-right-leg')).not.toBeInTheDocument();
	});

	it('should render the eigth guess', () => {
		render(Gallows, { incorrectLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] });
		expect(screen.queryByTestId('gallows-base')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-vertical')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-horizontal')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-diagonal')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-rope')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-head')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-body')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-left-arm')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-right-arm')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-left-leg')).toBeInTheDocument();
		expect(screen.queryByTestId('gallows-right-leg')).toBeInTheDocument();
	});
});
