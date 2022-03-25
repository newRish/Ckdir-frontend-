import Header from "../../../components/Header";
import styles from "../../../styles/AutonomousIdentities.module.scss";
import autonomSpecificStyles from "../../../styles/AutonomousSpecific.module.scss";
import landingImg from "../../../public/vichels-on-path.png";
import Image from "next/image";
import CaseStudySection from "../../../components/CaseStudySection";
import ConnectNetworkSection from "../../../components/ConnectNetowrkSection";
import complianceImg from "../../../public/factory-with-smoke-stack-against-sky-night.png";
import AlternateSection from "../../../components/AlternateSection";
import envImg from "../../../public/morning-road-people.png";
import reliableDataImg from "../../../public/night-street-trafic.png";
import raysImg from "../../../public/bg-colorfull-rays.png";
import Head from 'next/head'

const AutonomousIdentities = () => {
  return (
    <>
      <Head>
        <title>Autonomous Machines - Happymonk</title>
        <meta property="og:title" content="Autonomous Machines" key="title" />
      </Head>
      <div>
        <div className={`${styles.landing} ${autonomSpecificStyles.landing}`}>
          <Header />
          {/* <div className={styles.glowCircle}></div> */}
          <div
            className={`${styles.container} ${autonomSpecificStyles.textContainer}`}
          >
            <div
              className={`${styles.textContainer} ${autonomSpecificStyles.textwrapper}`}
            >
              <h2
                className={`${styles.landingText} ${autonomSpecificStyles.landingText}`}
              >
                Autonomous Machines
              </h2>
              <p className={`${styles.para} ${autonomSpecificStyles.para}`}>
                Autonomous machines revolutionize our economy greatly by
                improving the efficiency in delivery, transportation,
                manufacturing, and many other sectors.
              </p>
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
              heading={"Compliance"}
              text={
                <div className={styles.container}>
                  <p className={styles.label}>
                    Compliant with regulatory standards like GDPR.
                  </p>
                </div>
              }
              image={<Image src={complianceImg} alt={"image"} />}
            />
          </div>
          <div className={styles.list2}>
            {/* <div className={styles.glow}></div> */}
            <AlternateSection
              isImageLast={true}
              heading={"Controlled Environment"}
              text={
                <div className={styles.container}>
                  <p className={styles.label}>
                    Smart real time monitoring within the network of your IoT.
                  </p>
                </div>
              }
              image={<Image src={envImg} alt={"image"} />}
            />
          </div>
          <div className={styles.list3}>
            {/* <div className={styles.glow}></div> */}
            <AlternateSection
              // isImageLast={true}
              heading={"Reliable Data"}
              text={
                <div className={styles.container}>
                  <p className={styles.label}>
                    Of all incidents/activities being monitored on the network.
                  </p>
                </div>
              }
              image={<Image src={reliableDataImg} alt={"image"} />}
            />
          </div>
        </div>

        {/* commented due to no content */}
        {/* <CaseStudySection /> */}
        {/* <ConnectNetworkSection
       img={raysImg.src}
        heading={"Loreum ipsum"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nibh et ut feugiat duis scelerisque urna, blandit."
        }
        url={"/register"}
        btnText={"Get Invited"}
        isActive={true}
      /> */}
      </div>
    </>
  );
};

export default AutonomousIdentities;
