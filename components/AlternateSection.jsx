import styles from "../styles/componentsStyle/AlternateSection.module.scss";


const AlternateSection = ({ image, text, heading, isImageLast }) => {
    return (
        <div className={styles.container}>
            <div className={styles.img} style={{ order: isImageLast ? 2 : 'unset' }}>
                {image}
            </div>

            <div className={styles.text}>
                <div className={styles.heading}>
                    {heading}
                </div>
                <div className={styles.para}>
                    {text}
                </div>
                <div className={styles.readMoreText}>Read more</div>
            </div>
        </div>
    )
}

export default AlternateSection;
