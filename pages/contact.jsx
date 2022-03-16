import Image from "next/image";
import Button from "../components/Button";
import Header from "../components/Header";
import styles from "../styles/Contact.module.scss";
import supportImg from "../public/undraw_profile_data.png";
import monitorImg from "../public/icons/monitor.svg"
import hwImg from "../public/icons/hw.svg"
import demoImg from "../public/women-with-canvas.png";
import partnerImg from "../public/business-partners-handshake-global-corporate-with-technology-concept.png";
import ellipseImg from "../public/icons/ellipse-placeholder.png"
import phoneImg from "../public/Call.svg"
import locationImg from "../public/locationIcon.svg";
import envelopImg from "../public/outline-envelop.svg";
import Link from "next/link";

const contact = () => {
    return (
        <div>
            <div className={styles.landingContainer}>
                <div className={styles.darkLayer}>
                    <Header />
                    <div className={styles.landingPage}>
                        <div className={styles.heading1}>
                            Got a question?
                        </div>
                        <p className={styles.landingText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mi, neque, ipsum accumsan in fermentum, et cursus.
                        </p>
                        <div className={styles.readMore}>
                            <Button
                                title={"Ask Queries"}
                                url={"/contact"} // need to update readmore route
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* contact */}
            <div className={styles.contact}>
                <div className={styles.boldText}>Contact Happymonk</div>
                <ul className={styles.list}>
                    {
                        [
                            {
                                icon: phoneImg,
                                text: "+91 82961 33177"
                            },
                            {
                                icon: envelopImg,
                                text: "sales@happymonk.co"
                            },
                            {
                                icon: locationImg,
                                text: "Bangalore"
                            }

                        ].map((e, i) => (
                            <li key={i}>
                                <div className={styles.contactIcon}>
                                    <Image
                                        src={e.icon}
                                        alt="trusted by"
                                    />
                                </div>
                                <div>{e.text}</div>
                            </li>
                        ))
                    }
                </ul>
            </div>


            {/* support */}
            <div className={styles.support}>
                <div className={styles.img}>
                    <Image
                        src={supportImg}
                        alt={"support"}
                    />
                </div>

                <div className={styles.text}>
                    <div className={styles.heading}>Support</div>
                    <div className={styles.para}>
                        We&apos;re here to help and answer any questions you might have. We look forward from hearing you.
                    </div>
                    <div className={styles.readMore}>
                        <Button
                            title={"Ask queries"}
                            url={"/contact"} // need to update readmore route
                        />
                    </div>
                </div>
            </div>


            {/* how can we help */}
            <div className={styles.help}>
                <div className={styles.heading}>
                    How can we help?
                </div>
                <div className={styles.para}>
                    Please select a topic below related to your inquiry.
                    If you don’t find what you need, fill out our <span className={styles.colorGreen}>
                        <Link href="/">
                            <a>contact form.</a>
                        </Link>
                    </span>
                </div>
                <div className={styles.img}>
                    <div>
                        <Image
                            src={monitorImg}
                            alt="software"
                        />
                        <div>Software</div>
                    </div>
                    <div>
                        <Image
                            src={hwImg}
                            alt="hardware"
                        />
                        <div>Hardware</div>
                    </div>
                </div>

                <div className={styles.label}>
                    Guide_login
                </div>
                <div className={styles.label}>
                    Guide_forgot password
                </div>
            </div>



            {/* demo */}
            <div className={styles.demo}>


                <div className={styles.text}>
                    <div className={styles.heading}>Demo</div>
                    <div className={styles.para}>
                        Request a demo from one of our conversion specialists.
                    </div>
                    <div className={styles.readMore}>
                        <Button
                            title={"Book a demo"}
                            url={"/contact"}
                        />
                    </div>
                </div>
                <div className={styles.img}>
                    <Image
                        src={demoImg}
                        alt={"demo"}
                    />
                </div>
            </div>

            {/* inspired */}
            <div className={styles.inspired}>
                <div className={styles.heading}>Get Inspired</div>
                <div className={styles.para}>
                    Discover the many ways in which our customers use Sleeknote.
                </div>
            </div>

            {/* become partner */}
            <div className={styles.partner}>
                <div>
                    <Image
                        src={partnerImg}
                        alt='partner'
                    />
                </div>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <div className={styles.boldText}>
                            Become a Partner
                        </div>
                        <div className={styles.boldPara}>
                            Join our Partner Program and earn
                            recurring commissions.
                        </div>
                        <div className={styles.readMore}>
                            <Button
                                title={"Join Now"}
                                url={"/register"} // need to update readmore route
                            />
                        </div>
                    </div>
                    {/* <div className={styles.percent}>
                        25%
                    </div> */}
                </div>

            </div>


            {/* Trusted by */}
            <div className={styles.trust}>
                <div className={styles.boldText}>Trusted By</div>
                <ul className={styles.list}>
                    {
                        [1, 1, 1, 1, 1].map((e, i) => (
                            <li key={i}>
                                <div>
                                    <Image
                                        src={ellipseImg}
                                        alt="trusted by"
                                    />
                                </div>
                                <div className={styles.trustText}>Lorem ipsum</div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default contact
