import DS from 'ember-data';

export default DS.Model.extend({
  task: DS.attr('string'),
  completed: DS.attr('boolean',{defaultValue: false})
});
