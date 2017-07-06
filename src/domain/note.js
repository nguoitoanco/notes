'use strict';

const _ = require('lodash');

class Note {
    constructor(note) {
        this._note = note;
    }

    get id() {
        return this._note.id;
    }

    expose() {
        return _.pick(this._note, [
            'id',
            'subject',
            'body',
	    'version', 
            'updatedAt',
        ]);
    }

    // How to fix bug: subject can be updated.
    // This method is not allowed to update subject of note.
    update(note) {
		note.subject = this._note.subject;
        return this._note.update(note);
    }

    delete() {
        return this._note.destroy();
    }
}
module.exports = Note;
