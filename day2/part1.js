const {data} = require('./data');

const hasTwoLetters = (obj) => Object.values(obj).find(x => x === 2) ? 1 : 0;
const hasThreeLetters = (obj) => Object.values(obj).find(x => x === 3) ? 1 : 0;

const format = (str) => {
	return str
		.split('')
		.reduce(
			(acc, el) => acc[el] ? {...acc, [el]: acc[el] + 1} : {...acc, [el]: 1},
			{}
		);
}

const partChecksum = (str) => {
	const temp = format(str);

	return [hasTwoLetters(temp), hasThreeLetters(temp)];
};

const [two, three] = data
	.map(partChecksum)
	.reduce(([l, r], [ll, rr]) => [l + ll, r + rr], [0, 0]);

console.log('Result:', two * three);
