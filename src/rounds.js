const { writeJson, readJson } = require('./lib');

const src = './json/' + process.argv[2] + '.json';
const datas = readJson(src);

const rounds = {};

datas.forEach(data => {
	if (data.round == undefined) return;
	if (!rounds[data.round]) rounds[data.round] = {};
	if (data.bracket == 'W') data.bracket = 'Winner Bracket';
	if (data.bracket == 'L') data.bracket = 'Loser Bracket';
	if (!rounds[data.round][data.bracket]) rounds[data.round][data.bracket] = [];
	rounds[data.round][data.bracket].push(data);
});

writeJson(src, rounds);
