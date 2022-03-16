import React, { useRef, useState } from "react";
import { useClickOutSide } from "../hooks/useClickOutSide";
import styles from "../styles/componentsStyle/SelectField.module.scss";
import { Icons } from "../utils/icons";
import orgImg from "../public/icons/org.png";
import selfImg from "../public/icons/user.png";
import Image from "next/image";

const SelectField = () => {
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
       <div className={styles.cLeft}>
           <span>icon</span>
           <span>choose</span>
       </div>
       <div className={styles.cRight}>
           icon
       </div>
      </div>

     
    </div>
  );
};

export default SelectField;
