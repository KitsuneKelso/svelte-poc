import { writable } from 'svelte/store';

function createKeyCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => update((cur) => cur + 1),
		decrement: () => update((cur) => cur - 1),
		reset: () => set(0)
	};
}

export const keyCount = createKeyCount();
