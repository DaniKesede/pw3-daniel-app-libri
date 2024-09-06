import styles from './Button.module.css' 

function Button({rotulo}) {
    return(
        <>
            <div className={styles.button}>
                <button>{rotulo}</button>
            </div>
        </>
    );
};

export default Button;