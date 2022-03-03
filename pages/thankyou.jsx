import Link from 'next/link'
import styles from "../styles/Thankyou.module.scss";
import Image from 'next/image';
import correctImg from "../public/correct-tick.png";

const Thankyou = () => {
    return (
        <div className={styles.conteiner}>
            <div className="img">
                <Image
                    src={correctImg}
                    alt="correct img"
                />
            </div>
            <div className={styles.title}>
                Thank you
            </div>

            <div className="para">
                Your submission has been received.
                <br />
                We will get back to you Chokidr invitation link and the secure pin
                once the verification is done from our end.
            </div>

            <div className={styles.btn}>
                <Link href="/">
                    <a>
                        Go to home
                    </a>
                </Link>
            </div>

        </div>
    )
}

export default Thankyou;
