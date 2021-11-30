
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_ALUNOS', table => {
        table.increments('ID').primary()
        table.text('NOME').notNull()
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_ALUNOS')
};