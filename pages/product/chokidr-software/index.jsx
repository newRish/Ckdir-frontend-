import landingImg from "../../../public/tab-width-phone.png";
import styles from "../../../styles/Software.module.scss";
import Header from "../../../components/Header"
import Card from "../../../components/Card"
import Image from "next/image";
import horioztalScaleImg from "../../../public/icons/horizontally-scrollable.svg"
import CaseStudySection from "../../../components/CaseStudySection";
import sfImg from "../../../public/employee-with-laptop.png"
import GlowStyleCard from "../../../components/GlowStyleCard";
import firefiterImg from "../../../public/firefiter.png";
import faceRecogImg from "../../../public/face-recognition.png";
import Link from "next/link";
import AlternateSection from "../../../components/AlternateSection";
import connectingSenforImg from "../../../public/connecting-sensors.png";
import specialArms from "../../../public/specna-arms.png";
import iot5gImg from "../../../public/5g-iot.png";

const ChokidrSoftware = () => {
    return (
        <div>
            <div className={styles.landing}>
                <Header />
                <div className={styles.glowCircle}></div>
                <div className={styles.container}>
                    <div className={styles.textContainer}>
                        <div className={styles.landingText}>
                            Lorem ipsum dolor sit
                        </div>
                        <div className={styles.para}>
                            Chokidr software is an executable
                            Web and mobile application, that
                            provides a variety of fantastic
                            features that helps you navigate
                            through and access the range of
                            your network through a laptop or
                            phone. What's in the box of these
                            fantastic features, you ask?
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


            {/* device list */}
            <ul className={styles.deviceList}>
                <li className={styles.item}>
                    <div className={styles.img}>
                        <Image
                            src={horioztalScaleImg}
                            alt='icon'
                        />
                    </div>
                    <div className={styles.text}>AI on Edge</div>
                </li>
                <li className={styles.item}>
                    <div className={styles.img}>
                        <Image
                            src={horioztalScaleImg}
                            alt='icon'
                        />
                    </div>
                    <div className={styles.text}>G-G Communcation</div>
                </li>
                <li className={styles.item}>
                    <div className={styles.img}>
                        <Image
                            src={horioztalScaleImg}
                            alt='icon'
                        />
                    </div>
                    <div className={styles.text}>IOT</div>
                </li>
                <li className={styles.item}>
                    <div className={styles.img}>
                        <Image
                            src={horioztalScaleImg}
                            alt='icon'
                        />
                    </div>
                    <div className={styles.text}>Horizontally Scalable</div>
                </li>
                <li className={styles.item}>
                    <div className={styles.img}>
                        <Image
                            src={horioztalScaleImg}
                            alt='icon'
                        />
                    </div>
                    <div className={styles.text}>Sensor Fusion</div>
                </li>
            </ul>

            {/* big image section */}
            <div className={styles.aditionalProtoKollo}>
                <div className={styles.aditionalProtoKolloBgImg}>
                    <div className={styles.aditionalProtoKolloLeft}>
                        <div className={styles.aditionalProtoKolloLeftImg}>
                            <Image src={faceRecogImg} alt="face recog" />
                        </div>
                        <div className={styles.textContainer}>
                            <div className={styles.heading}>Identities</div>
                            <div className={styles.para}>
                                Decentralized Identities for Humans, Devices and Things.
                            </div>
                            <div className={styles.readMoreText}>
                                <Link href="/">
                                    <a>Read more</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.aditionalProtoKolloRight}>
                        <div className={styles.aditionalProtoKolloLeftImg}>

                            <Image src={firefiterImg} alt="fire fighters" />
                        </div>
                        <div className={styles.textContainer}>
                            <div className={styles.heading}>Autonomous Identities</div>
                            <div className={styles.para}>
                                Decentralized Identities for Humans, Devices and Things.
                            </div>
                            <div className={styles.readMoreText}>
                                <Link href="/">
                                    <a>Read more</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* alternate section */}
            <div className={styles.alterList}>

                <AlternateSection
                    // isImageLast={true}
                    heading={
                        "Connecting people and things"
                    }
                    text={
                        <div className={styles.container}>

                            <div className={styles.label}>
                                Connect Sensors, Information Boards
                            </div>


                            {[1, 2, 3].map((e, i) => (
                                <div className={styles.sfList} key={i}>
                                    <GlowStyleCard />
                                </div>
                            ))}
                        </div>
                    }
                    image={
                        <Image
                            src={connectingSenforImg}
                            alt={'image'}
                        />
                    }
                />

                <AlternateSection
                    isImageLast={true}
                    heading={
                        "Command and Control"
                    }
                    text={
                        <div className={styles.container}>

                            <div className={styles.label}>
                                Get real time information across your organisation, members and devices under one single unified dashboard.
                            </div>



                        </div>
                    }
                    image={
                        <Image
                            src={specialArms}
                            alt={'image'}
                        />
                    }
                />

                <AlternateSection
                    // isImageLast={true}
                    heading={
                        "Edge IOT"
                    }
                    text={
                        <div className={styles.container}>
                            <div className={styles.label}>
                                Connect Dhar and Sub-second feedback even while being offline through LoRaWAN and Inbuilt 5G with Legacy Retrofiting.
                            </div>

                        </div>
                    }
                    image={
                        <Image
                            src={iot5gImg}
                            alt={'image'}
                        />
                    }
                />
            </div>


            {/* Social Footprint Section */}
            <div className={styles.sf}>

                <div className={styles.container}>
                    <div className={styles.heading}>
                        Social Footprint
                    </div>
                    <div className={styles.label}>
                        Reduce Carbon foot print of your organisation.
                    </div>


                    {[1, 2, 3].map((e, i) => (
                        <div className={styles.sfList} key={i}>
                            <GlowStyleCard />
                        </div>
                    ))}
                    <div className={styles.readMoreText}>Read more</div>
                </div>
                <div className={styles.img}>
                    <Image
                        src={sfImg}
                        alt={'employe with laotop'}
                    />
                </div>
            </div>

            {/* Case Studies section */}
            <CaseStudySection />


        </div>
    )
}

export default ChokidrSoftware;