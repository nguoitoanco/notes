'use strict';
angular.module('app').component('noteDetail', {
    templateUrl: '/src/note/detail.html',
    bindings: {
        session: '<',
        note: '<',
	notes: '<',
    },
    controller: function(Note, $route) {
	this.$onInit = function() {
            this.relateNotes = [];
            for (var i in this.notes) {
                if (this.notes[i].subject == this.note.subject) {
	            this.relateNotes.push(this.notes[i]);
	        }
	    }
	    this.hasNotes = !_.isEmpty(this.relateNotes);
	};
    },
});
