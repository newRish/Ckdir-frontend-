import Header from "../../../components/Header";
import styles from "../../../styles/AutonomousIdentities.module.scss";
import gaeStyles from "../../../styles/GreenAndEconomy.module.scss";
import landingImg from "../../../public/social-footprint-main-banner-min.png";
import Image from "next/image";
import CaseStudySection from "../../../components/CaseStudySection";
import ConnectNetworkSection from "../../../components/ConnectNetowrkSection";
import AlternateSection from "../../../components/AlternateSection";
import fieldImg from "../../../public/countryside-field-sunny-day-countryside.png";
import derekImg from "../../../public/derek-lee.png";
import digitalIdentityImg from "../../../public/senior-woman-using-her-phone-park.png";
import greenEarthImg from "../../../public/freen-earth.png";
import raysImg from "../../../public/bg-colorfull-rays.png";

const GreenAndEconomy = () => {
  return (
    <div>
      <div className={`${styles.landing} ${gaeStyles.landing}`}>
        <Header />
        {/* <div className={styles.glowCircle}></div> */}
        <div className={`${styles.container} ${gaeStyles.textContainer}`}>
          <div className={`${styles.textContainer} ${gaeStyles.mainText}`}>
            <div className={`${styles.landingText} ${gaeStyles.landingText}`}>
              Social Footprint
            </div>
            <div className={`${styles.para} ${gaeStyles.para}`}>
              Reduce carbon footprint of your organisation.
            </div>
          </div>
          {/* <div className={styles.img}> */}
          {/* <Image
                            src={landingImg}
                            alt={'software in devices'}
                        /> */}
          {/* </div> */}
        </div>
      </div>

      <div className={styles.alterList}>
        <div className={styles.list1}>
          {/* <div className={styles.glow}></div> */}
          <AlternateSection
            // isImageLast={true}
            heading={
              "ZKPs to recognize /identify, location hidden, Assured quality of produce"
            }
            text={
              <div className={styles.container}>
                <div className={styles.label}>
                  Identification of incidents/ discovery of problem points in
                  the whole cycle.
                </div>
              </div>
            }
            image={<Image src={derekImg} alt={"image"} />}
          />
        </div>
        <div className={styles.list2}>
          {/* <div className={styles.glow}></div> */}
          <AlternateSection
            isImageLast={true}
            heading={"Produce Quality & Authenticity"}
            text={
              <div className={styles.container}>
                <div className={styles.label}>
                  Guaranteed assurance of authenticity of fresh produce that
                  reaches the consumer from the farm.
                </div>
              </div>
            }
            image={<Image src={fieldImg} alt={"image"} />}
          />
        </div>
        <div className={styles.list3}>
          {/* <div className={styles.glow}></div> */}
          <AlternateSection
            // isImageLast={true}
            heading={"Digital Identity"}
            text={
              <div className={styles.container}>
                <div className={styles.label}>
                  The ability to authenticate the identity of people and things,
                  making it a safe viable option.
                </div>
              </div>
            }
            image={<Image src={digitalIdentityImg} alt={"image"} />}
          />
        </div>
        <div className={styles.list3}>
          {/* <div className={styles.glow}></div> */}
          <AlternateSection
            isImageLast={true}
            heading={"Ecological Safety"}
            text={
              <div className={styles.container}>
                <div className={styles.label}>
                  Harnessing the power of IoT for hazard detection such as
                  fires, to prevent damage to both man-made property and the
                  environment.
                </div>
              </div>
            }
            image={<Image src={greenEarthImg} alt={"image"} />}
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

export default GreenAndEconomy;
