const csv = require('csvtojson');
const { writeJson } = require('./lib');

csv()
	.fromFile(process.argv[2] + '.csv')
	.then(function (json) {
		writeJson(process.argv[2] + '.json', json);
	});
