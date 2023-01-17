import { endpoints } from '$lib/constants';

const getWord = async () => {
	const API_KEY = import.meta.env.VITE_API_KEY;

	const response = await fetch(endpoints.randomWord, {
		headers: { 'X-Api-Key': API_KEY }
	}).then((res) => res.json());

	if (response.word) {
		return response.word;
	} else {
		throw new Error('Failed to fetch a word');
	}
};

export default getWord;
