const Sequelize = require('sequelize');

const connection = require('../database/database');

const modelCategoria = require('./modelCategoria')

/*
PARAMETROS DO MÉTODO DEFINE
1 - NOME DA TABELA - STRING
2 - OBJETO JSON: 
                NOME DO CAMPO DA TABELA
                TIPO DE DADO DO CAMPO DA TABELA
                REGRAS DO CAMPO DA TABELA (NULL, NOT NULL, DEFAULT...ETC)
*/
const modeLivro = connection.define(
    'tbl_livro',
    {
        cod_livro:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        cod_categoria:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        nome_livro:{
            type:Sequelize.STRING(100),
            allowNull:true
        },
        autor_livro:{
            type:Sequelize.STRING(100),
            allowNull:true
        },
        descricao_livro:{
            type:Sequelize.STRING(500),
            allowNull:true
        },
    }
);

/*Implementação da  CHAVE ESTRANGEIRA - LADO N*/
modelCategoria.hasMany(modeLivro, {
    foreignKey: 'cod_categoria',
    sourceKey: 'cod_categoria'
});

/*Implementação da  CHAVE PRIMÁRIA - LADO 1*/
modeLivro.belongsTo(modelCategoria, {
    foreignKey: 'cod_categoria',
    sourceKey: 'cod_categoria'
});

// modeLivro.sync({force:true});

module.exports = modeLivro;