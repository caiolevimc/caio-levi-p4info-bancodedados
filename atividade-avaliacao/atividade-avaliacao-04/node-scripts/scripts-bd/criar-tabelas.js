const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('./node-scripts/database/DB_ATIVIDADE_04.db',(error) => {
    if (error) { 
        console.log(error);
    } else {
        console.log("Conectado");
    }
})

function errorInformer (error) {
    if (error) { console.log(error); }
}

db.serialize(() => {
    //criando TB_ALUNOS
    db.run(`create table if not exists TB_ALUNOS(
        ID integer not null,
        NOME text not null,
        primary key (ID autoincrement)
    );`, errorInformer);

    //criando TB_DISCIPLINA
    db.run(`create table if not exists TB_DISCIPLINAS(
        ID integer not null,
        NOME text not null,
        primary key (ID autoincrement)
    );`, errorInformer);

    //criando TB_ALUNO_DISCIPLINA
    db.run(`create table if not exists TB_ALUNO_DISCIPLINA(
        TB_ALUNOS_ID integer not null,
        TB_DISCIPLINAS_ID integer not null,
        NOTA real not null,
        PERIODO integer not null,
        primary key (TB_ALUNOS_ID, TB_DISCIPLINAS_ID)
        foreign key (TB_ALUNOS_ID) references TB_ALUNOS(ID)
        foreign key (TB_DISCIPLINAS_ID) references TB_DISCIPLINAS(ID)
    );`, errorInformer);
});

db.close((error)=>{
    if (error){
        console.log(error);
    } else {
        console.log("\nDesconectando");
    }
});

