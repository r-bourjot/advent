const test = require('../../test');

const cases = [
	{
		data: `
		+1
		-2
		+3
		+1
		`,
		expected: 2
	},
	{
		data: `
		+1
		-1
		`,
		expected: 0
	},
	{
		data: `
		+3
		+3
		+4
		-2
		-4
		`,
		expected: 10
	},
	{
		data: `
		-6
		+3
		+8
		+5
		-6
		`,
		expected: 5
	},
	{
		data: `
		+7
		+7
		-2
		-7
		-4
		`,
		expected: 14
	}
];

test(cases, 'Loop', require('./loop'));
test(cases, 'Set-Loop', require('./set-loop'));
test(cases, 'Mod', require('./mod'));
