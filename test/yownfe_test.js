/*
 * yownfe
 * https://github.com/chrisenytc/yownfe
 *
 * Copyright (c) 2015, Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
var fs = require('fs');
var join = require('path').join;
var expect = chai.expect;

var Fe = require('../lib/yownfe.js');
var fe = new Fe();

describe('YOwnFe module', function() {
    describe('#constructor()', function() {
        it('should be a function', function() {
            expect(Fe).to.be.a("function");
        });
    });
    describe('#instance()', function() {
        it('should be a object', function() {
            expect(fe).to.be.a("object");
        });
    });
	describe("#work", function() {
		it("should compile and write a file based on a template with the work", function() {
			var data = fe.work(join(__dirname, 'fixtures/data-source.js'), join(__dirname, 'fixtures/template.js'), join(__dirname, 'fixtures/output.js'));
			//Expects
			expect(data).to.not.empty;
			expect(fs.statSync(join(__dirname, 'fixtures/output.js')).isFile()).to.be.true;
		});

		it("should compile and write a file based on a template with the work and literal data", function() {
			var data = fe.work({people: [{name: 'Fe 1', capabilities: 'Work'}]}, join(__dirname, 'fixtures/template.js'), join(__dirname, 'fixtures/output.js'));
			//Expects
			expect(data).to.not.empty;
			expect(fs.statSync(join(__dirname, 'fixtures/output.js')).isFile()).to.be.true;
		});
	});
});

