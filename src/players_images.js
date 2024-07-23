const csv = require('csvtojson');
const https = require('https');
const fs = require('fs');

csv({ delimiter: ';' })
	.fromFile('./csv/players.csv')
	.then(object => {
		object.forEach(player => {
			const { name, img } = player;

			const file = fs.createWriteStream(`./players/${name}.png`);
			https
				.get(img, response => {
					response.pipe(file);
					file.on('finish', () => {
						file.close();
						console.log(`${name}.png downloaded`);
					});
				})
				.on('error', err => {
					fs.unlink(`./players/${name}.png`, err => {
						if (err) {
							// console.error(`Error deleting ${name}.png: ${err.message}`);
						}
					});
					console.error(`Error downloading ${name}.png: ${err.message}`);
				});
		});
	});
