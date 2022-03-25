import React from "react";
import Header from "../../components/Header";
import styles from "../../styles/Jd.module.scss";
import jobHuntImg from "../../public/businesswoman-networking-using-digital-devices.png";
// import applyImg from "../../public/undraw_updated_resume.svg";
import userImg from "../../public/user.png";
import docsImg from "../../public/icons/docs.png";
import callImg from "../../public/icons/call-outline.png";
import envelopImg from "../../public/icons/outline-envelop2.png";
import Image from "next/image";
import Button from "../../components/Button";
import jbtopImg from "../../public/businesswoman-networking-using-digital-devices-sm.png";
import applyImg from "../../public/top-view-person-writing-laptop-with-copy-space.png";
import Head from 'next/head'

const JD = ({ responsibility }) => {
  return (
    <>
      <Head>
        <title>Job Description - Happymonk</title>
        <meta property="og:title" content="Job Description Happymonk" key="title" />
      </Head>
      <div>
        <div className={styles.landingContainer}>
          <Header />
          <div className={styles.landingPage}>
            <h2 className={styles.heading1}>Openings for Data Scientist</h2>
            <h3 className={styles.landingText}>Number of vacancy - 03</h3>
          </div>
        </div>

        <div className="desc">
          <div className={styles.dhar}>
            <div className={styles.topImg}>
              <h2 className={styles.heading}>What you&apos;ll do?</h2>
              <Image src={jbtopImg} alt={"jb image"} />
            </div>
            <div className={styles.content}>
              <div className={styles.heading}>What you&apos;ll do?</div>
              <p className={styles.dharText}>
                Design and develop secure cloud system architectures in
                accordance with established standards. Design and implement a
                highly scalable CI/CD pipeline.
              </p>
              <div className={styles.dharPoints}>
                <ul className={styles.dharList}>
                  {responsibility?.map((e, i) => (
                    <li key={i} className={styles.dharItem}>
                      {/* <div className={styles.dharItemStyle}>a</div> */}
                      <p className={styles.dharText}>
                        <div></div>
                        {e}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.chokidrBackImg}>
              <Image src={jobHuntImg} alt={"job hunt"} />
            </div>
          </div>
        </div>

        <h2 className={`${styles.heading} ${styles.applyHeader}`}>
          Apply here
        </h2>
        <div className={styles.apply}>
          <div className={styles.applyContainer}>
            <div className={styles.applyImg}>
              <Image src={applyImg} alt="apply form" />
            </div>
            <div className={styles.formContainer}>
              <div className={styles.heading}>Apply here</div>
              <div className={styles.form}>
                <div className={styles.field}>
                  <span className={styles.fieldIcon}>
                    <Image src={userImg} alt="user" />
                  </span>
                  <span className={styles.fieldInput}>
                    <input type="text" placeholder="Your Name" />
                  </span>
                </div>
                <div className={styles.field}>
                  <span className={styles.fieldIcon}>
                    <Image src={envelopImg} alt="email" />
                  </span>
                  <span className={styles.fieldInput}>
                    <input type="text" placeholder="Email id" />
                  </span>
                </div>
                <div className={styles.field}>
                  <span className={styles.fieldIcon}>
                    <Image src={callImg} alt="phone" />
                  </span>
                  <span className={styles.fieldInput}>
                    <input type="text" placeholder="Phone number" />
                  </span>
                </div>
                <div className={styles.field}>
                  <span className={styles.fieldIcon}>
                    <Image src={docsImg} alt="user" />
                  </span>
                  <span
                    className={`${styles.fieldInput} ${styles.uploadField}`}
                  >
                    <span>Upload resume</span>
                    <input type="file" placeholder="Upload resume" />
                  </span>
                </div>
                <div className={styles.submitBtn}>
                  <Button url={""} title={"Submit"} isActive={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JD;

export const getStaticProps = () => {
  return {
    props: {
      responsibility: [
        "Experience in dimensional data modeling, ETL development, and Data Warehousing, Data Lakes",
        "Prototyping new ideas or technologies to prove efficacy and usefulness in production.",
        "Develop Data streams,and REST API's to integrate with partners and customers in real-time",
        "Design and develop large scale, high-volume, and high-performance data pipelines with large sets of data from different sources",
      ],
    },
  };
};
