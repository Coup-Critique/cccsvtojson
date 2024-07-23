const fs = require('fs');
const { readJson } = require('./lib');

const scores = readJson('./json/score_tour_pnb.json');

let global = '';

scores.forEach(score => {
	global += `INSERT INTO player (showdown_name,points,prize) VALUES ('${score.player.replace(
		"'",
		"\\'"
	)}', ${score.sum}, ${score.prize});\n`;
});

global +=
	'UPDATE player SET user_id = (SELECT id FROM user WHERE user.showdown_name LIKE player.showdown_name LIMIT 0,1);\n';

const dst = './sql/score_global.sql';
fs.writeFile(dst, global, 'utf8', function (err) {
	if (err) {
		console.error('An error occured while writing in ' + dst);
		console.error(err);
	} else {
		console.log('Succesfully write in ' + dst);
	}
});
