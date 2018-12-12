module.exports = (str) => {
	const lines = str.split('\n');

	let acc = 0;

	for (let i = 0; i < lines.length; i++) {
		const number = parseInt(lines[i], 10);

		if (!isNaN(number)) {
			acc += number;
		}
	}

	return acc;
};
