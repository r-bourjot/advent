module.exports = str => str
	.split('\n')
	.map(x => parseInt(x, 0))
	.filter(x => !isNaN(x))
	.reduce((acc, el) => acc + el, 0);
