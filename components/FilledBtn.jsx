import Link from "next/link";
import styles from "../styles/componentsStyle/FilledBtn.module.scss";

const FilledBtn = ({ title, url }) => {
    return (
        <div className={styles.container}>
            <Link href={url}>
                <a>
                    {title}
                </a>
            </Link>
        </div>
    )
}

export default FilledBtn;
