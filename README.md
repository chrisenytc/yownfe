# ![YOwnFe](https://raw.githubusercontent.com/chrisenytc/yownfe/master/logo.png)

> A good and cool slave to make repetitive codes for you

[![Build Status](https://secure.travis-ci.org/chrisenytc/yownfe.png?branch=master)](https://travis-ci.org/chrisenytc/yownfe) [![NPM version](https://badge-me.herokuapp.com/api/npm/yownfe.png)](http://badges.enytc.com/for/npm/yownfe)

## Getting Started
Install the module with: 

```bash
$ npm install -g yownfe
```

Example:

```javascript
var Fe = require('yownfe');
//Create new instance of YOwnFe
var fe = new Fe();
```

## How to use

Example of use the YOwnFe CLI

```bash
$ fe work "source.js or source.json" "template.js" --output "welldonefe.js"
```

## Documentation

#### .work(dataSource, templatePath, outputPath)

**Parameter**: `dataSource`
**Type**: `String`
**Example**: `[{name: 'Fe'}]`


**Parameter**: `template`
**Type**: `String`
**Example**: `template.js`


**Parameter**: `output`
**Type**: `String`
**Example**: `output.js`


The 'work' method is responsible for do some job you have configured

How to use this method

```javascript

fe.work([{name: 'Fe'}], './template.js', './output.js');
```

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/chrisenytc/yownfe/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/chrisenytc/yownfe/issues).

## License 

The MIT License

Copyright (c) 2015, Christopher EnyTC

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

