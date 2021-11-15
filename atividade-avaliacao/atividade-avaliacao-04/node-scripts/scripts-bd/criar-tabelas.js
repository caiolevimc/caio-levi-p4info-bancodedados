const sqlite3 = require('sqlite3');

let db = new sqlite3.Database('./node-scripts/database/DB_ATIVIDADE_04.db',(error) => {
    if (error) { 
        console.log(error);
    } else {
        console.log("Conectado");
    }
})

db.serialize(() => {
    //criando TB_ALUNOS
    db.run(`create table if not exists TB_ALUNOS(
        ID integer not null,
        NOME text not null,
        primary key (ID autoincrement)
    );`, (error) => {
        if (error) { console.log(error); }
    });

    //criando TB_DISCIPLINA
    db.run(`create table if not exists TB_DISCIPLINAS(
        ID integer not null,
        NOME text not null,
        primary key (ID autoincrement)
    );`, (error) => {
        if (error) { console.log(error); }
    });

    //criando TB_ALUNO_DISCIPLINA
    db.run(`create table if not exists TB_ALUNO_DISCIPLINA(
        ALUNO_ID integer not null,
        DISCIPLINA_ID integer not null,
        NOTA real not null,
        PERIODO integer not null,
        primary key (ALUNO_ID, DISCIPLINA_ID)
        foreign key (ALUNO_ID) references TB_ALUNOS(ID)
        foreign key (DISCIPLINA_ID) references TB_DISCIPLINAS(ID)
    );`, (error) => {
        if (error) { console.log(error); }
    });
});

db.close((error)=>{
    if (error){
        console.log(error);
    } else {
        console.log("\nDesconectando");
    }
});

