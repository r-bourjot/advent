const {data} = require('./data');

const words = [
	'aabcdef',
	'aabddef',
	'bbcdfef'
];

/*
type T = {
	prefix: string,
	suffixes: {
		{string}: string // suffix: word
	},
	leaves: {
		[string]: T // letter
	}
}
*/

const theWord = 'aabcdef';

const format(obj, word, letter = word[0], prefix = '') {
	if (!obj[letter]) {
		obj[letter] = {prefix, suffixes: {}, leaves: {}};
	}


}

console.log(format({}, theWord));
