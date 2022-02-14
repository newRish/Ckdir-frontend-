import styles from '../styles/componentsStyle/Header.module.scss';
import happyMonkLogo from '../public/happymonkLogo.png'
import { Icons } from '../utils/icons';
import Image from 'next/image';
import NavDropDown from './NavDropDown';
import Link from 'next/link';



const Header = () => {
    return (
        <div className={styles.header}>
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
                            heading: 'Artificial Intelligence',
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
                            heading: 'Chokidr Hardware',
                            options: []
                        },
                        {
                            heading: 'Chokidr Software',
                            options: [
                                'Identities',
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