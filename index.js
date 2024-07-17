const csv = require('csvtojson');
const fs = require('fs');

function writeJson(filePath, body) {
	fs.writeFile(filePath, JSON.stringify(body, null, 4), 'utf8', function (err) {
		if (err) {
			console.error('An error occured while writing in ' + filePath);
			console.error(err);
		} else {
			console.log('Succesfully write in ' + filePath);
		}
	});
}

csv()
	.fromFile(csvFilePath)
	.then(function (json) {
		writeJson(csvFilePath.slice(0, -4) + '.json', json);
	});
