import Image from "next/image";
import Header from "../../components/Header";
import styles from "../../styles/AI.module.scss";
import cs1Img from "../../public/Rectangle_630.png";
import dataIntegrationImg from "../../public/icons/dataIntegration.svg";
import deepLearningImg from "../../public/icons/deepLearning.svg";
import fogComputingImg from "../../public/icons/fogComputing.svg";
import cardImg1 from "../../public/man-using-tablet.png";
import cardImg2 from "../../public/hands-digital-universe-background.png";
import iphoneImg from "../../public/iphone11.png";
import fullPhoneImg from "../../public/phone-full-height.png";
import mapImg from "../../public/map.png";
// import decentralisedImg from "../../public/icons/decentralised-storeage.svg";
// import externalOrgImg from "../../public/icons/external-org.png";
// import serversImg from "../../public/icons/connected-servers.svg";
// import aiAnalyticsImg from "../../public/icons/AI-analytics.svg";
import workingChartImg from "../../public/working-chart.png";
import Head from "next/head";

const platFormCardData = [
  {
    imageUrl: cardImg1,
    heading: "Edge IOT",
    text:
      "Autonomous Prediction & Actions on the edge. Get critical insights, and aid your team with critical information from sensors, real-time data of your organization, being even offline.",
  },
  {
    imageUrl: cardImg2,
    heading: "Sensor Fusion",
    text:
      "Analyze, detect and take actions in real time. Save millions of dollars for organizations and improve human safety & organization efficiency.",
  },
];
const AI = () => {
  return (
    <>
      <Head>
        <title>Artificial Intelligence - Happymonk</title>
        <meta
          property="og:title"
          content="Artificial Intelligence"
          key="title"
        />
      </Head>
      <div>
        {/* landing section */}
        <div className={`${styles.landing} ${styles.blur}`}>
          {/* <div className={styles.darkLayer}></div> */}
          <Header />
          <div className={styles.textContainer}>
            <h2 className={styles.landingText}>
              Building Ethical, Responsible & Dependable AI for everyone.
            </h2>
          </div>
        </div>

        {/* chart section */}
        <div className={styles.chart}>
          <div className={styles.chartImg}>
            <Image src={workingChartImg} alt="chart" />
          </div>
        </div>

        {/* Salient features section */}

        <div className={styles.sf}>
          {/* <div className={styles.heading}>Salient features</div> */}

          <div className={styles.glassCard}>
            {/* glowing cards */}
            {/* <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
          <div className={styles.circle4}></div> */}

            <ul className={styles.sfList}>
              <li className={styles.sfItem}>
                <div className={styles.featureIcon}>
                  <Image src={fogComputingImg} alt="icon" />
                </div>
                <h5 className={styles.sfText}>Fog computing</h5>
              </li>
              <li className={styles.sfItem}>
                <div className={styles.featureIcon}>
                  <Image src={deepLearningImg} alt="icon" />
                </div>
                <h5 className={styles.sfText}>Deep learning</h5>
              </li>
              <li className={styles.sfItem}>
                <div className={styles.featureIcon}>
                  <Image src={dataIntegrationImg} alt="icon" />
                </div>
                <h5 className={styles.sfText}>Data Integration</h5>
              </li>
            </ul>
          </div>
        </div>

        {/* cards section */}
        <div className={styles.cardList}>
          {platFormCardData.map((card, i) => (
            <div className={styles.platformCard} key={i}>
              <div className={styles.platformCardImage}>
                <Image src={card.imageUrl} alt="card image" />
              </div>
              <div className={styles.platformTextContainer}>
                <h2 className={styles.platformCardHading}>{card.heading}</h2>
                <p className={styles.platformCardText}>{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* software section */}
        <div className={styles.software}>
          <h2 className={styles.heading}>Software</h2>
          <div className={styles.sCards}>
            <div className={styles.sCard}>
              <div className={styles.sCardImg}>
                <Image src={iphoneImg} alt="device" />
              </div>
              <div className={styles.sCardText}>
                <h3 className={styles.sCardHeading}>
                  Detection & Identification
                </h3>
                <p className={styles.sCardSummary}>
                  Hyper Connected Systems : Proactively Detects Incidents across
                  factories, warehouse, fleet, ensuring improved employee
                  safety, lesser workplace accidents, easier compliance
                  management.
                </p>
              </div>
            </div>

            <div className={styles.sCard}>
              <div className={styles.sCardImg}>
                <Image src={mapImg} alt="device" />
              </div>
              <div className={`${styles.sCardText} ${styles.alignEnd}`}>
                <h2 className={styles.sCardHeading}>
                  Decentralized Command and Control
                </h2>
                <p className={styles.sCardSummary}>
                  Centralized Command & Control over your entire decentralized
                  infrastructure.
                </p>
              </div>
            </div>

            <div className={styles.sCard}>
              <div className={styles.sCardImg}>
                <Image src={fullPhoneImg} alt="device" />
              </div>
              <div className={styles.sCardText}>
                <h2 className={styles.sCardHeading}>
                  Visual Track and Trace
                </h2>
                <p className={styles.sCardSummary}>
                  Spot abnormal behavior or suspicious activity that could
                  indicate a problem without even identifying the individual or
                  inferring any unnecessary bias.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* case study section */}
        {/* no content */}
        {/* <div className={styles.cs}>
        <div className={styles.csItem}>
          <div className={styles.csText}>
            <div className={styles.csHeading}>Case study 1</div>
            <div className={styles.csSummary}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
              suspendisse etiam sit lacus. Curabitur purus senectus sed nisl.
              Donec amet maecenas imperdiet id duis id mi etiam et. Ut non
              cursus porttitor cursus tortor. Ut scelerisque odio tellus id
              varius turpis vestibulum, nulla. Fames ac id sollicitudin euismod
              pretium ullamcorper tempus. Pellentesque facilisi at blandit sit
              adipiscing varius facilisi habitant malesuada. Scelerisque morbi
              tristique platea tortor magna. Aliquet in tortor enim quis.
              Sagittis, mauris, felis et nisi pharetra, enim, platea mollis.
              Urna consectetur diam id accumsan tristique faucibus maecenas.
            </div>
          </div>
          <div className={styles.csImg}>
            <Image src={cs1Img} alt="case study" />
          </div>
        </div>
        <div className={styles.csItem}>
          <div className={`${styles.csText} ${styles.order1}`}>
            <div className={styles.csHeading}>Case study 2</div>
            <div className={styles.csSummary}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
              suspendisse etiam sit lacus. Curabitur purus senectus sed nisl.
              Donec amet maecenas imperdiet id duis id mi etiam et. Ut non
              cursus porttitor cursus tortor. Ut scelerisque odio tellus id
              varius turpis vestibulum, nulla. Fames ac id sollicitudin euismod
              pretium ullamcorper tempus. Pellentesque facilisi at blandit sit
              adipiscing varius facilisi habitant malesuada. Scelerisque morbi
              tristique platea tortor magna. Aliquet in tortor enim quis.
              Sagittis, mauris, felis et nisi pharetra, enim, platea mollis.
              Urna consectetur diam id accumsan tristique faucibus maecenas.
            </div>
          </div>
          <div className={styles.csImg}>
            <Image src={cs1Img} alt="case study" />
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default AI;

// export const getStaticProps = async () => {
//     const platFormCardData = [

//         {
//             imageUrl: cardImg1,
//             heading: "Public Network",
//             text: "The benefits of Monk Network/Dhar doesn’t end there. Enjoy the privilege of having a public network, where all data is verifiable with zero knowledge proofs.",
//         },
//         {
//             imageUrl: cardImg1,
//             heading: "Zero Fee",
//             text: "The best part? Monk Network is a Zero Fee network!",
//         },
//     ];

//     return {
//         props: {
//             platFormCardData,
//         },
//     };
// };
