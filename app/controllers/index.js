import Ember from 'ember';

export default Ember.Controller.extend({
	newTask: '',
	state: function() {
		return Ember.isEmpty(this.get('newTask'));
	}.property('newTask'),
	actions: {
		addTodo: function() {
			var _this = this;
			var todo = this.store.createRecord('todo', {
				task: _this.get('newTask'),
				completed: false
			});
			todo.save().then(function() {
				_this.set('newTask', '');
			});
		}
	}
});
