import { endpoints } from '$lib/constants';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import getWord from '../getWord';

describe('getWord', () => {
	describe('when word is included in response', () => {
		beforeEach(() => {
			global.fetch = vi
				.fn()
				.mockReturnValue({ then: vi.fn().mockReturnValue({ word: 'anything' }) });
		});

		it('should fetch a word from the correct endpoint', () => {
			expect(fetch).not.toHaveBeenCalled();

			getWord();

			expect(fetch).toHaveBeenCalledTimes(1);
			expect(fetch).toHaveBeenCalledWith(endpoints.randomWord, {
				headers: { 'X-Api-Key': expect.anything() }
			});
		});
	});

	describe('when request fails', () => {
		beforeEach(() => {
			global.fetch = vi.fn().mockRejectedValue({});
		});

		it('should throw an error', () => {
			expect(fetch).not.toHaveBeenCalled();

			expect(getWord()).rejects.toStrictEqual({});
			expect(fetch).toHaveBeenCalledTimes(1);
		});
	});
});
