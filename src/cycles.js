const { writeJson, readJson } = require('./lib');

const src = './json/' + process.argv[2] + '.json';
const datas = readJson(src);

const cycles = {};

datas.forEach(data => {
	if (data.cycle == undefined) return;
	if (!cycles[data.cycle]) cycles[data.cycle] = [];
	cycles[data.cycle].push(data);
});

writeJson(src, cycles);
