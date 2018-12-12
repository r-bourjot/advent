module.exports = (str) => {
	const arr = str.split('\n').map(x => parseInt(x, 10)).filter(x => !isNaN(x));
	const prev = new Set();
	let current = 0;
	let index = 0;

	while (!prev.has(current)) {
		prev.add(current);
		current += arr[index];
		index = (index + 1) % arr.length;
	}

	return current;
};
