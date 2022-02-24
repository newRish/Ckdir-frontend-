import Image from 'next/image'
import styles from '../styles/componentsStyle/Footer.module.scss'
import logoImg from "../public/icons/smallLogo.svg"
import textLogoImg from "../public/icons/smallTextLogo.svg"
// import copyrightImg from "../public/icons/copyright.svg"
import envelopImg from "../public/icons/envelop.svg"
import phoneImg from "../public/icons/phone.svg"

const Footer = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.footer}>

                    <ul>
                        <div className={styles.header}>Platform</div>
                        <li className={styles.listItem}>Network</li>
                        <li className={styles.listItem}>Blockchain Protocol</li>
                        <li className={styles.listItem}>AI</li>
                    </ul>
                    <div>
                        <ul>
                            <div className={styles.header}>Product</div>
                            <li className={styles.listItem}>Hardware</li>
                            <li className={styles.listItem}>Software</li>
                        </ul>
                        <ul className={styles.topSpacing}>
                            <div className={styles.header}>Explore</div>
                            <li className={styles.listItem}>Blog</li>
                            <li className={styles.listItem}>Careers</li>
                        </ul>
                    </div>

                    <ul>
                        <div className={styles.header}>About Us</div>
                        <li className={styles.listItem}>Investors</li>
                        <li className={styles.listItem}>Company</li>
                        <li className={styles.listItem}>Location</li>
                        <li className={styles.listItem}>News</li>
                        <li className={styles.listItem}>Announcement</li>
                        <li className={styles.listItem}>Partners</li>
                    </ul>
                </div>
                <div className={styles.footer}>
                    <div>
                        <ul>
                            <div className={styles.header}>Social Media</div>
                            <li className={styles.listItem}>Linkedin</li>
                            <li className={styles.listItem}>Discord</li>
                        </ul>
                        <ul className={styles.topSpacing}>
                            <div className={styles.header}>Support</div>
                            <li className={styles.listItem}>Hardware Service</li>
                            <li className={styles.listItem}>Software Service</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <div className={styles.header}>Connect</div>
                            <li className={`${styles.listItem} ${styles.connect}`}>
                                <span className={styles.contactIcon}>
                                    <Image
                                        src={envelopImg}
                                        alt="email"
                                    />
                                </span>
                                <span>
                                    sales@happymonk.co
                                </span>
                            </li>
                            <li className={`${styles.listItem} ${styles.connect}`}>
                                <span className={styles.contactIcon}>
                                    <Image
                                        src={phoneImg}
                                        alt="phone"
                                    />
                                </span>
                                <span>
                                    +91 82961 33177
                                </span>
                            </li>
                        </ul>
                        <ul className={styles.topSpacing}>
                            <div className={styles.header}>Legal</div>
                            <li className={styles.listItem}>Terms</li>
                            <li className={styles.listItem}>Policy</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className={styles.footerBottom}>
                <div></div>
                <div className={styles.logoContainer}>
                    <div className="logoImg">
                        <Image
                            src={logoImg}
                            alt="logo"
                        />
                    </div>
                    <div className="logoText">
                        <Image
                            src={textLogoImg}
                            alt="logo"
                        />
                    </div>
                </div>
                <div className={styles.tradeMark}>
                    <span className={styles.tradeMarkText}>
                        &copy;  2021 Happymonk AI Labs Pvt Ltd.| All Rights Reserved
                    </span>
                </div>
            </div>
        </>
    )
}

export default Footer;