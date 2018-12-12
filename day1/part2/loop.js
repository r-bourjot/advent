module.exports = (str) => {
	const arr = str.split('\n').map(x => parseInt(x, 10)).filter(x => !isNaN(x));
	const prev = [];
	let current = 0;
	let index = 0;

	while (prev.indexOf(current) < 0) {
		prev.push(current);
		current += arr[index];
		index = (index + 1) % arr.length;
	}

	return current;
};
