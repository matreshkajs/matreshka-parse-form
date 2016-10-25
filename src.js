import $ from 'balajs';
import select from 'matreshka/select';
import bindNode from 'matreshka/bindnode';

function parseForm(object, selector, callback, eventOptions) {
    const form = /:sandbox|:bound/.test(selector) ? select(object, selector) : $.one(selector);
    const fields = $('input, textarea, output, progress, select', form);

    /* istanbul ignore if */
    if(!object || typeof object !== 'object' && typeof object !== 'function') {
        throw TypeError('parseForm should accept an object or a function as the first argument')
    }

    for(let i = 0; i < fields.length; i++) {
        const field = fields[i];
        const { name } = field;

        if(name) {
            bindNode(object, name, field, undefined, eventOptions);
            if(callback) {
                callback(name, field);
            }
        }
    }

    return form;
}

module.exports = parseForm;

// extend Matreshka in browser environment
/* istanbul ignore if */
if (typeof Matreshka === 'function') {
    Matreshka.parseForm = parseForm;
}
