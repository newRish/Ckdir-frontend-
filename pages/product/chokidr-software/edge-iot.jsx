import Header from "../../../components/Header";
import styles from "../../../styles/AutonomousIdentities.module.scss";
import landingImg from "../../../public/vichels-on-path.png";
import Image from "next/image";
import CaseStudySection from "../../../components/CaseStudySection";
import ConnectNetworkSection from "../../../components/ConnectNetowrkSection";
import AlternateSection from "../../../components/AlternateSection";
import fieldImg from "../../../public/countryside-field-sunny-day-countryside.png";
import derekImg from "../../../public/derek-lee.png";
import workOfflineImg from "../../../public/tablat-dashboard.png";
import privateGroImg from "../../../public/map-pin-gps-nav.png";
import futureInteImg from "../../../public/future-artificial-intelligence.png";
import retriImg from "../../../public/tab-mobo.png";
import ddsImg from "../../../public/businessman-logging-his-tab.png";
import wfImg from "../../../public/mob-ph-sharing.png";

import digitalIdentityImg from "../../../public/senior-woman-using-her-phone-park.png";
import greenEarthImg from "../../../public/freen-earth.png";
import edgeStyle from "../../../styles/EdgeIoT.module.scss";
// import raysImg from "../../../public/bg-colorfull-rays.png";
import Head from 'next/head'

const EdgeIot = () => {
  return (
    <>
      <Head>
        <title>Edge IOT - Happymonk</title>
        <meta
          property="og:title"
          content="Edge IOT"
          key="title"
        />
      </Head>
      <div>
        <div className={`${styles.landing} ${edgeStyle.landing}`}>
          <Header />
          {/* <div className={styles.glowCircle}></div> */}
          <div className={`${styles.container} ${edgeStyle.textContainer}`}>
            <div className={`${styles.textContainer} ${edgeStyle.mainText}`}>
              <h2 className={styles.landingText}>Edge IOT</h2>
              <p className={`${styles.para} ${edgeStyle.para}`}>
                Go Offline, Get reliable.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.alterList}>
          <div className={styles.list1}>
            {/* <div className={styles.glow}></div> */}
            <AlternateSection
              // isImageLast={true}
              heading={"RetroFit"}
              text={
                <div className={styles.container}>
                  <p className={styles.label}>
                    Retrofit your existing infrastructure sensors, cctv cameras,
                    through dhar to enable Autonomous edge intelligence, private
                    ground to ground communication across fleet and warehouse
                  </p>
                </div>
              }
              image={<Image src={retriImg} alt={"image"} />}
            />
          </div>
          <div className={styles.list2}>
            {/* <div className={styles.glow}></div> */}
            <AlternateSection
              isImageLast={true}
              heading={"Infinite Opportunities from Infinite Data "}
              text={
                <div className={styles.container}>
                  <p className={styles.label}>
                    Combining the real and digital worlds becomes possible with
                    our comprehensive Digital Twin approach. It enables
                    integration of the entire product lifecycle with the factory
                    and plant life cycle, along with performance data. The
                    result is a continuous loop of optimization, both for the
                    product and the production.
                  </p>
                </div>
              }
              image={<Image src={futureInteImg} alt={"image"} />}
            />
          </div>
          <div className={styles.list3}>
            {/* <div className={styles.glow}></div> */}
            <AlternateSection
              // isImageLast={true}
              heading={"Private Ground Network"}
              text={
                <div className={styles.container}>
                  <p className={styles.label}>
                    LoRa Powered Systems allows sensors and devices to
                    communicate real-time data ground to ground over private
                    decentralized network.
                  </p>
                </div>
              }
              image={<Image src={privateGroImg} alt={"image"} />}
            />
          </div>
          <div className={styles.list3}>
            {/* <div className={styles.glow}></div> */}
            <AlternateSection
              isImageLast={true}
              heading={"Scale Horizontally"}
              text={
                <div className={styles.container}>
                  <p className={styles.label}>
                    Real-Time Track & Trace through digital twins across all the
                    warehouse, devices and fleets in one command and control
                    center.
                  </p>
                </div>
              }
              image={<Image src={workOfflineImg} alt={"image"} />}
            />
          </div>
          <div className={styles.list3}>
            {/* <div className={styles.glow}></div> */}
            <AlternateSection
              isImageLast={false}
              heading={"Works Offline"}
              text={
                <div className={styles.container}>
                  <p className={styles.label}>
                    Detects, identifies, stores and Sync Data with the network
                    in case the systems face any network issue. center.
                  </p>
                </div>
              }
              image={<Image src={wfImg} alt={"image"} />}
            />
          </div>
          <div className={styles.list3}>
            {/* <div className={styles.glow}></div> */}
            <AlternateSection
              isImageLast={true}
              heading={"Prevent DDoS Attacks "}
              text={
                <div className={styles.container}>
                  <p className={styles.label}>
                    Common Edge IoT systems are prone to DDos Attacks across the
                    systems. Our Consensus mechanism prevents any DDoS, allowing
                    you to keep your data on premise without compromising.F
                  </p>
                </div>
              }
              image={<Image src={ddsImg} alt={"image"} />}
            />
          </div>
        </div>

        {/* commented due to no content */}
        {/* <CaseStudySection /> */}
        {/* <ConnectNetworkSection
      img={raysImg?.src}
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

export default EdgeIot;
