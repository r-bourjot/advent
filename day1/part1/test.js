const test = require('../../test');

const cases = [
	{
		data: `
		+1
		-2
		+3
		+1
		`,
		expected: 3
	},
	{
		data: `
		+1
		+1
		+1
		`,
		expected: 3
	},
	{
		data: `
		+1
		+1
		-2
		`,
		expected: 0
	},
	{
		data: `
		-1
		-2
		-3
		`,
		expected: -6
	}
];

test(cases, 'Loop', require('./loop'));
test(cases, 'MapFilterReduce', require('./map-filter-reduce'));
test(cases, 'Reduce', require('./reduce'));
