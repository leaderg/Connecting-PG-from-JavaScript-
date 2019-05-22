
exports.up = function(knex, Promise) {
   return Promise.all([
    knex.schema.createTable('milestones', function(table){
      table.increments('id');
      table.date('date_achieved');
      table.string('description');
    })
  ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones')
  ])
};
