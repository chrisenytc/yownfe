#!/usr/bin/env node

/*
 * yownfe
 * https://github.com/chrisenytc/yownfe
 *
 * Copyright (c) 2015, Christopher EnyTC
 * Licensed under the MIT license.
 */

/**
 * Module dependencies.
 */

var program = require('commander'),
    updateNotifier = require('update-notifier'),
    _ = require('lodash'),
    banner = require('../lib/banner.js'),
    Fe = require('..'),
    fe = new Fe(),
    path = require('path'),
    debug = require('../lib/debugger.js'),
    pkg = require('../package.json');

require('colors');

/*
 * YOwnFe Bootstrap
 */

program
    .version(pkg.version, '-v, --version')
    .usage('command [option]'.white);

/*
 * Options
 */

program
    .option('-o, --output <path>', 'write the result to a file');

/*
 * YOwnFe Status
 */
program
    .command('work <dataSource> <templatePath>')
    .description('create a task to Fe work for you'.white)
    .action(function(dataSource, templatePath) {
        var data = fe.work(dataSource, templatePath, program.output);

		debug('Work done with success!', 'success');

		if(!program.output) {
			console.log();
			console.log(data);
		}
    });

/*
 * YOwnFe on help ption show examples
 */

program.on('--help', function() {
    console.log('  Examples:');
    console.log('');
    console.log('    $ fe work');
    console.log('');
});

/*
 * YOwnFe Banner
 */

if (process.argv.length === 3 && process.argv[2] === '--help') {
    banner();
}


/*
 * YOwnFe Process Parser
 */

program.parse(process.argv);

/*
 * YOwnFe Default Action
 */

var notifier = updateNotifier({
    packageName: pkg.name,
    packageVersion: pkg.version
});

if (notifier.update) {
    notifier.notify(true);
}

if (process.argv.length == 2) {
    banner();
    program.help();
}
