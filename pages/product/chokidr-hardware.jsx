import ConnectNetworkSection from "../../components/ConnectNetowrkSection";
import Header from "../../components/Header";
import Image from "next/image";
import styles from "../../styles/ChokidrHardware.module.scss";
import arrowFowwardImg from "../../public/icons/Arrow_Forward.svg";
import cloudServer from "../../public/icons/cloud-server.svg";
import ggComImg from "../../public/icons/gg-comunication.svg";
import iotImg from "../../public/icons/iot.svg";
import horioztalScaleImg from "../../public/icons/horizontally-scrollable.svg";
import sensorFusionImg from "../../public/icons/sensor-fusion.svg";
import chokidrBackImg from "../../public/chokidr-back.png";
import scaleImg from "../../public/global-networking-global-business-network.png";
import offlineImg from "../../public/css.png";
import connectedWorldImg from "../../public/g2g-com.png";
import iotManImg from "../../public/iot-hw.png";
import undrawValut from "../../public/ai-edge.png";
import networkContactImg from "../../public/cloud-computing-banner-background-smart-city-1.png";
import Head from 'next/head'

const ChokidrHardware = ({ dharList }) => {
  const feature = [
    {
      heading: "AI on edge",
      text: "Intrusion Detection, Analytics, Event Detection. ",
      img: undrawValut,
    },
    {
      heading: "IOT",
      text:
        "Connecting to different devices, IP Cameras, BLE Sensors Enabled Devices, LoRaWAN enabled Sensors",
      img: iotManImg,
    },
    {
      heading: "Ground to Ground Communication",
      text:
        "Connected through the LoRaWan network and you can communicate between end-devices and multiple ground stations to assist in coordination between agencies to ensure a safe and efficient execution of operations.",
      img: connectedWorldImg,
    },
    {
      heading: "Offline",
      text: "Detect and identify any incident even when you are offline.",
      img: offlineImg,
    },
    {
      heading: "Scalable",
      text:
        "Military-Grade autonomy and data protection device that is Adaptable, Scalable and Affordable.",
      img: scaleImg,
    },
  ];
  return (
    <>
      <Head>
        <title>Hardware - Happymonk</title>
        <meta property="og:title" content="Hardware" key="title" />
      </Head>
      <div>
        <div className={styles.landing}>
          <Header />
          <div className={styles.glowCircle}></div>
          <div className={styles.devicesImg}></div>

          <div className={styles.mainText}>
            <div className={styles.quotes}>
              <h2 className={styles.stayImg}>STAY</h2>
              <div>
                <h2 className={styles.quoteText}>Connected.</h2>
                <h2 className={styles.quoteText}>Informed.</h2>
                <h2 className={styles.quoteText}>Safe.</h2>
              </div>
            </div>
            <p className={styles.para}>
              Hardware Systems Designed for People, organizations & Things.
              Bridge the gap between IoT Devices and Blockchain Network
            </p>
          </div>
        </div>

        {/* device list */}
        <ul className={styles.deviceList}>
          <li className={styles.item}>
            <div className={styles.img}>
              <Image src={cloudServer} alt="icon" />
            </div>
            <h6 className={styles.text}>AI on Edge</h6>
          </li>
          <li className={styles.item}>
            <div className={styles.img}>
              <Image src={ggComImg} alt="icon" />
            </div>
            <h6 className={styles.text}>G-G Communcation</h6>
          </li>
          <li className={styles.item}>
            <div className={styles.img}>
              <Image src={iotImg} alt="icon" />
            </div>
            <h6 className={styles.text}>IOT</h6>
          </li>
          <li className={styles.item}>
            <div className={styles.img}>
              <Image src={horioztalScaleImg} alt="icon" />
            </div>
            <h6 className={styles.text}>Horizontally Scalable</h6>
          </li>
          <li className={styles.item}>
            <div className={styles.img}>
              <Image src={sensorFusionImg} alt="icon" />
            </div>
            <h6 className={styles.text}>Sensor Fusion</h6>
          </li>
        </ul>

        {/* dhar section */}
        <div className={styles.dhar}>
          <div>
            <h2 className={styles.heading}>Dhar</h2>
            <h6 className={styles.dharQuote}>
              <div>
                You’re backhauling data to a cloud that’s far away, miles
                away...
              </div>
              <div className={styles.dharSaid}>Said - ‘cloud’</div>
            </h6>
            <div></div>

            <div className={styles.dharPoints}>
              <ul className={styles.dharList}>
                <p className={styles.dharText}>
                  Next-generation applications and services require a new
                  computing infrastructure that delivers low latency networks
                  and high-performance computing at the extreme edge of the
                  network. Industry sensors and cameras are sensing things in
                  the real world and taking action on the information.
                </p>
                {dharList?.map((e, i) => (
                  <li key={i} className={styles.dharItem}>
                    {/* <div ></div> */}
                    <div className={styles.dharText}>
                      <div className={styles.dharItemStyle}></div>
                      <p>{e}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className={styles.chokidrBackImg}>
                <Image src={chokidrBackImg} alt={"dhar"} />
              </div>
            </div>
          </div>
        </div>

        {/* feature section */}
        <div className={styles.features}>
          {feature.map((e, i) => (
            <div className={styles.feature} key={i}>
              <div
                className={`${styles.text} ${
                  i !== 0 && i % 2 !== 0 && styles.order2
                }`}
              >
                <h2 className={styles.subHeading}>{e.heading}</h2>
                <p className={styles.para}>{e.text}</p>
              </div>
              <div
                className={`${styles.img} ${
                  i !== 0 && i % 2 !== 0 && styles.flexStart
                }`}
              >
                <Image src={e.img} alt="feature image" />
              </div>
            </div>
          ))}
        </div>

        {/* case studies section */}
        {/* <div className={styles.cs}>

                <div className={styles.subHeading}>Case Studies</div>
                <ul className={styles.cards}>
                    <li className={styles.card}>
                        <div className={styles.cardLeft}>
                            <div className={styles.cardSq}></div>
                            <div className={styles.cardText}>
                                <div className={styles.cardHeading}>Case Study 1</div>
                                <div className={styles.cardSummary}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisl, ante sit in porta consectetur sodales. Quam curabitur diam massa, malesuada laoreet pulvinar amet nunc.
                                </div>
                            </div>
                        </div>
                        <div className={styles.arrow}>
                            <Image
                                src={arrowFowwardImg}
                                alt="icon"
                            />
                        </div>
                    </li>

                    <li className={styles.card}>
                        <div className={styles.cardLeft}>
                            <div className={styles.cardSq}></div>
                            <div className={styles.cardText}>
                                <div className={styles.cardHeading}>Case Study 1</div>
                                <div className={styles.cardSummary}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisl, ante sit in porta consectetur sodales. Quam curabitur diam massa, malesuada laoreet pulvinar amet nunc.
                                </div>
                            </div>
                        </div>
                        <div className={styles.arrow}>
                            <Image
                                src={arrowFowwardImg}
                                alt="icon"
                            />
                        </div>
                    </li>

                    <li className={styles.card}>
                        <div className={styles.cardLeft}>
                            <div className={styles.cardSq}></div>
                            <div className={styles.cardText}>
                                <div className={styles.cardHeading}>Case Study 1</div>
                                <div className={styles.cardSummary}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisl, ante sit in porta consectetur sodales. Quam curabitur diam massa, malesuada laoreet pulvinar amet nunc.
                                </div>
                            </div>
                        </div>
                        <div className={styles.arrow}>
                            <Image
                                src={arrowFowwardImg}
                                alt="icon"
                            />
                        </div>
                    </li>
                </ul>
            </div> */}

        {/* join the network section */}
        <ConnectNetworkSection
          img={networkContactImg.src}
          heading={"Join the Network"}
          text={
            "Dhar. Launching this June! Deploy into your existing network, soon!"
          }
          url={"/contact"}
          isActive={true}
        />
      </div>
    </>
  );
};

export default ChokidrHardware;

export const getStaticProps = () => {
  return {
    props: {
      dharList: [
        "Connect up 8 Cameras, BLE Enabled Sensor integration like thermal, LiDAR, ML/DL algorithms development and integration, Remote firmware upgrade, Audio and video, Cloud and mobile apps, PoE with IP67 enclosure",
        "MultiProcesser System with integrated FPGA module customized for Hashes & Hash graphs.",
        "Integrated Battery Backup for upto 12 hours.",
        "Connect via 5G, LorwaWAN",
        "Theft Prevention Module.",
      ],
    },
  };
};
