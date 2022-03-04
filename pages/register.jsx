import Image from "next/image";
import styles from "../styles/Register.module.scss";
import logo from "../public/registerLogo.png";
import Input from "../components/Input";
import mailIcon from "../public/icons/mail2.png"
import phoneIcon from "../public/icons/phone2.png"
import userIcon from "../public/icons/user2.png";
import FilledBtn from "../components/FilledBtn";

const Register = () => {
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.header}>
                    <Image
                        src={logo}
                        alt="logo"
                        className={styles.logo}
                    />
                </div>
                <div className={styles.formContainer}>
                    <div className={styles.formHeader}>
                        <div className={styles.title}>
                            Registration Form
                        </div>
                        <div className={styles.selectBox}>Organisation</div>
                    </div>
                    <div className={styles.label}>
                        Personal information
                    </div>
                    <div className={styles.fields}>
                        <div className={styles.field}>
                            <Input
                                type={"text"}
                                getValue={(value) => { }}
                                placeholder="Name"
                                icon={
                                    <Image
                                        src={userIcon}
                                        alt="user"
                                    />
                                }
                            />
                        </div>

                        <div className={styles.field}>
                            <Input
                                type={"text"}
                                getValue={(value) => { }}
                                placeholder="Phone number"
                                icon={

                                    <Image
                                        src={phoneIcon}
                                        alt="phone"
                                    />
                                }

                            />
                        </div>
                        <div className={styles.field}>
                            <Input
                                type={"text"}
                                getValue={(value) => { }}
                                placeholder="Email ID"
                                icon={
                                    <Image
                                        src={mailIcon}
                                        alt="mail"
                                    />
                                }
                            />
                        </div>
                        <div className={styles.btn}>
                            <FilledBtn
                                title="Next"
                                url="/"
                            />
                        </div>
                    </div>
                </div>

            </div>
            <div className={styles.info}></div>
        </div>
    )
}

export default Register;

Register.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
        </>
    )
}
