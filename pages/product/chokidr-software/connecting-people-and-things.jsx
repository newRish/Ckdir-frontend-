import Header from "../../../components/Header";
import styles from "../../../styles/AutonomousIdentities.module.scss";
import mainStyles from "../../../styles/ConnectingPeopleAndThings.module.scss";
import landingImg from "../../../public/connect-peopl _ things-main-banner-min.png";
import Image from "next/image";
import CaseStudySection from "../../../components/CaseStudySection";
import ConnectNetworkSection from "../../../components/ConnectNetowrkSection";
import complianceImg from "../../../public/factory-with-smoke-stack-against-sky-night.png";
import AlternateSection from "../../../components/AlternateSection";
import envImg from "../../../public/morning-road-people.png";
import reliableDataImg from "../../../public/night-street-trafic.png";
import realTimeTrackingImg from "../../../public/real-time-tracking-min.png";
import transparencyImg from "../../../public/transparency-of-operations-min.png";
import connectLegecyImg from "../../../public/connect-to-legacy-system-min.png";
// import raysImg from "../../../public/bg-colorfull-rays.png";
import Head from 'next/head'

const ConnectingPeopleAndThings = () => {
  return (
    <>
      <Head>
        <title>Connecting people and things - Happymonk</title>
        <meta property="og:title" content="Connecting people and things" key="title" />
      </Head>
      <div>
        <div className={`${styles.landing} ${mainStyles.landing}`}>
          <Header />
          {/* <div className={styles.glowCircle}></div> */}
          <div className={`${styles.container} ${mainStyles.textContainer}`}>
            <div className={`${styles.textContainer} ${mainStyles.mainText}`}>
              <h2
                className={`${styles.landingText} ${mainStyles.landingText}`}
              >
                Connecting people and things
              </h2>
              <p className={`${styles.para} ${mainStyles.para}`}>
                Connect Sensors, Information Boards.
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
              heading={"Real time tracking"}
              text={
                <div className={styles.container}>
                  <p className={styles.label}>
                    Enables you to track your fleet real time. Know where they
                    go, on the go.
                  </p>
                </div>
              }
              image={<Image src={realTimeTrackingImg} alt={"image"} />}
            />
          </div>
          <div className={styles.list2}>
            {/* <div className={styles.glow}></div> */}
            <AlternateSection
              isImageLast={true}
              heading={"Connect to legacy system"}
              text={
                <div className={styles.container}>
                  <p className={styles.label}>
                    Enables you to track your fleet real time, giving you
                    complete access to all data that might be.
                  </p>
                </div>
              }
              image={<Image src={connectLegecyImg} alt={"image"} />}
            />
          </div>
          <div className={styles.list3}>
            {/* <div className={styles.glow}></div> */}
            <AlternateSection
              // isImageLast={true}
              heading={"Transparency of operations"}
              text={
                <div className={styles.container}>
                  <p className={styles.label}>
                    Realtime tracking, fencing, heavily needed for the World
                    where multiple touchpoints is everyday business.
                  </p>
                </div>
              }
              image={<Image src={transparencyImg} alt={"image"} />}
            />
          </div>
        </div>

        {/* commented due to no content */}
        {/* <CaseStudySection /> */}
        {/* <ConnectNetworkSection
            img={raysImg?.src}
                heading={"Loreum ipsum"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nibh et ut feugiat duis scelerisque urna, blandit."}
                url={"/register"}
                btnText={'Get Invited'}
                isActive={true}
            /> */}
      </div>
    </>
  );
};

export default ConnectingPeopleAndThings;
