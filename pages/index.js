import Button from "../components/Button";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import chokidarDeviceImg from "../public/chokidar-device.png";
import revolutionAtomImg from "../public/revolution-atom.png";
import securityAuditImg from "../public/securityAudit.png";

import locationImg from "../public/icons/location.svg";

import Card from "../components/Card";
import CaseStudySection from "../components/CaseStudySection";
import { Icons } from "../utils/icons";
import React, { useState } from "react";

// compressed images
import autonomusI from "../public/compressed/decentralized.svg";
import decentI from "../public/compressed/autonomous.svg";
import edgecI from "../public/compressed/decentralized.svg";
import socialFootprintImg from "../public/compressed/social-footprint.svg";
import connectingPeopleImg from "../public/compressed/connecting-people.svg";
import complianceImg from "../public/compressed/Compliance.svg";
import assuredQualityImg from "../public/icons/assured-quality.svg";
import leafImg from "../public/icons/leaf.png";
import lockImg from "../public/icons/lock-privecy.svg";
import inscuranceImg from "../public/icons/insurance.svg";
import connecct2sysImg from "../public/icons/conn2sys.png";
import tempOptImg from "../public/icons/temp-opt.png";
import rttImg from "../public/icons/delivery-track.png";
import edgeCompImg from "../public/icons/man-in-pantagon.png";

import givingIdImg from "../public/icons/giving-id.png";

import controlledEnvImg from "../public/compressed/controll-environment.svg";
import reliableDataImg from "../public/compressed/tamperproof-data.svg";
import proofDocImg from "../public/compressed/proof-of-activity.svg";
import authorityProofImg from "../public/compressed/proof-of-authority.svg";
import homeAnalytics from "../public/compressed/sensor-fusion-min.png";
import smartAIImg from "../public/compressed/smart-artificail-intelligence-min.png";
import iphone11Img from "../public/compressed/register-now-banner-min.png";

const revCardData = {
  1: [
    {
      img: complianceImg,
      title: "Compliance",
      text: (
        <p className={styles.revolutionCardText}>
          Compliant with regulatory
          <br className={styles.dNone} />
          standards like GDPR.
        </p>
      ),
    },
    {
      img: controlledEnvImg,
      title: "Controlled Environment",
      text: (
        <p className={styles.revolutionCardText}>
          Smart real time monitoring
          <br className={styles.dNone} />
          within the network of your IoT.
        </p>
      ),
    },
    {
      img: reliableDataImg,
      title: "Reliable Data",
      text: (
        <p className={styles.revolutionCardText}>
          Of all incidents/activities being
          <br className={styles.dNone} />
          monitored on the network.
        </p>
      ),
    },
  ],
  2: [
    {
      img: rttImg,
      title: "Real time tracking",
      text: (
        <p className={styles.revolutionCardText}>
          Enables you to track your fleet
          <br className={styles.dNone} />
          real time. Know where the go,
          <br className={styles.dNone} />
          on the go.
        </p>
      ),
    },
    {
      img: connecct2sysImg,
      title: "Connect to legacy system",
      text: (
        <p className={styles.revolutionCardText}>
          Enable you to track your fleet
          <br className={styles.dNone} />
          real time, giving you complete
          <br className={styles.dNone} />
          access to all data that might be.
        </p>
      ),
    },
    {
      img: tempOptImg,
      title: "Transparency of Operations",
      text: (
        <p className={styles.revolutionCardText}>
          Real Tracking, Fencing, heavily
          <br className={styles.dNone} />
          needed for the world where multiple
          <br className={styles.dNone} />
          touchpoints is everyday business.
        </p>
      ),
    },
  ],
  3: [
    {
      img: reliableDataImg,
      title: "Tamperproof data",
      text: (
        <p className={styles.revolutionCardText}>
          Decentralized verifiable data,
          <br className={styles.dNone} />
          which cannot be tempered with.
        </p>
      ),
    },
    {
      img: inscuranceImg,
      title: "Seamless Insurance",
      text: (
        <p className={styles.revolutionCardText}>
          Smart real time monitoring
          <br className={styles.dNone} />
          within the network of your IoT.
        </p>
      ),
    },
    {
      img: lockImg,
      title: "Data Privacy",
      text: (
        <p className={styles.revolutionCardText}>
          Data as authentic as it might be is
          <br className={styles.dNone} />
          also private
        </p>
      ),
    },
  ],
  4: [
    {
      img: assuredQualityImg,
      title: "Assured quality",
      text: (
        <p className={styles.revolutionCardText}>
          Compliant with regulatory
          <br className={styles.dNone} />
          standards like GDPR.
        </p>
      ),
    },
    {
      img: givingIdImg,
      title: "Quality & Authenticity",
      text: (
        <p className={styles.revolutionCardText}>
          Smart real time monitoring
          <br className={styles.dNone} />
          within the network of your IoT.
        </p>
      ),
    },
    {
      img: leafImg,
      title: "Ecological Safety",
      text: (
        <p className={styles.revolutionCardText}>
          Harnessing the power of IoT for
          <br className={styles.dNone} />
          hazard detection to prevent damage.
        </p>
      ),
    },
  ],
};

const revCardUrl = [
  "/product/chokidr-software/autonomousIdentities",
  "/product/chokidr-software/connecting-people-and-things",
  "",
  "/product/chokidr-software/green-and-economy",
];
const Home = () => {
  const [carouselSwitch, setCarouselSwitch] = useState(false);
  const [activeRev, setActiveRev] = useState(1);
  return (
    <div className={styles.home}>
      <div className={styles.landingContainer}>
        <div className={styles.darkLayer}>
          <Header />
          <div className={styles.landingPage}>
            <div className={styles.mainText}>
              <div className={styles.heading1}>
                Starting <span> </span>
                <br className={styles.landingBreak} />
                at the Edge <span> </span>
                <br className={styles.landingBreak} />
                of the present.
              </div>
              <p className={styles.landingText}>
                Unlock a World with more possibilities. Disrupting emerging
                technologies that promise a safer, better and inclusive future
                for human beings.
              </p>
            </div>
            <div className={styles.readMore}>
              <Button
                title={"Read More"}
                url={"/product/chokidr-software"}
                isActive={true}
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
              <Image src={autonomusI} alt="autonomous" />
            </div>
            <div className={styles.backBoxListText}>Autonomous</div>
          </li>
          <li className={styles.blackBoxIcon}>
            <div className={styles.balckBoxIconImg}>
              <Image src={decentI} alt="Decentralised" />
            </div>
            <div className={styles.backBoxListText}>Decentralised</div>
          </li>
          <li className={styles.blackBoxIcon}>
            <div className={styles.balckBoxIconImg}>
              <Image src={edgeCompImg} alt="edge computed" />
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
          <li className={styles.revolutionItem} onClick={() => setActiveRev(1)}>
            <div className={styles.revolutionItemImg}>
              {activeRev === 1 && <div className={styles.imgGlow}></div>}
              <Image src={decentI} alt="autonomous Industries" />
            </div>
            <div className={styles.revolutionItemText}>
              Autonomous Indrustires
            </div>
          </li>

          <li className={styles.revolutionItem} onClick={() => setActiveRev(2)}>
            <div className={styles.revolutionItemImg}>
              {activeRev === 2 && <div className={styles.imgGlow}></div>}
              <Image src={connectingPeopleImg} alt="connecting people" />
            </div>
            <div className={styles.revolutionItemText}>Connecting people</div>
          </li>

          <li className={styles.revolutionItem} onClick={() => setActiveRev(3)}>
            <div className={styles.revolutionItemImg}>
              {activeRev === 3 && <div className={styles.imgGlow}></div>}
              <Image src={securityAuditImg} alt="Seaurity and audit" />
            </div>
            <div className={styles.revolutionItemText}>Security and Audit</div>
          </li>

          <li className={styles.revolutionItem} onClick={() => setActiveRev(4)}>
            <div className={styles.revolutionItemImg}>
              {activeRev === 4 && <div className={styles.imgGlow}></div>}
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
            {revCardData[activeRev].map((e, i) => (
              <li key={i} className={styles.revolutionCardItem}>
                <div className={styles.revolutionCardImage}>
                  <Image src={e.img} alt={e.title} />
                </div>
                <div className={styles.revolutionCardSubHeading}>{e.title}</div>
                {e.text}
              </li>
            ))}
          </ul>

          <div className={styles.readMoreText}>
            {revCardUrl[activeRev - 1] !== "" && (
              <Link href={revCardUrl[activeRev - 1]}>
                <a>
                  <span>Read More</span>
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Protokollo Section */}
      <div className={styles.protokolloContiner}>
        <div className={styles.protokolloBg1}></div>
        <div className={styles.protokolloBg2}></div>
        <div className={styles.heading2}>Protokollo</div>
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
            <div className={styles.protocolImg}>
              <Image src={locationImg} alt="location" />
            </div>
            <div className={styles.protocolItemText}>Proof of Location</div>
          </li>

          <li className="protocolItem">
            <div className={styles.protocolImg}>
              <Image src={proofDocImg} alt="Proof Doc" />
            </div>
            <div className={styles.protocolItemText}>Proof of Activity</div>
          </li>

          <li className="protocolItem">
            <div className={styles.protocolImg}>
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
              <Link href="/product/chokidr-hardware">
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
      {/* commented due to no content */}
      {/* <CaseStudySection /> */}

      {/* Networking section */}
      <div className={styles.networkingContainer}>
        <div className={styles.networking}>
          <div className={styles.colorFade}></div>
          <div className={styles.networkingImg}>
            <Image src={iphone11Img} alt="phone" />
          </div>
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
                url={"/register"}
                isActive={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
