import Card from "./Card";
import styles from "../styles/componentsStyle/CaseStudySection.module.scss";

const CaseStudySection = () => {
    return (
        <div className={styles.caseStudies}>
            <div className={styles.heading2}>Case Studies</div>
            <ul className={styles.cardList}>
                <li className={styles.cardItem}>
                    <Card
                        text={"Supply Chain and Transportation"}
                        customClass={`${styles.caseStudiesCard} ${styles.cardImg1}`}
                    />
                </li>
                <li className={styles.cardItem}>
                    <Card
                        text={"Industries and Organisation"}
                        customClass={`${styles.caseStudiesCard} ${styles.cardImg2}`}
                    />
                </li>
                <li className={styles.cardItem}>
                    <Card
                        text={"Defense"}
                        customClass={`${styles.caseStudiesCard} ${styles.cardImg3}`}
                    />
                </li>
            </ul>
        </div>

    )
}

export default CaseStudySection;
