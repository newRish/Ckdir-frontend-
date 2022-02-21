
import Header from "../../../components/Header";
import styles from "../../../styles/AutonomousIdentities.module.scss";
import landingImg from "../../../public/vichels-on-path.png";
import Image from "next/image";
import CaseStudySection from "../../../components/CaseStudySection";
import ConnectNetworkSection from "../../../components/ConnectNetowrkSection";
import AlternateSection from "../../../components/AlternateSection";
import fieldImg from "../../../public/countryside-field-sunny-day-countryside.png";
import derekImg from "../../../public/derek-lee.png";
import digitalIdentityImg from "../../../public/senior-woman-using-her-phone-park.png";
import greenEarthImg from "../../../public/freen-earth.png";

const CommandAndControl = () => {
    return (
        <div>
            <div className={styles.landing}>
                <Header />
                <div className={styles.glowCircle}></div>
                <div className={styles.container} style={{ marginTop: '5rem' }}>
                    <div className={styles.textContainer}>
                        <div className={styles.landingText}>
                            Command and Control
                        </div>
                        <div className={styles.para}>
                            Get real time information under one single unified dashboard
                        </div>
                    </div>
                    <div className={styles.img}>
                        {/* <Image
                            src={landingImg}
                            alt={'software in devices'}
                        /> */}
                    </div>
                </div>
            </div>


            <div className={styles.alterList}>

                <div className={styles.list1}>
                    {/* <div className={styles.glow}></div> */}
                    <AlternateSection
                        // isImageLast={true}
                        heading={
                            "Loreum ipsum"
                        }
                        text={
                            <div className={styles.container}>

                                <div className={styles.label}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac suspendisse etiam sit lacus.
                                </div>

                            </div>
                        }
                        image={
                            <Image
                                src={derekImg}
                                alt={'image'}
                            />
                        }
                    />
                </div>
                <div className={styles.list2}>
                    {/* <div className={styles.glow}></div> */}
                    <AlternateSection
                        isImageLast={true}
                        heading={
                            "Loreum ipsum"
                        }
                        text={
                            <div className={styles.container}>

                                <div className={styles.label}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac suspendisse etiam sit lacus.
                                </div>

                            </div>
                        }
                        image={
                            <Image
                                src={derekImg}
                                alt={'image'}
                            />
                        }
                    />
                </div>
                <div className={styles.list3}>
                    {/* <div className={styles.glow}></div> */}
                    <AlternateSection
                        // isImageLast={true}
                        heading={
                            "Loreum ipsum"
                        }
                        text={
                            <div className={styles.container}>

                                <div className={styles.label}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac suspendisse etiam sit lacus.
                                </div>

                            </div>
                        }
                        image={
                            <Image
                                src={derekImg}
                                alt={'image'}
                            />
                        }
                    />
                </div>
                <div className={styles.list3}>
                    {/* <div className={styles.glow}></div> */}
                    <AlternateSection
                        isImageLast={true}
                        heading={
                            "Loreum ipsum"
                        }
                        text={
                            <div className={styles.container}>

                                <div className={styles.label}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac suspendisse etiam sit lacus.
                                </div>

                            </div>
                        }
                        image={
                            <Image
                                src={derekImg}
                                alt={'image'}
                            />
                        }
                    />
                </div>

            </div>


            <CaseStudySection />
            <ConnectNetworkSection
                heading={"Loreum ipsum"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nibh et ut feugiat duis scelerisque urna, blandit."}
                url={"/"}
            />
        </div>
    )
}

export default CommandAndControl
