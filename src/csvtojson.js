const csv = require('csvtojson');
const { writeJson } = require('./lib');

csv()
	.fromFile('./csv/' + process.argv[2] + '.csv')
	.then(function (json) {
		writeJson('./json/' + process.argv[2] + '.json', json);
	});
