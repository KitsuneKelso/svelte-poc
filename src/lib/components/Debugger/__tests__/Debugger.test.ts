import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Debugger from '..';

describe('Debugger', () => {
	it('should render the heading text', () => {
		render(Debugger, { entries: {} });
		const heading = screen.getByText('Debugger');
		expect(heading).toBeInTheDocument();
	});

	it('should render debug entries', () => {
		render(Debugger, {
			entries: {
				foo: 'bar',
				lorem: 'ipsum'
			}
		});

		const firstKey = screen.getByText('foo:');
		expect(firstKey).toBeInTheDocument();
		const firstValue = screen.getByText('bar');
		expect(firstValue).toBeInTheDocument();

		const secondKey = screen.getByText('lorem:');
		expect(secondKey).toBeInTheDocument();
		const secondValue = screen.getByText('ipsum');
		expect(secondValue).toBeInTheDocument();
	});
});
