import React, { useRef, useState } from "react";
import { useClickOutSide } from "../hooks/useClickOutSide";
import styles from "../styles/componentsStyle/Selectbox.module.scss";
import { Icons } from "../utils/icons";
import orgImg from "../public/icons/org.png";
import selfImg from "../public/icons/user.png";
import Image from "next/image";

const SelectBox = ({ options, selected }) => {
  const [drop, setDrop] = useState(false);
  const [value, setValue] = useState("Organisation");

  //close drop when click outside the component container
  let dropNodeRef = useClickOutSide(() => {
    setDrop(false);
  });
  let parentRef = useRef(null);

  return (
    <div className={styles.outer} ref={dropNodeRef}>
      <div className={styles.container} onClick={() => setDrop(!drop)}>
        {value === "Self" ? (
          <div className={styles.optionIcon}>
            <Image src={selfImg} alt="icon" />
          </div>
        ) : (
          <div className={styles.optionIcon}>
            <Image src={orgImg} alt="icon" />
          </div>
        )}
        <span>{value}</span>
        <span>
          <Icons.ArrowDown />
        </span>
      </div>
      <div
        className={`${styles.options} ${drop ? "" : styles.hideDrop}`}
        ref={parentRef}
      >
        <div className={styles.option} onClick={() => setValue("Organisation")}>
        <div className={styles.optionIcon}>
            <Image src={orgImg} alt="icon" />
          </div>
          Organisation
        </div>
        <div className={styles.option} onClick={() => setValue("Self")}>
        <div className={styles.optionIcon}>
            <Image src={selfImg} alt="icon" />
          </div>
          Self
        </div>
      </div>
    </div>
  );
};

export default SelectBox;
