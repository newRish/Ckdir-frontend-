import styles from "../../styles/Network.module.scss";
import Header from "../../components/Header";
import mapDashboardImg from "../../public/mapDashboard.svg";
import Image from "next/image";
import Button from "../../components/Button";
import rectangleImg from "../../public/Rectangle_630.png";
import Link from "next/link";
import platformCard1Img from "../../public/closeHardwareBackground.png";
import platformCard2Img from "../../public/digital-world-banner-background-remixed-from-public-domain-by-nasa.png";
import platformCard3Img from "../../public/close-up-connect-component-background.png";
import platformCard4Img from "../../public/competition-computer-computing-perspective-sky.png";
import inteligenceImg from "../../public/icons/indeligence.svg";
import coordinatingDevicesImg from "../../public/icons/coordinating-devices.svg";
import governanceImg from "../../public/icons/central-governance.svg";
import privecyImg from "../../public/icons/lock-privecy.svg";
import React from "react";
import ConnectNetworkSection from "../../components/ConnectNetworkSection";

const Platform = ({ platFormCardData }) => {
  return (
    <div className={styles.platform}>
      <div className={styles.landing}>
        <Header />
        <div className={styles.textContainer}>
          <span className={styles.landingText}>
            Creating Private Network Solutions for industries, organisation and
            agencies.
          </span>
        </div>
      </div>

      {/* cards section */}
      <div className={styles.cardList}>
        {platFormCardData.map((card, i) => (


          <div className={styles.platformCard} key={i}>
            <div className={styles.platformCardImage}>
              <Image
                src={card.imageUrl}
                alt="card image"
              />
            </div>
            <div className={styles.platformTextContainer}>
              <div className={styles.platformCardHading}>
                {card.heading}
              </div>
              <div className={styles.platformCardText}>
                {card.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Salient features section */}
      <div className={styles.salientFeature}>
        <div className={styles.slientHeading}>Salient features</div>

        <div className={styles.featuresCard}>
          {/* glowing cards */}
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
          <div className={styles.circle4}></div>

          <ul className={styles.featureList}>
            <li className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Image src={inteligenceImg} alt="inteligence" />
              </div>
              <div className={styles.featureText}>
                Decentralised Intelligence
              </div>
            </li>
            <li className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Image src={coordinatingDevicesImg} alt="coordinating devices" />
              </div>
              <div className={styles.featureText}>
                Co-ordinating untrusted devices
              </div>
            </li>
            <li className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Image src={governanceImg} alt="governance" />
              </div>
              <div className={styles.featureText}>
                Central Oracle and governance
              </div>
            </li>
            <li className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Image src={privecyImg} alt="privecy" />
              </div>
              <div className={styles.featureText}>
                Privacy perserving personalisation
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* test network section */}
      <ConnectNetworkSection
        heading={"Test Public Network to be Launched this June!"}
        url={"/contact"}
      />

      {/* use case section */}
      <div className={styles.useCase}>
        <div className={styles.useCaseImg}>
          <Image src={rectangleImg} alt="use case" />
        </div>
        <div className={styles.useCaseText}>
          <div>
            <div className={styles.useCaseHeading}>Use Case</div>
            <div className={styles.useCaseSummary}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
              nisl semper eu suscipit sapien varius enim hendrerit egestas.
              Morbi pellentesque ut dignissim lorem. Facilisis adipiscing
              gravida phasellus dui cras arcu. Tellus laoreet quam aliquet id
              sem tempus sollicitudin aenean nibh. Eget lacus elit nunc enim
              purus nec sed aliquam. Aenean semper ultrices nunc, fusce. Eget mi
              ante praesent lobortis ipsum sed erat a magna. Turpis molestie
              ultrices malesuada sagittis, cursus facilisi arcu, egestas dictum.
              Est in elit rutrum nulla malesuada ut eros eget duis. Vitae sit
              dignissim luctus nibh turpis.
            </div>
          </div>

          <div className={styles.useCaseReadMore}>
            <Link href="/readmore">
              <a>Read more</a>
            </Link>
          </div>
        </div>
      </div>

      {/* using network section */}

      <div className={styles.network}>
        <div className={styles.netowrkImg}>
          <Image src={mapDashboardImg} alt="network dashboard" />
        </div>
        <div className={styles.networkTextContainer}>
          <div>
            <div className={styles.networkHeading}>
              Start using the Network today.
            </div>

            <p className={styles.networkText}>
              Bolster activity tracking and monitoring of your organisation with
              this state of the art technology embedded in Monk.
            </p>
          </div>
          <br />
          <div className={styles.contactBtn}>
            <Button title={"Contact"} url={"/contact"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;

export const getStaticProps = () => {
  const platFormCardData = [
    {
      imageUrl: platformCard1Img,
      heading: "Hardware",
      text: "Access the advantage of a private network that gives you the flexibility of staying connected through the cloud and also through the device - yes, offline too! Ensure no data loss due to internet connectivity fluctuations with the offline connectivity.",
    },
    {
      imageUrl: platformCard2Img,
      heading: "Cloud",
      text: "A private network across your organisation at various locations is just the thing to give you complete control over the tracking and maintenance of all data, across the network.",
    },
    {
      imageUrl: platformCard3Img,
      heading: "Public Network",
      text: "The benefits of Monk Network/Dhar doesn’t end there. Enjoy the privilege of having a public network, where all data is verifiable with zero knowledge proofs.",
    },
    {
      imageUrl: platformCard4Img,
      heading: "Zero Fee",
      text: "The best part? Monk Network is a Zero Fee network!",
    },
  ];

  return {
    props: {
      platFormCardData,
    },
  };
};
