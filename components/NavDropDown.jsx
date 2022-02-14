import styles from "../styles/componentsStyle/NavDropDown.module.scss";
import { useRef, useState } from "react";
import { useClickOutSide } from "../hooks/useClickOutSide";

const NavDropDown = ({ ddList, children, right }) => {
    const [isDrop, setIsDrop] = useState(false);

    //close drop when click outside the component container
    let dropNodeRef = useClickOutSide(() => {
        setIsDrop(false);
    });
    let parentRef = useRef(null);

    return (
        <div className={styles.container} ref={dropNodeRef}>
            <div onClick={() => setIsDrop(!isDrop)}>
                {children}
            </div>
            {
                ddList?.length > 0 && isDrop && (
                    < div className={styles.navDropDown} style={{ right: `${right}` }} ref={parentRef} >
                        <ul className={styles.ddList}>
                            {
                                ddList?.map((e, i) => (
                                    <li className={styles.ddItem} key={i}>
                                        <div className={styles.itemHeading}>{e?.heading}</div>
                                        {
                                            e.options.map((option, optionIndex) => (
                                                <div className={styles.itemOption} key={optionIndex}>{option}</div>
                                            ))
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </div >
                )
            }
        </div>
    )
}

export default NavDropDown
