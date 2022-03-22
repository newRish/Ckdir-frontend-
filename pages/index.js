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
      title: "On-Machine Compute Systems",
      text: (
        <p className={styles.revolutionCardText}>
          Enabling machines to precieve, identify, 
          {/* <br className={styles.dNone} /> */}
          manuplate & aid, the world around them.
        </p>
      ),
    },
    {
      img: controlledEnvImg,
      title: "Decentralized, Offline & Localized",
      text: (
        <p className={styles.revolutionCardText}>
          Take information management & keep data in your 
          {/* <br className={styles.dNone} /> */}
          premisis and enable local processing of sensors and data.
        </p>
      ),
    },
    {
      img: reliableDataImg,
      title: "Intelligent Video & Sensor Analytics",
      text: (
        <p className={styles.revolutionCardText}>
          Get Realtime actionable insights, 
          {/* <br className={styles.dNone} /> */}
          from wide variety of IoT gateways and Edge Devices.
        </p>
      ),
    },
  ],
  2: [
    {
      img: rttImg,
      title: "Industry 4.0",
      text: (
        <p className={styles.revolutionCardText}>
          Quickly track, identify and aid incidents, pinpoint accurately
          {/* <br className={styles.dNone} /> */}
          and ensure compliance and safety of the user.
        </p>
      ),
    },
    {
      img: connecct2sysImg,
      title: "Connecting People & Things",
      text: (
        <p className={styles.revolutionCardText}>
          Enable you to track your fleet
          {/* <br className={styles.dNone} /> */}
          real time, giving you complete
          {/* <br className={styles.dNone} /> */}
          access to all data that might be.
        </p>
      ),
    },
    {
      img: tempOptImg,
      title: "Decentralized Infrastruture",
      text: (
        <p className={styles.revolutionCardText}>
          Real Tracking, Fencing, heavily
          {/* <br className={styles.dNone} /> */}
          needed for the world where multiple
          {/* <br className={styles.dNone} /> */}
          touchpoints is everyday business.
        </p>
      ),
    },
  ],
  3: [
    {
      img: reliableDataImg,
      title: "Zero Knowledge Collbration",
      text: (
        <p className={styles.revolutionCardText}>
          Decentralized verifiable data,
          {/* <br className={styles.dNone} /> */}
          which cannot be tempered with.
        </p>
      ),
    },
    {
      img: inscuranceImg,
      title: "Real-time Communication",
      text: (
        <p className={styles.revolutionCardText}>
          Collect, report and share real-time information 
          {/* <br className={styles.dNone} /> */}
          for enhanced decision-making and effective response.
        </p>
      ),
    },
    {
      img: lockImg,
      title: "Art of War",
      text: (
        <p className={styles.revolutionCardText}>
          Rapid and intelligent control of the Organisations for 
          {/* <br className={styles.dNone} /> */}
          members and lower level members.
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
          {/* <br className={styles.dNone} /> */}
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
          {/* <br className={styles.dNone} /> */}
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
          {/* <br className={styles.dNone} /> */}
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
                We develop technologies that create a safer tomorrow that promise a safer, better and inclusive future.
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
          <Image src={chokidarDeviceImg} alt="Chokidr" />
        </div>
        <div className={styles.heading1}>
          Worried about critical systems going offline?
          {/* <br /> */}
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
        <div className={styles.heading2}>Creating Revolution through Change</div>

        <ul className={styles.revolutionList}>
          <li className={styles.revolutionItem} onClick={() => setActiveRev(1)}>
            <div className={styles.revolutionItemImg}>
              {activeRev === 1 && <div className={styles.imgGlow}></div>}
              <Image src={decentI} alt="autonomous Industries" />
            </div>
            <div className={styles.revolutionItemText}>
              Autonomous Machines
            </div>
          </li>

          <li className={styles.revolutionItem} onClick={() => setActiveRev(2)}>
            <div className={styles.revolutionItemImg}>
              {activeRev === 2 && <div className={styles.imgGlow}></div>}
              <Image src={connectingPeopleImg} alt="Cyber Physical Systems" />
            </div>
            <div className={styles.revolutionItemText}>Decentralized Cyber Physical Systems</div>
          </li>

          <li className={styles.revolutionItem} onClick={() => setActiveRev(3)}>
            <div className={styles.revolutionItemImg}>
              {activeRev === 3 && <div className={styles.imgGlow}></div>}
              <Image src={securityAuditImg} alt="Seaurity and audit" />
            </div>
            <div className={styles.revolutionItemText}>C4I Systems</div>
          </li>

          {/* <li className={styles.revolutionItem} onClick={() => setActiveRev(4)}>
            <div className={styles.revolutionItemImg}>
              {activeRev === 4 && <div className={styles.imgGlow}></div>}
              <Image src={socialFootprintImg} alt="Social Footprint" />
            </div>
            <div className={styles.revolutionItemText}>Social Footprint</div>
          </li> */}
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
          giving away the actual location of the entity.  
          A world where your Identity is verified without having to share your
          personal details such as age, date of birth. A world where data
          that is sent to authorities are reliable and not sent to wrong
          personel. The imagination just got real.
        </p>

        <div className={styles.heading3}>Protokollo provides</div>

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
            <div className={styles.heading2}>Would you like to improve your workforce productivity?</div>
            <div className={styles.aditionalProtoKolloLeftImg}>
              <Image src={homeAnalytics} alt="home analytics" />
            </div>
            <p className={styles.para}>
              <b>Track & Trace</b> critical events and movements of workforce, enabling easier compliance, aiding human decisions and removing human dependency.<br/>
              Remove Friction, Enable greater workforce collabration and streamline productivity. 
            </p>
            <div className={styles.readMoreText}>
              <Link href="/platform/ai">
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
            <div className={styles.heading2}>Do you imaging a safer workplace environment?</div>
            <div className={styles.aditionalProtoKolloLeftImg}>
              <Image src={smartAIImg} alt="Smart AI" />
            </div>
            <p className={styles.para}>
              <b>Detect, Identify and take action </b> on critical  action points across your organisations under one single dashboard.
              <br/>
              Save millions of dollars and improve workplace safety and enjoy better people satisfaction.
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
              Connect with an Expert.
            </div>
            <br />
            <div className={styles.heading3}>
              Leverage industry leading expertise and find a shorter path to innovation
              {/* <br /> */}
              Contact our representatives and get started right away.
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
