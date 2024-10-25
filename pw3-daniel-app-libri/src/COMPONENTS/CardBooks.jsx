import style from './CardBook.module.css'
import Button from './Button'

const CardBooks = ({titulo, autor, imagem, cod_livro})=>{

    return(
        <div className={style.CardBooks}>
            <h3 className={style.titulo}>{titulo}</h3>
            <p className={style.autor}>{autor}</p>
            <img scr={imagem} alt={titulo} title={{titulo}} />
            <div>
                <Button label='DETALHE' router='/DetailBook/' cod_livro={cod_livro}/>
            </div>
        </div>
    )

}

export default CardBooks