import styles from './Select.module.css' 

function Select({name, text}) {
    return(
        <>
            <div className={styles.form_control}>
                <label hmtlFor={name}>{text}</label>
                <select name={name} id={name}>
                    <option>Selecione uma categoria</option>
                    <option>Ficção científica</option>
                    <option>Fantasia herioca</option>
                    <option>Suspense</option>
                    <option>Terror</option>
                </select>
            </div>
        </>
    );
};
export default Select;