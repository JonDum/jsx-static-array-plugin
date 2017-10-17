const babel = require('babel-core');
const path = require('path');
const fs = require('fs');
const glob = require('glob');
const assert = require('assert');

const plugin = require('./plugin.js')

const jsxPlugin = require('babel-plugin-transform-react-jsx');

const tests = glob.sync('tests/*.js');

tests.forEach(file => {

    it(file, function() {

        const code = fs.readFileSync(path.join(__dirname, file));
        const transformed = babel.transform(code, {
            plugins: [jsxPlugin, plugin]
        })

        const p = path.parse(file);
        const specPath = path.resolve('./spec/' + p.base);
        const expected = fs.readFileSync(specPath, 'utf8')

        assert.equal(transformed.code.trim(), expected.trim())
    })

});
