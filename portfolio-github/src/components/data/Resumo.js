import PropTypes from 'prop-types'
import styles from '../../Resumo.module.css'

export const Resumo = (props) => {
    const {src = 'https://github.com/Victor-Higa1997.png', alt = 'Victor S. H. Nagahara'} = props

    return (
    <div>
        <h2 className={styles.h2}> {alt}</h2>
        <img className={styles.img} src={src} alt={alt} ></img>
    </div>
    ) 
}

Resumo.propTypes = {
    src: PropTypes.string,   
    alt: PropTypes.string,
}

