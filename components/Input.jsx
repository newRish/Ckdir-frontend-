import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/componentsStyle/Input.module.scss";

const Input = ({
    getValue,
    icon,
    value,
    placeholder,
}) => {
    const [input, setInput] = useState(value);

    useEffect(() => {
        if (input !== "") {
            getValue(input);
        }
    }, [])

    return (

        <div className={styles.input}>
            <span className={styles.icon}>
                {icon}
            </span>
            <input
                type="text"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input;
