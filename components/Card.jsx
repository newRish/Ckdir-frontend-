import styles from '../styles/componentsStyle/Card.module.scss';

const Card = ({ text, customClass }) => {
    return (
        <div className={`${styles.card} ${customClass}`}>
            <div className={styles.cardText}>
                {text}
            </div>
            <div className={styles.cardDarkLayer}></div>
        </div>
    )
}

export default Card;