import styles from '../styles/componentsStyle/Header.module.scss';
import happyMonkLogo from '../public/happymonkLogo.png'
import { Icons } from '../utils/icons';
import Image from 'next/image';
import NavDropDown from './NavDropDown';
import navImg from "../public/icons/nav-icon.png";
import Link from 'next/link';



const Header = () => {
    return (
        <div className={styles.header}>
            {/* <div className={styles.loginContainer}>
                <div> */}
            <Link href={"/"}>
                <a>
                    <div className={styles.logo}>
                        <span className={styles.logoImg}>
                            <Image
                                src={happyMonkLogo}
                                alt="logo"
                            />
                        </span>
                        <span>
                            HAPPYMONK
                        </span>
                    </div>
                </a>
            </Link>
            {/* </div>
                <div className={styles.navImg}>
                    <Image
                        src={navImg}
                        alt="navigation"
                    />
                </div>
            </div> */}
            <ul className={styles.navList}>
                <NavDropDown
                    ddList={[
                        {
                            heading: <Link href={'/platform/network'}><a>Network</a></Link>,
                            options: []
                        },
                        {
                            heading: <Link href={'/platform/blockchain'}><a>Blockchain Protocol and ZKP</a></Link>,
                            options: []
                        },
                        {
                            heading: <Link href={'/platform/ai'}><a>Artificial Intelligence</a></Link>,
                            options: []
                        }
                    ]}
                >
                    <li className={styles.navItem}>
                        <span>Platform</span>
                        <Icons.ArrowDown />
                    </li>
                </NavDropDown>



                <NavDropDown
                    ddList={[
                        {
                            heading: <Link href={'/product/chokidr-hardware'}><a>Chokidr Hardware </a></Link>,
                            options: []
                        },
                        {
                            heading: <Link href={'/product/chokidr-software'}><a>Chokidr Software </a></Link>,
                            options: [
                                <Link href={'/product/chokidr-software/identities'} key={1}><a>Identities</a></Link>,
                                'Autonomous Identities',
                                'Connecting People and Things',
                                'Command And Control',
                                'Edge IOT',
                                'Edge IOT',
                                'Social Footprint'
                            ]
                        },
                    ]}
                >
                    <li className={styles.navItem}>
                        <span>Product</span>
                        <Icons.ArrowDown />
                    </li>
                </NavDropDown>

                <NavDropDown
                    ddList={[
                        {
                            heading: 'Contact',
                            options: []
                        },
                        {
                            heading: 'Hardware Support',
                            options: []
                        },
                        {
                            heading: 'Software Support',
                            options: []
                        }
                    ]}
                >
                    <li className={styles.navItem}>
                        <span>Connect</span>
                        <Icons.ArrowDown />
                    </li>
                </NavDropDown>

                <NavDropDown
                    ddList={[
                        {
                            heading: 'Blog',
                            options: []
                        },
                        {
                            heading: 'About Happymonk',
                            options: []
                        },
                        {
                            heading: 'Career',
                            options: []
                        }
                    ]}
                    right={"0"}
                >
                    <li className={styles.navItem}>
                        <span>Explore</span>
                        <Icons.ArrowDown />
                    </li>
                </NavDropDown>


            </ul>
        </div >
    )
}

export default Header;