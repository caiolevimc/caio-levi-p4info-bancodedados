
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_ALUNO_DISCIPLINA', table => {
        table.integer('TB_ALUNOS_ID').unsigned()
        table.integer('TB_DISCIPLINAS_ID').unsigned()
        table.foreign('TB_ALUNOS_ID').references('TB_ALUNOS.ID')
        table.foreign('TB_DISCIPLINAS_ID').references('TB_DISCIPLINAS.ID')
        table.primary(['TB_ALUNOS_ID', 'TB_DISCIPLINAS_ID'])
        table.integer('PERIODO').notNull()
        table.double('NOTA', 4, 2).notNull()
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_ALUNO_DISCIPLINA')
};
