'use strict';

angular.module('app').component('noteList', {
    templateUrl: '/src/note/list.html',
    bindings: {
        session: '<',
        notes: '<',
    },
    controller: function(Note, $route) {
        this.$onInit = function() {
            this.hasNotes = !_.isEmpty(this.notes);
        };

        this.deleteNotes = function(note) {
            this.error = null;
			for (var i in this.notes) {
				if (this.notes[i].subject == note.subject) {
					Note.delete({
							id: this.notes[i].id
					}).$promise.then(() => {
						$route.reload();
						}).catch(reason => {
					   this.error = 'Error occurred while deleting the note.';
						});
				}
			}
		};
    },
});
