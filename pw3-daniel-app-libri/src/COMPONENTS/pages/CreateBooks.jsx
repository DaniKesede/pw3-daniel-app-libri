import React from "react";
import style from './CreateBooks.module.css';
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";

const CreateBooks = () => {
    return (
        <section className={style.create_book_container}>
            <h1>CADASTRO DE LIVROS</h1>
            <Input 
                type='text'
                name='txt_livro'
                placeHolder='Digite o nome o seu livro aqui'
                text='Título do livro'
            />
            <Input 
                type='text'
                name='txt_livro'
                placeHolder='Digite o nome do autor'
                text='Nome do autor'
            />
            <Input 
                type='text'
                name='txt_livro'
                placeHolder='Digite a descrição do livro'
                text='Descrição do livro'
            />

            <Select 
                name='Categoria'
                text='Escolha uma categoria de livro'
            />

            <Button 
                rotulo='Cadastrar Livro'
            />
        </section>
    );
};


export default CreateBooks