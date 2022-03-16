import Header from "../../../components/Header";
import styles from "../../../styles/AutonomousIdentities.module.scss";
import commandStyles from "../../../styles/CommandNControll.module.scss";
import landingImg from "../../../public/vichels-on-path.png";
import Image from "next/image";
import CaseStudySection from "../../../components/CaseStudySection";
import ConnectNetworkSection from "../../../components/ConnectNetowrkSection";
import AlternateSection from "../../../components/AlternateSection";
import fieldImg from "../../../public/countryside-field-sunny-day-countryside.png";
import retroImg from "../../../public/engineering-technology-industry.png";
import easyCompImg from "../../../public/easying-compilance.png"
import rInfoImg from "../../../public/real-time-info.png"
import decisionMkingImg from "../../../public/decision-making-tab.png"
import multiTenencyImg from "../../../public/man-holdin-tab-phone.png"
import digitalIdentityImg from "../../../public/senior-woman-using-her-phone-park.png";
import integratedDashImg from "../../../public/activity-list.png";
import greenEarthImg from "../../../public/freen-earth.png";
import raysImg from "../../../public/bg-colorfull-rays.png"

const CommandAndControl = () => {
  return (
    <div>
      <div className={`${styles.landing} ${commandStyles.landing}`}>
        <Header />
        <div className={styles.glowCircle}></div>
        <div className={`${styles.container} ${commandStyles.textContainer}`}>
          <div className={styles.textContainer}>
            <div className={`${styles.landingText} ${commandStyles.landingText}`}>Command and Control</div>
            <div className={`${styles.para} ${commandStyles.para}`}>
              Get real time information under one single unified dashboard
            </div>
          </div>
          <div className={styles.img}>
            {/* <Image
                            src={landingImg}
                            alt={'software in devices'}
                        /> */}
          </div>
        </div>
      </div>

      <div className={styles.alterList}>
        <div className={styles.list1}>
          {/* <div className={styles.glow}></div> */}
          <AlternateSection
            // isImageLast={true}
            heading={"Integrated Dashboard"}
            text={
              <div className={styles.container}>
                <div className={styles.label}>
                  A Single Integrated Dashboard across Web, Desktop & Mobile for
                  your Physical assets, Factories, Warehouse, & Fleet.
                </div>
              </div>
            }
            image={<Image src={integratedDashImg} alt={"image"} />}
          />
        </div>
        <div className={styles.list2}>
          {/* <div className={styles.glow}></div> */}
          <AlternateSection
            isImageLast={true}
            heading={"Multi-tenancy User"}
            text={
              <div className={styles.container}>
                <div className={styles.label}>
                Allow authorized users to see data from different sources with different permission levels through the use of state of art and zero knowledge protocols without having to disclose the data.
                </div>
              </div>
            }
            image={<Image src={multiTenencyImg} alt={"image"} />}
          />
        </div>
        <div className={styles.list3}>
          {/* <div className={styles.glow}></div> */}
          <AlternateSection
            // isImageLast={true}
            heading={"Decision Making"}
            text={
              <div className={styles.container}>
                <div className={styles.label}>
                Active aid in decision making and communication, helps to manage and share real-time data across Organizations, Agencies and stakeholders in the ecosystem.
                </div>
              </div>
            }
            image={<Image src={decisionMkingImg} alt={"image"} />}
          />
        </div>
        <div className={styles.list3}>
          {/* <div className={styles.glow}></div> */}
          <AlternateSection
            isImageLast={true}
            heading={"Real-time information"}
            text={
              <div className={styles.container}>
                <div className={styles.label}>
                Proactive anomalies and incident detection in integrated industry and supply chain, aiding organization members to take decisions that can prevent unfortunate incidents & take timely action.
                </div>
              </div>
            }
            image={<Image src={rInfoImg} alt={"image"} />}
          />
        </div>
        <div className={styles.list3}>
          {/* <div className={styles.glow}></div> */}
          <AlternateSection
            isImageLast={false}
            heading={"Easing Compliance"}
            text={
              <div className={styles.container}>
                <div className={styles.label}>
                Build a unique public data pipeline for border agencies and traders to share data and confidential information securely,improve cross-border trade without compromising on the data privacy.
                </div>
              </div>
            }
            image={<Image src={easyCompImg} alt={"image"} />}
          />
        </div>
        <div className={styles.list3}>
          {/* <div className={styles.glow}></div> */}
          <AlternateSection
            isImageLast={true}
            heading={"RetroFit"}
            text={
              <div className={styles.container}>
                <div className={styles.label}>
                Upgrade to industry 4.0 has never been easier and safer. Compute and take autonomous actions with integrated security management.
                </div>
              </div>
            }
            image={<Image src={retroImg} alt={"image"} />}
          />
        </div>
      </div>

      {/* commneted due to no content */}
      {/* <CaseStudySection /> */}
      {/* <ConnectNetworkSection
       img={raysImg.src}
        heading={"Loreum ipsum"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nibh et ut feugiat duis scelerisque urna, blandit."
        }
        url={"/register"}
        btnText={"Get Invited"}
        isActive={true}
      /> */}
    </div>
  );
};

export default CommandAndControl;
