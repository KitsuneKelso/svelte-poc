const getWord = async () => {
	// const API_KEY = process.env.API_KEY as string;
	console.log('env:', import.meta.env);
	const API_KEY = import.meta.env.VITE_API_KEY;

	const response = await fetch('https://api.api-ninjas.com/v1/randomword', {
		headers: { 'X-Api-Key': API_KEY }
	}).then((res) => res.json());

	if (response.word) {
		return response.word;
	} else {
		throw new Error('Failed to fetch a word');
	}
};

export default getWord;
