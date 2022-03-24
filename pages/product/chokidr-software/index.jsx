import landingImg from "../../../public/tab-width-phone.png";
import styles from "../../../styles/Software.module.scss";
import Header from "../../../components/Header";
import Card from "../../../components/Card";
import Image from "next/image";
import horioztalScaleImg from "../../../public/icons/horizontally-scrollable.svg";
import iotImg from "../../../public/iot-device.png";
import cloudLockImg from "../../../public/icons/cloud-lock.png";
import privateNWImg from "../../../public/icons/private-nw.png";
import knpImg from "../../../public/icons/zknp.png";
import CaseStudySection from "../../../components/CaseStudySection";
import sfImg from "../../../public/employee-with-laptop.png";
import GlowStyleCard from "../../../components/GlowStyleCard";
import firefiterImg from "../../../public/firefiter.png";
import faceRecogImg from "../../../public/face-recognition.png";
import commandNControllImg from "../../../public/command&control-min.png";
import Link from "next/link";
import AlternateSection from "../../../components/AlternateSection";
import connectingSenforImg from "../../../public/connecting-sensors.png";
import specialArms from "../../../public/specna-arms.png";
import iot5gImg from "../../../public/5giot-withhw.png";
import { Icons } from "../../../utils/icons";
import { useState } from "react";
import Button from "../../../components/Button";
import identityImg from "../../../public/identities-min.png";
import Head from 'next/head'

const ChokidrSoftware = () => {
  const [carouselSwitch, setCarouselSwitch] = useState(false);

  return (
    <>
      <Head>
        <title>Software - Happymonk</title>
        <meta property="og:title" content="Software" key="title" />
      </Head>
      <div>
        <Header />
        <div className={styles.landing}>
          <div className={styles.glowCircle}></div>
          <div className={styles.container}>
            <div className={styles.textContainer}>
              <div className={styles.landingText}>Accelerating Web 3.0</div>
              <div className={styles.para}>
                Chokidr software is an executable Web and mobile application,
                that provides a variety of fantastic features that helps you
                navigate through and access the range of your network through a
                laptop or phone. What&apos;s in the box of these fantastic
                features, you ask?
              </div>
            </div>
            <div className={styles.img}>
              <Image src={landingImg} alt={"software in devices"} />
            </div>
          </div>
        </div>

        {/* device list */}
        <ul className={styles.deviceList}>
          <li className={styles.item}>
            <div className={styles.img}>
              <Image src={knpImg} alt="icon" />
            </div>
            <div className={styles.text}>Zero knowledge Proof</div>
          </li>
          <li className={styles.item}>
            <div className={styles.img}>
              <Image src={cloudLockImg} alt="icon" />
            </div>
            <div className={styles.text}>Tamperproof Data</div>
          </li>
          <li className={styles.item}>
            <div className={styles.img}>
              <Image src={privateNWImg} alt="icon" />
            </div>
            <div className={styles.text}>Private Network</div>
          </li>
          <li className={styles.item}>
            <div className={styles.img}>
              <Image src={iotImg} alt="icon" />
            </div>
            <div className={styles.text}>Intergrated IOT</div>
          </li>
          <li className={styles.item}>
            <div className={styles.img}>
              <Image src={horioztalScaleImg} alt="icon" />
            </div>
            <div className={styles.text}>Scalable and Affordable</div>
          </li>
        </ul>

        {/* big image section */}
        <div className={styles.aditionalProtoKollo}>
          <div className={styles.aditionalProtoKolloBgImg}>
            {/* {!carouselSwitch ? ( */}
            <div
              className={`${styles.aditionalProtoKolloLeft} ${
                carouselSwitch ? styles.dNone : ""
              }`}
            >
              <div className={styles.aditionalProtoKolloLeftImg}>
                <Image src={commandNControllImg} alt="face recog" />
              </div>
              <div className={styles.textContainer}>
                <div className={styles.heading}>Command & Control</div>
                <div className={styles.para}>
                  Get real time information across your organisation, members
                  and devices under one single unified dashboardF
                </div>
                <div className={styles.readMoreText}>
                  <Link href="/product/chokidr-software/command-and-control">
                    <a>Read more</a>
                  </Link>
                </div>
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
              <div className={styles.aditionalProtoKolloLeftImg}>
                <Image src={firefiterImg} alt="fire fighters" />
              </div>
              <div className={styles.textContainer}>
                <div className={styles.heading}>Autonomous Machines</div>
                <div className={styles.para}>
                  Autonomous machines revolutionize our economy greatly by
                  improving the efficiency in delivery, transportation,
                  manufacturing, and many other sectors.
                </div>
                <div className={styles.readMoreText}>
                  <Link href="/product/chokidr-software/autonomousMachines">
                    <a>Read more</a>
                  </Link>
                </div>
              </div>
              <div className={styles.carouselBtn}>
                <Icons.outlinedDot onClick={() => setCarouselSwitch(false)} />
                <Icons.filledDot />
              </div>
            </div>
            {/* )} */}
          </div>
        </div>

        {/* alternate section */}
        {/* <div className={styles.alterList}>
          <AlternateSection
            // isImageLast={true}
            heading={"Connecting people and things"}
            text={
              <div className={styles.container}>
                <div className={styles.label}>
                  Connect Sensors, Information Boards
                </div>
              </div>
            }
            image={
              <div className={`${styles.csaImg} ${styles.smr}`}>
                <Image src={connectingSenforImg} alt={"image"} />
              </div>
            }
            btnText={"Read more"}
            url={"/product/chokidr-software/connecting-people-and-things"}
          />

          <div className={styles.ml}>
            <AlternateSection
              isImageLast={true}
              heading={"Identities"}
              text={
                <div className={styles.container}>
                  <div className={styles.label}>
                    Decentralized Identities for Humans, Devices and Things.
                  </div>
                </div>
              }
              image={
                <div className={`${styles.csaImg} ${styles.sml}`}>
                  <Image src={identityImg} alt={"image"} />
                </div>
              }
              btnText={"Read more"}
              url={"/product/chokidr-software/identities"}
            />
          </div>

          <AlternateSection
            // isImageLast={true}
            heading={"Edge IOT"}
            text={
              <div className={styles.container}>
                <div className={styles.label}>
                  Connect Dhar and Sub-second feedback even while being offline
                  through LoRaWAN and Inbuilt 5G with Legacy Retrofiting.
                </div>
              </div>
            }
            image={
              <div className={`${styles.csaImg}`}>
                <Image src={iot5gImg} alt={"image"} />
              </div>
            }
            btnText={"Read more"}
            url={"/product/chokidr-software/edge-iot"}
          />

          <div className={styles.sfLabel}>
            <AlternateSection
              isImageLast={true}
              heading={"Social Footprint"}
              text={
                <div className={`${styles.container}`}>
                  <div className={styles.label}>
                    Reduce Carbon foot print of your organisation.
                  </div>
                </div>
              }
              image={
                <div className={`${styles.csaImg} ${styles.sml}`}>
                  <Image src={sfImg} alt={"image"} />
                </div>
              }
              btnText={"Read more"}
              url={"/product/chokidr-software/social-footprint"}
            />
          </div>
        </div> */}

        {/* Social Footprint Section */}
        {/* <div className={styles.sf}>
        <div className={styles.container}>
          <div className={styles.heading}></div>
          <div className={styles.label}>
           
          </div>

          <div className={styles.readMoreText}>
            <Button
              title="Read more"
              url="/product/chokidr-software/social-footprint"
            />
          </div>
        </div>
        <div className={styles.img}>
          <Image src={sfImg} alt={"employe with laotop"} />
        </div>
      </div> */}

        {/* Case Studies section */}
        {/* no content */}
        {/* <div className={styles.csSection}>
        <CaseStudySection />
      </div> */}
      </div>
    </>
  );
};

export default ChokidrSoftware;
