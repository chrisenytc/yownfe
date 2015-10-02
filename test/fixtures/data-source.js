'use strict';

function main() {
	var list = [];

	for(var i = 0; i <= 1000; i++) {
		list.push({
			name: 'Fe ' + i,
			capabilities: 'Work'
		});
	}

	return {
		people: list
	};
};

module.exports = main();
