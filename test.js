module.exports = (cases, name, fn) => {
	console.log(`\n${name}`);

	cases.forEach(({data, expected}, i) => {
		const actual = fn(data);

		if (actual === expected) {
			console.log(`OK (case ${i})`);
		} else {
			console.error(`ERROR (case ${i}): ${actual} must be ${expected}`);
		}
	});
};
