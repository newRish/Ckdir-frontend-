import React from "react";
import Header from "../../components/Header"
import styles from "../../styles/Jd.module.scss";
import jobHuntImg from "../../public/undraw_job_hunt.svg";
import applyImg from "../../public/undraw_updated_resume.svg"
import Image from "next/image";

const JD = ({ responsibility }) => {
    return (
        <div>
            <div className={styles.landingContainer}>
                <Header />
                <div className={styles.landingPage}>
                    <div className={styles.heading1}>
                        Openings for Back end developer
                    </div>
                    <p className={styles.landingText}>
                        Number of vacancy - 03
                    </p>

                </div>
            </div>

            <div className="desc">
                <div className={styles.dhar}>
                    <div>
                        <div className={styles.heading}>
                            What you'll do?
                        </div>
                        <div className={styles.dharText}>
                            An autonomous, edge device that is Lorawan compatible,
                            which can be retro-fitted into your network. Powered
                            by 52 RFIDs and sixteen cameras, that work with your
                            existing legacy infrastructure, that can auto-connect
                            to other Dhar in nearby vicinity.
                        </div>
                        <div className={styles.dharPoints}>
                            <ul className={styles.dharList}>
                                {
                                    responsibility?.map((e, i) => (
                                        <li key={i} className={styles.dharItem}>
                                            <div className={styles.dharItemStyle}></div>
                                            <div className={styles.dharText}>
                                                {e}
                                            </div>
                                        </li>
                                    ))
                                }

                            </ul>

                        </div>
                    </div>

                    <div className={styles.chokidrBackImg}>
                        <Image
                            src={jobHuntImg}
                            alt={'job hunt'}
                        />
                    </div>


                </div>
            </div>

            <div className={styles.apply}>
                <div className={styles.heading}>Apply here</div>
                <div className="img">
                    <Image
                        src={applyImg}
                        alt="apply form"

                    />
                </div>
                <div className={styles.form}>
                    <div className={styles.field}>
                        <span>icon</span>
                        <span>
                            <input type="text" />
                        </span>
                    </div>
                    <div className={styles.field}>
                        <span>icon</span>
                        <span>
                            <input type="text" />
                        </span>
                    </div>
                    <div className={styles.field}>
                        <span>icon</span>
                        <span>
                            <input type="text" />
                        </span>
                    </div>
                    <div className={styles.field}>
                        <span>icon</span>
                        <span>
                            <input type="text" />
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default JD;


export const getStaticProps = () => {
    return {
        props: {
            responsibility: [
                "Legacy Retrofitting - Connect Dhar into your existing IoT network, with no need for replacements!",
                "Private network over LoraWAN - With a private network at your hand, your data is secure. The days of relying on telco providers are over.",
                "Integrated IoT - Compatible with devices working on industry common protocols.",
            ],


        }
    }
}