import React from "react";
import Header from "../../components/Header";
import LongCard from "../../components/LongCard";
import styles from "../../styles/Career.module.scss";
import Head from "next/head";

const career = ({ openRoles }) => {
  return (
    <>
      <Head>
        <title>Careers - Happymonk</title>
        <meta property="og:title" content="Careers at Happymonk" key="title" />
      </Head>
      <div>
        <div className={styles.landingContainer}>
          <Header />
          <div className={styles.landingPage}>
            <h2 className={styles.heading1}>Jobs at Happymonk</h2>
            <p className={styles.landingText}>
              Like building revolutionary products? Do your fingers type faster
              than your brains? Then, This is the right place for you.
            </p>
          </div>
        </div>

        {/* Roles */}
        <div className={styles.roles}>
          <h2 className={styles.heading1}>Open Roles</h2>
          {openRoles.map((e, i) => (
            <ul className={styles.roleList} key={i}>
              <li className={styles.boldText}>{e.field}</li>
              {e.roles.map((role, ri) => (
                <React.Fragment key={`${i}-${ri}`}>
                  <li className={styles.roleItem}>
                    <LongCard url="careers/job-description">
                      <h4 className={styles.boldText}>{role.name}</h4>
                      <h5 className={styles.grayText}>{role.exp}</h5>
                    </LongCard>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default career;

export const getStaticProps = () => {
  return {
    props: {
      openRoles: [
        {
          field: "Technology/ IT",
          roles: [
            {
              name: "Back end developer",
              exp: "0-1 year/ Freshers",
            },
            {
              name: "Front end developer",
              exp: "0-1 year/ Freshers",
            },
            {
              name: "UI UX Designer",
              exp: "0-1 year/ Freshers",
            },
          ],
        },
        {
          field: "Data Science",
          roles: [
            {
              name: "Data science intern",
              exp: "0-1 year/ Freshers",
            },
            {
              name: "Junior Data scientist",
              exp: "0-1 year/ Freshers",
            },
            {
              name: "Senior Data scientist",
              exp: "5+ years",
            },
          ],
        },
      ],
    },
  };
};
