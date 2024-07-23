const { writeJson, readJson } = require('./lib');

const datas = readJson(process.argv[2]);

const rounds = [];

datas.forEach(data => {
	if (data.round == undefined) return;
	if (!rounds[data.round]) rounds[data.round] = { W: [], L: [] };
	rounds[data.round][data.bracket].push(data);
});

writeJson(process.argv[2], rounds);
