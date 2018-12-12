module.exports = (str) => {
	const E = new Set([0]);
	const arr = str
		.split('\n')
		.map(x => parseInt(x, 10))
		.filter(x => !isNaN(x));

	// First iteration
	let last = 0;
	for (let i = 0; i < arr.length; i++) {
		const current = last + arr[i];
		if (E.has(current)) {
			return current;
		}

		E.add(current);
		last = current;
	}

	const values = Array.from(E.values()).filter(x => x > 0);

	for (let i = 0; i < values.length; i++) {
		for (let j = i + 1; j < values.length; j++) {
			// console.log('k', values[i], values[j], i, j, last, (values[i] - values[j]) % last);
			if ((values[i] + values[j]) % last === 0) {
				return values[i];
			}
		}
	}

	console.log('\n', E, last);

	return 0;
};
