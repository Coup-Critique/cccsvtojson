const { writeJson, readJson } = require('./lib');

const scores = readJson(process.argv[2]);

const rounds = [];

scores.forEach(score => {
	if (score.round == undefined) return;
	if (!rounds[score.round]) rounds[score.round] = [];
	rounds[score.round].push(score);
});

writeJson(process.argv[2], rounds);
