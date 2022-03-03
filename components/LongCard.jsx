import styles from "../styles/componentsStyle/LongCard.module.scss";
import arrowFowwardImg from "../public/icons/Arrow_Forward.svg";
import Image from "next/image";
import Link from "next/link";

const LongCard = ({ children, url }) => {
    return (
        <div className={styles.container}>
            <div className={styles.body}>
                {children}
            </div>
            <div className={styles.icon}>
                <Link href={url}>
                    <a>

                        <Image
                            src={arrowFowwardImg}
                            alt={'arrow icon'}
                        />
                    </a>
                </Link>
            </div>

        </div>
    )
}

export default LongCard;
