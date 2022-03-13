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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare dolor pellentesque elementum ultrices sem tincidunt. ",
      img: connectedWorldImg,
    },
    {
      heading: "Offline",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare dolor pellentesque elementum ultrices sem tincidunt.",
      img: offlineImg,
    },
    {
      heading: "Scalable",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare dolor pellentesque elementum ultrices sem tincidunt.",
      img: scaleImg,
    },
  ];
  return (
    <div>
      <div className={styles.landing}>
        <Header />
        <div className={styles.glowCircle}></div>
        <div className={styles.devicesImg}></div>

        <div className={styles.mainText}>
          <div className={styles.quotes}>
            <div className={styles.stayImg}>STAY</div>
            <div>
              <div className={styles.quoteText}>Connected.</div>
              <div className={styles.quoteText}>Informed.</div>
              <div className={styles.quoteText}>Safe.</div>
            </div>
          </div>
          <div className={styles.para}>
            Hardware Systems Designed for People, organizations & Things. Bridge
            the gap between IoT Devices and Blockchain Network
          </div>
        </div>
      </div>

      {/* device list */}
      <ul className={styles.deviceList}>
        <li className={styles.item}>
          <div className={styles.img}>
            <Image src={cloudServer} alt="icon" />
          </div>
          <div className={styles.text}>AI on Edge</div>
        </li>
        <li className={styles.item}>
          <div className={styles.img}>
            <Image src={ggComImg} alt="icon" />
          </div>
          <div className={styles.text}>G-G Communcation</div>
        </li>
        <li className={styles.item}>
          <div className={styles.img}>
            <Image src={iotImg} alt="icon" />
          </div>
          <div className={styles.text}>IOT</div>
        </li>
        <li className={styles.item}>
          <div className={styles.img}>
            <Image src={horioztalScaleImg} alt="icon" />
          </div>
          <div className={styles.text}>Horizontally Scalable</div>
        </li>
        <li className={styles.item}>
          <div className={styles.img}>
            <Image src={sensorFusionImg} alt="icon" />
          </div>
          <div className={styles.text}>Sensor Fusion</div>
        </li>
      </ul>

      {/* dhar section */}
      <div className={styles.dhar}>
        <div>
          <div className={styles.heading}>Dhar</div>
          <div className={styles.dharText}>
            An autonomous, edge device that is Lorawan compatible, which can be
            retro-fitted into your network. Powered by 52 RFIDs and sixteen
            cameras, that work with your existing legacy infrastructure, that
            can auto-connect to other Dhar in nearby vicinity.
          </div>
          <div className={styles.dharPoints}>
            <ul className={styles.dharList}>
              {dharList?.map((e, i) => (
                <li key={i} className={styles.dharItem}>
                  <div className={styles.dharItemStyle}></div>
                  <div className={styles.dharText}>{e}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.chokidrBackImg}>
          <Image src={chokidrBackImg} alt={"dhar"} />
        </div>
      </div>

      {/* feature section */}
      <div className={styles.features}>
        {feature.map((e, i) => (
          <div className={styles.feature} key={i}>
            <div
              className={`${styles.text} ${i !== 0 && i % 2 !== 0 && styles.order2}`}
            >
              <div className={styles.subHeading}>{e.heading}</div>
              <div className={styles.para}>{e.text}</div>
            </div>
            <div className={`${styles.img} ${i !== 0 && i % 2 !== 0 && styles.flexStart}`}>
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
        heading={"Join the Network"}
        text={
          "Dhar. Launching this June! Deploy into your existing network, soon!"
        }
        url={"/contact"}
        isActive={true}
      />
    </div>
  );
};

export default ChokidrHardware;

export const getStaticProps = () => {
  return {
    props: {
      dharList: [
        "Legacy Retrofitting - Connect Dhar into your existing IoT network, with no need for replacements!",
        "Private network over LoraWAN - With a private network at your hand, your data is secure. The days of relying on telco providers are over.",
        "Integrated IoT - Compatible with devices working on industry common protocols.",
        "Scalable and Affordable - Easily scalable by connecting multiple devices over long-range distances based on your organization's needs.",
      ],
    },
  };
};
