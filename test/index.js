const Jasmine = require('jasmine');
const { jsdom } = require('jsdom');

const jasmine = new Jasmine();

global.document = jsdom('<!doctype html><html><body></body></html>', {
    url: 'http://localhost'
});

global.window = global.document.defaultView;

jasmine.loadConfig({
    spec_dir: 'test/spec',
    spec_files: [
        '**/**_spec.js'
    ]
});

jasmine.execute();
