import Button from "../components/Button";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import autonomousImg from "../public/icons/decentralized-network.svg";
import decentralisedImg from "../public/icons/blockchain.svg";
import edgeComputed from "../public/icons/business-network.svg";
import chokidarDeviceImg from "../public/chokidar-device.png";
import revolutionAtomImg from "../public/revolution-atom.png";
import connectingPeopleImg from "../public/connectingPeople.png";
import securityAuditImg from "../public/securityAudit.png";
import socialFootprintImg from "../public/socialFootprint.png";
import complianceImg from "../public/icons/compliance.png";
import controlledEnvImg from "../public/icons/controlledEnv.png";
import reliableDataImg from "../public/icons/reliableData.svg";
import locationImg from "../public/icons/location.svg";
import proofDocImg from "../public/icons/proofDoc.svg";
import authorityProofImg from "../public/icons/authorityProof.svg";
import homeAnalytics from "../public/homeAnalytics.png";
import smartAIImg from "../public/smartAI.png";
import Card from "../components/Card";
import iphone11Img from "../public/iphone11.png";
import CaseStudySection from "../components/CaseStudySection";
import { Icons } from "../utils/icons";
import { useState } from "react";

const Home = () => {
  const [carouselSwitch, setCarouselSwitch] = useState(false);
  return (
    <div className={styles.home}>
      <div className={styles.landingContainer}>
        <div className={styles.darkLayer}>
          <Header />
          <div className={styles.landingPage}>
            <div className={styles.heading1}>
              Starting at the Edge of the present.
            </div>
            <p className={styles.landingText}>
              We innovate futuristic tech that promises a safer, better and
              beautiful future. One that lets you unlock a World from more
              possibilities.
            </p>
            <div className={styles.readMore}>
              <Button
                title={"Read More"}
                url={"/readMore"} // need to update readmore route
              />
            </div>
          </div>
        </div>
      </div>

      {/* Black Box section */}
      <div className={styles.balckBoxContainer}>
        <div className={styles.chokidarImg}>
          <Image src={chokidarDeviceImg} alt="Chokidar" />
        </div>
        <div className={styles.heading1}>
          Black Box
          <br />
          of the Future
        </div>
        <ul className={styles.balckBoxIconList}>
          <li className={styles.blackBoxIcon}>
            <div className={styles.balckBoxIconImg}>
              <Image src={autonomousImg} alt="autonomous" />
            </div>
            <div className={styles.backBoxListText}>Autonomous</div>
          </li>
          <li className={styles.blackBoxIcon}>
            <div className={styles.balckBoxIconImg}>
              <Image src={decentralisedImg} alt="Decentralised" />
            </div>
            <div className={styles.backBoxListText}>Decentralised</div>
          </li>
          <li className={styles.blackBoxIcon}>
            <div className={styles.balckBoxIconImg}>
              <Image src={edgeComputed} alt="edge computed" />
            </div>
            <div className={styles.backBoxListText}>Edge Computed</div>
          </li>
        </ul>
      </div>

      {/* revolution through change section */}
      <div className={styles.revolutionaCotainer}>
        <div className={styles.revolutionAtomImg}>
          <Image src={revolutionAtomImg} alt="Revolution Atom" />
        </div>
        <div className={styles.heading2}>Revolution through Change</div>

        <ul className={styles.revolutionList}>
          <li className={styles.revolutionItem}>
            <div className={""}>
              <Image src={decentralisedImg} alt="autonomous Industries" />
            </div>
            <div className={styles.revolutionItemText}>
              Autonomous Indrustires
            </div>
          </li>

          <li className={styles.revolutionItem}>
            <div className={""}>
              <Image src={connectingPeopleImg} alt="connecting people" />
            </div>
            <div className={styles.revolutionItemText}>Connecting people</div>
          </li>

          <li className={styles.revolutionItem}>
            <div className={""}>
              <Image src={securityAuditImg} alt="Seaurity and audit" />
            </div>
            <div className={styles.revolutionItemText}>Security and Audit</div>
          </li>

          <li className={styles.revolutionItem}>
            <div className={""}>
              <Image src={socialFootprintImg} alt="Social Footprint" />
            </div>
            <div className={styles.revolutionItemText}>Social Footprint</div>
          </li>
        </ul>

        <div className={styles.revolutionCard}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>

          <ul className={styles.revolutionCardList}>
            <li className={styles.revolutionCardItem}>
              <div className={styles.revolutionCardImage}>
                <Image src={complianceImg} alt="compliance" />
              </div>
              <div className={styles.revolutionCardSubHeading}>Compliance</div>
              <p className={styles.revolutionCardText}>
                Compliant with regulatory
                <br />
                standards like GDPR.
              </p>
            </li>

            <li className="revolutionCardItem">
              <div className="revolutionCardImage">
                <Image src={controlledEnvImg} alt="controlled devices" />
              </div>
              <div className={styles.revolutionCardSubHeading}>
                Controlled Environment
              </div>
              <p className={styles.revolutionCardText}>
                Smart real time monitoring
                <br />
                within the network of your IoT.
              </p>
            </li>

            <li className="revolutionCardItem">
              <div className="revolutionCardImage">
                <Image src={reliableDataImg} alt="reliable data" />
              </div>
              <div className={styles.revolutionCardSubHeading}>
                Reliable Data
              </div>
              <p className={styles.revolutionCardText}>
                Of all incidents/activities being
                <br />
                monitored on the network.
              </p>
            </li>
          </ul>

          <div className={styles.readMoreText}>
            <Link href="/">
              <a>
                <span>Read More</span>
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Protokollo Section */}
      <div className={styles.protokolloContiner}>
        <div className={styles.protokolloBg1}></div>
        <div className={styles.protokolloBg2}></div>
        <div className={styles.heading2}>ProtoKollo</div>
        <p className={styles.protokolloSummary}>
          Imagine a world where you could provide your location proof, without
          giving away the actual location of the person/object/entity. Imagine a
          world where your Identity is verified without having to share your
          personal details such as age, date of birth etc. A world where data
          that is sent to authorities are reliable and not sent to wrong
          personnel. A world where you could track entry and exit; and activity
          of your organization with reliable data? The imagination just got
          real.
        </p>

        <div className={styles.heading3}>Monk protocol provides</div>

        <ul className={styles.protocolList}>
          <li className="protocolItem">
            <div className="protocolImg">
              <Image src={locationImg} alt="location" />
            </div>
            <div className={styles.protocolItemText}>Proof of Location</div>
          </li>

          <li className="protocolItem">
            <div className="protocolImg">
              <Image src={proofDocImg} alt="Proof Doc" />
            </div>
            <div className={styles.protocolItemText}>Proof of Activity</div>
          </li>

          <li className="protocolItem">
            <div className="protocolImg">
              <Image src={authorityProofImg} alt="Authority" />
            </div>
            <div className={styles.protocolItemText}>Proof of Authority</div>
          </li>
        </ul>
      </div>

      {/* More on ProtoKollo section */}
      <div className={styles.aditionalProtoKollo}>
        <div className={styles.aditionalProtoKolloBgImg}>
          {/* {!carouselSwitch ? ( */}
          <div
            className={`${styles.aditionalProtoKolloLeft} ${
              carouselSwitch ? styles.dNone : ""
            }`}
          >
            <div className={styles.heading2}>Sensor fusion and Analytics</div>
            <div className={styles.aditionalProtoKolloLeftImg}>
              <Image src={homeAnalytics} alt="home analytics" />
            </div>
            <p className={styles.para}>
              Travel agencies have an increase of 20% in customer satisfaction
              with Chokidr. SRS travels - Cameras and Sensors - Human
              intervention.
            </p>
            <div className={styles.readMoreText}>
              <Link href="/">
                <a>Read more</a>
              </Link>
            </div>
            <div className={styles.carouselBtn}>
              <Icons.filledDot />
              <Icons.outlinedDot onClick={() => setCarouselSwitch(true)} />
            </div>
          </div>
          {/* ) : ( */}
          <div
            className={`${styles.aditionalProtoKolloRight} ${
              carouselSwitch ? "" : styles.dNone
            }`}
          >
            <div className={styles.heading2}>Smart Artificial Intelligence</div>
            <div className={styles.aditionalProtoKolloLeftImg}>
              <Image src={smartAIImg} alt="Smart AI" />
            </div>
            <p className={styles.para}>
              State of the Art AI that is capable of object identification,
              facial identification with enhanced deep learning and machine
              learning algorithms at the back - Bringing more power to you!
            </p>

            <div className={styles.readMoreText}>
              <Link href="/">
                <a>Read more</a>
              </Link>
            </div>

            <div className={styles.carouselBtn}>
              <Icons.outlinedDot onClick={() => setCarouselSwitch(false)} />
              <Icons.filledDot />
            </div>
          </div>
          {/* )} */}
        </div>
      </div>

      {/* Case Studies section */}
      <CaseStudySection />

      {/* Networking section */}
      <div className={styles.networkingContainer}>
        <div className={styles.networking}>
          <div className={styles.colorFade}></div>
          <div className={styles.networkingText}>
            <div className={styles.globeBg}></div>
            <div className={styles.heading2}>
              Make your Network more reliable
              <br />
              by deploying Chokidr today!
            </div>
            <br />
            <div className={styles.heading3}>
              If assured Safety is your question,
              <br />
              We are your answer.
            </div>
            <br />
            <br />
            <div className={styles.readMore}>
              <Button
                title={"Register Now"}
                url={"/register"} // need to update register route
              />
            </div>
          </div>
          <div className={styles.networkingImg}>
            <Image src={iphone11Img} alt="phone" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
