import React, { useRef, useState } from 'react'
import { useClickOutSide } from '../hooks/useClickOutSide';
import styles from "../styles/componentsStyle/Selectbox.module.scss"
import { Icons } from '../utils/icons'

const SelectBox = ({
    options,
    selected,
}) => {
    const [drop, setDrop] = useState(false);
    const [value, setValue] = useState('Organisation');

    //close drop when click outside the component container
    let dropNodeRef = useClickOutSide(() => {
        setDrop(false);
    });
    let parentRef = useRef(null);

    return (
        <div className={styles.outer} ref={dropNodeRef}>
            <div className={styles.container} onClick={() => setDrop(!drop)}>
                <span>
                    {value}
                </span>
                <span>
                    <Icons.ArrowDown />
                </span>
            </div>
            <div className={`${styles.options} ${drop ? "" : styles.hideDrop}`} ref={parentRef}>
                <div className={styles.option} onClick={() => setValue('Organisation')}>
                    Organisation
                </div>
                <div className={styles.option} onClick={() => setValue('Self')}>Self</div>
            </div>

        </div>
    )
}

export default SelectBox;
