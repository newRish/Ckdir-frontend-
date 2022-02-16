import ConnectNetowrkSection from "../../components/ConnectNetowrkSection";
import Header from "../../components/Header"
import Image from "next/image";
import styles from "../../styles/ChokidrHardware.module.scss";
import arrowFowwardImg from "../../public/icons/Arrow_Forward.svg";
import stayImg from "../../public/icons/stay.svg"
import cloudServer from "../../public/icons/cloud-server.svg";
import ggComImg from "../../public/icons/gg-comunication.svg"

const ChokidrHardware = () => {
    return (
        <div>
            <div className={styles.landing}>
                <div className={styles.glowCircle}></div>
                <div className={styles.devicesImg}></div>
                <div className={styles.phoneImg}></div>
                <Header />

                <div className={styles.mainText}>
                    <div className={styles.quotes}>
                        <div>
                            <Image
                                src={stayImg}
                                alt={"stay"}
                            />
                        </div>
                        <div>
                            <div className={styles.quoteText}>Connected.</div>
                            <div className={styles.quoteText}>Informed.</div>
                            <div className={styles.quoteText}>Safe.</div>
                        </div>
                    </div>
                    <div className={styles.para}>
                        Command & Control Security Systems Designed for
                        People, Organisation and Connection.
                    </div>
                </div>

            </div>

            {/* device list */}
            <ul className={styles.deviceList}>
                <li className={styles.item}>
                    <div className={styles.img}>
                        <Image
                            src={cloudServer}
                            alt='icon'
                        />
                    </div>
                    <div className={styles.text}>AI on Edge</div>
                </li>
                <li className={styles.item}>
                    <div className={styles.img}>
                        <Image
                            src={ggComImg}
                            alt='icon'
                        />
                    </div>
                    <div className={styles.text}>G-G Communcation</div>
                </li>
                <li className={styles.item}>
                    <div className={styles.img}>
                        <Image
                            src={cloudServer}
                            alt='icon'
                        />
                    </div>
                    <div className={styles.text}>IOT</div>
                </li>
                <li className={styles.item}>
                    <div className={styles.img}>
                        <Image
                            src={cloudServer}
                            alt='icon'
                        />
                    </div>
                    <div className={styles.text}>Horizontally Scalable</div>
                </li>
                <li className={styles.item}>
                    <div className={styles.img}>
                        <Image
                            src={cloudServer}
                            alt='icon'
                        />
                    </div>
                    <div className={styles.text}>Sensor Fusion</div>
                </li>
            </ul>

            {/* case studies section */}
            <div className={styles.cs}>

                <div className={styles.subHeading}>Case Studies</div>
                <ul className={styles.cards}>
                    <li className={styles.card}>
                        <div className={styles.cardLeft}>
                            <div className={styles.cardSq}></div>
                            <div className={styles.cardText}>
                                <div className={styles.cardHeading}>Case Study 1</div>
                                <div className={styles.cardSummary}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisl, ante sit in porta consectetur sodales. Quam curabitur diam massa, malesuada laoreet pulvinar amet nunc.
                                </div>
                            </div>
                        </div>
                        <div className={styles.arrow}>
                            <Image
                                src={arrowFowwardImg}
                                alt="icon"
                            />
                        </div>
                    </li>

                    <li className={styles.card}>
                        <div className={styles.cardLeft}>
                            <div className={styles.cardSq}></div>
                            <div className={styles.cardText}>
                                <div className={styles.cardHeading}>Case Study 1</div>
                                <div className={styles.cardSummary}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisl, ante sit in porta consectetur sodales. Quam curabitur diam massa, malesuada laoreet pulvinar amet nunc.
                                </div>
                            </div>
                        </div>
                        <div className={styles.arrow}>
                            <Image
                                src={arrowFowwardImg}
                                alt="icon"
                            />
                        </div>
                    </li>

                    <li className={styles.card}>
                        <div className={styles.cardLeft}>
                            <div className={styles.cardSq}></div>
                            <div className={styles.cardText}>
                                <div className={styles.cardHeading}>Case Study 1</div>
                                <div className={styles.cardSummary}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisl, ante sit in porta consectetur sodales. Quam curabitur diam massa, malesuada laoreet pulvinar amet nunc.
                                </div>
                            </div>
                        </div>
                        <div className={styles.arrow}>
                            <Image
                                src={arrowFowwardImg}
                                alt="icon"
                            />
                        </div>
                    </li>
                </ul>
            </div>


            {/* join the network section */}
            <ConnectNetowrkSection
                heading={"Join the Network"}
                text={"Dhar. Launching this June! Deploy into your existing network, soon!"}
                url={"/contact"}
            />
        </div>
    )
}

export default ChokidrHardware;