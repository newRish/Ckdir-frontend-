import Header from "../../../components/Header";
import styles from "../../../styles/Identities.module.scss";
import landingImg from "../../../public/avatar-connected-device.png";
import Image from "next/image";
import CaseStudySection from "../../../components/CaseStudySection";
import ConnectNetworkSection from "../../../components/ConnectNetowrkSection";
import complianceImg from "../../../public/factory-with-smoke-stack-against-sky-night.png";
import AlternateSection from "../../../components/AlternateSection";
import compliantIdImg from "../../../public/complient-identities-min.png";
import verifyableIdImg from "../../../public/verifiable-identities-min.png";
import confidentialIdImg from "../../../public/confidential-identities-min.png";
import facialIdImg from "../../../public/faical-identities-min.png";
import raysImg from "../../../public/bg-colorfull-rays.png";
import womanFaceRecogImg from "../../../public/woman-face-recog.png";
import Head from "next/head";

const Identities = () => {
  return (
    <>
      <Head>
        <title>Identities - Happymonk</title>
        <meta property="og:title" content="Identities" key="title" />
      </Head>
      <div>
        <div className={styles.landing}>
          <Header />
          <div className={styles.glowCircle}></div>
          <div className={styles.container}>
            <div className={styles.textContainer}>
              <h2 className={styles.landingText}>Identities</h2>
              <h6 className={styles.para}>
                Decentralized Identities for Humans, Devices and Things.
              </h6>
            </div>
            {/* <div className={styles.img}>
                        <Image
                            src={landingImg}
                            alt={'software in devices'}
                        />
                    </div> */}
          </div>
        </div>

        <div className={styles.alterList}>
          <div className={styles.list1}>
            {/* <div className={styles.glow}></div> */}
            <AlternateSection
              // isImageLast={true}
              heading={"Confidential Identities"}
              text={
                <div className={styles.container}>
                  <p className={styles.label}>
                    Fight fake identities, give the power back to your people.
                    Issue Identities, hold and verify them without having to
                    reveal critical information.
                  </p>
                </div>
              }
              image={<Image src={confidentialIdImg} alt={"image"} />}
            />
          </div>
          <div className={styles.list2}>
            <div className={styles.glow}></div>
            <AlternateSection
              isImageLast={true}
              heading={"Verifiable Identities"}
              text={
                <div className={styles.container}>
                  <p className={styles.label}>
                    Verify data from your organisations network on open, free
                    network with the power of hiding valuable information.
                  </p>
                </div>
              }
              image={<Image src={verifyableIdImg} alt={"image"} />}
            />
          </div>
          <div className={styles.list3}>
            <div className={styles.glow}></div>
            <AlternateSection
              // isImageLast={true}
              heading={"Complient Identities"}
              text={
                <div className={styles.container}>
                  <p className={styles.label}>
                    Share and scan your facial identities without ever having to
                    stand infront of another camera.
                  </p>
                </div>
              }
              image={<Image src={womanFaceRecogImg} alt={"image"} />}
            />
          </div>
          <div className={styles.list3}>
            <div className={styles.glow}></div>
            <AlternateSection
              isImageLast={true}
              heading={"Facial Identities "}
              text={
                <div className={styles.container}>
                  <p className={styles.label}>
                    Your face, your ID. Not knowing the user can be costly,
                    having the user data and loosing it to a malicious attack
                    can be even more costly.
                  </p>
                </div>
              }
              image={<Image src={facialIdImg} alt={"image"} />}
            />
          </div>
        </div>

        {/* commented due to no content */}
        {/* <CaseStudySection /> */}
        {/* <ConnectNetworkSection
        heading={"Loreum ipsum"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nibh et ut feugiat duis scelerisque urna, blandit."
        }
        url={"/register"}
        btnText={"Get Invited"}
        img={raysImg.src}
        isActive={true}
      /> */}
      </div>
    </>
  );
};

export default Identities;
