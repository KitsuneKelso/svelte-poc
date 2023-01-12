const regex = /[a-zA-Z]/;

const isLetter = (char: string) => {
	if (char.length !== 1) {
		return false;
	}

	return regex.test(char);
};

export default isLetter;
