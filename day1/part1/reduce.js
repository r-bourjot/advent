module.exports = str => str.split('\n')
	.reduce(
		(acc, el) => acc + (parseInt(el, 0) || 0),
		0
	);
