import { letters } from '$lib/constants';
import { describe, expect, it } from 'vitest';
import isLetter from '../isLetter';

describe('isLetter', () => {
	it('returns true when input is valid lower case letter', () => {
		letters.every((letter) => {
			const sut = isLetter(letter.toLowerCase());
			expect(sut).toBe(true);
		});
	});

	it('returns true when input is valid upper case letter', () => {
		letters.every((letter) => {
			const sut = isLetter(letter.toUpperCase());
			expect(sut).toBe(true);
		});
	});

	it('returns false when input is empty', () => {
		const sut = isLetter('');
		expect(sut).toBe(false);
	});

	it('returns false when input is longer than 1 character', () => {
		const sut = isLetter('anything');
		expect(sut).toBe(false);
	});

	it('returns false when input is invalid letter', () => {
		const sut = isLetter('ö');
		expect(sut).toBe(false);
	});
});
