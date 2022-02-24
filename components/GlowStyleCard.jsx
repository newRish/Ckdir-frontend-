import styles from "../styles/componentsStyle/GlowStyleCard.module.scss";


const GlowStyleCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.glow}></div>
            <div>
                <div className={styles.heading}>Lorem ipsum</div>
                <div className={styles.text}>Lorem ipsum dolor sit amet, consectetur  elit.</div>
            </div>
        </div>

    )
}

export default GlowStyleCard;
