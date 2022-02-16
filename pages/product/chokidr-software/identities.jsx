import Header from "../../../components/Header";
import styles from "../../../styles/Identities.module.scss";
import landingImg from "../../../public/avatar-connected-device.png";
import Image from "next/image";
import CaseStudySection from "../../../components/CaseStudySection";
import ConnectNetworkSection from "../../../components/ConnectNetowrkSection";

const Identities = () => {
    return (
        <div>
            <div className={styles.landing}>
                <Header />
                <div className={styles.glowCircle}></div>
                <div className={styles.container}>
                    <div className={styles.textContainer}>
                        <div className={styles.landingText}>
                            Identities
                        </div>
                        <div className={styles.para}>
                            Decentralized Identities for Humans, Devices and Things.
                        </div>
                    </div>
                    <div className={styles.img}>
                        <Image
                            src={landingImg}
                            alt={'software in devices'}
                        />
                    </div>
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

export default Identities;