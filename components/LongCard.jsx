import styles from "../styles/componentsStyle/LongCard.module.scss";
import arrowFowwardImg from "../public/icons/Arrow_Forward.svg";
import Image from "next/image";

const LongCard = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.body}>
                {children}
            </div>
            <div className={styles.icon}>
                <Image
                    src={arrowFowwardImg}
                    alt={'arrow icon'}
                />
            </div>

        </div>
    )
}

export default LongCard;
