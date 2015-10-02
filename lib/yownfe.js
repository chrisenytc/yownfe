/*
 * yownfe
 * https://github.com/chrisenytc/yownfe
 *
 * Copyright (c) 2015, Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Module Dependencies
 */

var _ = require('lodash');
var fs = require('fs');
var debug = require('./debugger.js');

/*
 * Public Methods
 */

/**
 * @class YOwnFe
 *
 * @constructor
 *
 * Constructor responsible for provide a slave to do your work
 *
 * @example
 *
 *     var fe = new Fe();
 *
 */

var YOwnFe = module.exports = function YOwnFe() {
};


/**
 * Method responsible for work to you
 *
 * @example
 *
 *     fe.work([{name: 'Fe'}], 'template.js', 'output.js');
 *
 * @method work
 * @public
 * @optional
 * @param {String} dataSource A array or json object to send to the template
 * @param {String} templatePath A template to use in the work
 * @param {String} outputPath A file to write with the work
 *
 */

YOwnFe.prototype.work = function work(dataSource, templatePath, outputPath) {
	var source;

	if(typeof dataSource == 'string' && fs.statSync(dataSource).isFile()) {
		source = require(dataSource);
	} else {
		source = dataSource;
	}

	var templateData = fs.readFileSync(templatePath);
	//Compile the template
	var compiledTemplate = _.template(templateData)(source);

	if(typeof outputPath == 'string' && fs.statSync(outputPath).isFile()) {
		fs.writeFileSync(outputPath, compiledTemplate);
	}

	return compiledTemplate;
};

