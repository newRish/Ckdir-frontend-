import Link from 'next/link'
import styles from '../styles/componentsStyle/Button.module.scss'

const Button = ({
    title,
    url
}) => {
    return (
        <Link href={url}>
            <a>
                <div className={styles.button}>
                    {title}
                </div>
            </a>
        </Link>
    );
}

export default Button;
