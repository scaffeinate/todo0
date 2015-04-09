import Ember from 'ember';

export default Ember.Controller.extend({
	isEditing: false,
	state: function() {
		return Ember.isEmpty(this.get('content').get('task'));
	}.property('model.task'),
	completed: function(key, value) {
		var todo = this.get('model');
		if(value === undefined) {
			return todo.get('completed');
		} else {
			todo.set('completed', value);
			todo.save();
			return value;
		}
	}.property('model.completed'),
	actions: {
		editTodo: function() {
			this.set('isEditing', true);
		},
		cancel: function() {
			this.set('isEditing', false);
			this.get('model').rollback();
		},
		updateTodo: function() {
			var todo = this.get('content');
			var _this = this;
			todo.save().then(function(){
				_this.notify.info('todo item updated');
				_this.set('isEditing', false);
			});
		}
	}
});
