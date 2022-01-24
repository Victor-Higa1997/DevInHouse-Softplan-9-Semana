import PropTypes from 'prop-types';
import styles from '../..//Repositorio.module.css'

export const Repositorio = (props) => {
    let {titulo = 'Front-end Developer ', 
    descricao = '- Desenvolvedor Front-end, conhecimento em HTML / CSS / Javascript ES6 ',
    destacar = true} = props
    return (

        <article className={styles.article} >
            

            {destacar === true ?  
            (
                <div className={styles.container}>
                    <h3 className={styles.h3}>{titulo}</h3>
                    <p className={styles.descricao} >{descricao}</p>
                </div>
            ) : 
            (
                null
            )
            }
        </article>
    )
}

Repositorio.propTypes = {
    titulo: PropTypes.string,
    descricao: PropTypes.string,
    destacar: PropTypes.bool,
}