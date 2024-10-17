import styles from './Select.module.css' 

function Select({name, text, options, handleChangeCategory}) {
    return(
        <>
            <div className={styles.form_control}>
                <label hmtlFor={name}>{text}</label>
                <select name={name} id={name} onChange={handleChangeCategory}>

                <option>Selecione uma categoria</option>
                    {
                        options.map((option)=>{
                            //console.log(option.nome_categoria + '-' + option.nome_categoria)
                            return <option key={option.cod_categoria} value={option.cod_categoria}>{option.nome_categoria}</option>
                            
                        })
                    }
                </select>
            </div>
        </>
    );
};
export default Select;