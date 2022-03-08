import React from "react";
import ConnectNetworkSection from "../components/ConnectNetowrkSection";
import Header from "../components/Header"
import styles from "../styles/About.module.scss";

import missionImg from "../public/mission-placeholder.png";
import Image from "next/image";

const career = ({ openRoles }) => {
    return (
        <div>
            <div className={styles.landingContainer}>
                <Header />
                <div className={styles.landingPage}>
                    <div className={styles.heading1}>
                        Innovating a safer, better and Inclusive future for human beings.
                    </div>
                </div>
            </div>

            {/* mission */}
            <div className={styles.mission}>
                <div className={styles.text}>
                    <div className={styles.heading2}>
                        Our Mission
                    </div>
                    <div className={styles.para}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ac suspendisse etiam sit lacus. Curabitur purus senectus
                        sed nisl. Donec amet maecenas imperdiet id duis id mi
                        etiam et. Ut non cursus porttitor cursus tortor.
                    </div>
                </div>

                <div className={styles.img}>
                    <Image
                        src={missionImg}
                        alt="mission"
                    />
                </div>
            </div>


            {/* our values */}
            <div className={styles.values}>
                <div className={styles.heading2}>Our Values</div>
                <ul className={styles.valueList}>
                    {
                        [1, 2, 3].map((e, i) => (
                            <li className={styles.cards} key={i}>
                                <div></div>
                                <div className={styles.text}>
                                    <div className={styles.subHeading}>
                                        Lorem ipsum
                                    </div>
                                    <div className={styles.summary}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                </div>

                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* founders */}
            <div className={styles.founders}>
                <div className={styles.heading2}>Founders</div>
                <ul className={styles.valueList}>
                    {
                        [1, 2].map((e, i) => (
                            <li className={styles.cards} key={i}>
                                <div></div>
                                <div className={styles.text}>
                                    <div className={styles.subHeading}>
                                        Lorem ipsum
                                    </div>
                                    <div className={styles.summary}>
                                        Lorem ipsum
                                    </div>
                                    <div className={styles.summary}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac suspendisse etiam sit lacus. Curabitur purus senectus sed nisl. Donec amet maecenas imperdiet id duis id mi etiam et. Ut non cursus porttitor cursus tortor.
                                    </div>
                                </div>

                            </li>
                        ))
                    }
                </ul>
            </div>


            {/* misc section */}
            <div className={styles.misc}>
                <div className={styles.container}>
                    <div className={styles.heading2}>Company</div>
                    <div className={styles.para}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ac suspendisse etiam sit lacus. Curabitur purus senectus
                        sed nisl. Donec amet maecenas imperdiet id duis id mi
                        etiam et. Ut non cursus porttitor cursus tortor.
                    </div>
                </div>
                <div className={`${styles.container} ${styles.investors}`}>
                    <div className={styles.heading2}>Investors</div>
                    <div className={styles.para}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ac suspendisse etiam sit lacus. Curabitur purus senectus
                        sed nisl. Donec amet maecenas imperdiet id duis id mi
                        etiam et. Ut non cursus porttitor cursus tortor.
                    </div>
                </div>
            </div>



            {/* open roles */}
            <ConnectNetworkSection
                heading={"Open Roles"}
                url={"/career"}
                btnText={"See Open Roles"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
            />

        </div>
    )
}

export default career;


