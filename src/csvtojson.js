const csv = require('csvtojson');
const { writeJson } = require('./lib');

csv({
	colParser: {
		player1: v => (v == 'Bye' ? '' : v),
		player2: v => (v == 'Bye' ? '' : v),
		result: v => (v == '#N/A' ? 'Bye' : v),
		bracket: v => (v == 'F' ? 'Finale' : v),
	},
})
	.fromFile('./csv/' + process.argv[2] + '.csv')
	.then(function (json) {
		writeJson('./json/' + process.argv[2] + '.json', json);
	});
