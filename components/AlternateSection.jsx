import styles from "../styles/componentsStyle/AlternateSection.module.scss";
import Button from "./Button";

const AlternateSection = ({
  image,
  text,
  heading,
  isImageLast,
  url,
  btnText,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.img} style={{ order: isImageLast ? 2 : "unset" }}>
        {image}
        {btnText && (
          <div className={styles.readMoreText}>
            <Button title={btnText} url={url ? url : "/"} />
          </div>
        )}
      </div>

      <div className={styles.text}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.para}>{text}</div>
        {btnText && (
          <div className={styles.readMoreText}>
            <Button title={btnText} url={url ? url : "/"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AlternateSection;
