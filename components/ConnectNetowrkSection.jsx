import styles from "../styles/componentsStyle/ConnectNetworkSection.module.scss"
import Button from "./Button";

const ConnectNetworkSection = ({ heading, text, url, btnText }) => {
    return (
        <div className={styles.testNW}>
            <div className={styles.testNWheading}>
                {heading}
            </div>
            {text && (
                <div className={styles.text}>
                    {text}
                </div>
            )}
            <div className={styles.contactBtn}>
                <Button title={btnText ? btnText : "Contact"} url={url} />
            </div>
        </div>
    )
}

export default ConnectNetworkSection;
