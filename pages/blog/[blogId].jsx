import styles from "../../styles/BlogPreview.module.scss";
import Header from "../../components/Header";
import arrowForward from "../../public/Arrow_Forward.png";
import Image from "next/image";
import { useQuery } from "urql";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

const blogQuery = `
query ($id: ID!){
    blog(id: $id){
      Title,
      Description,
      createdAt,
    }
  }
`;

const Blog1 = () => {
  const router = useRouter();
  const id = router.query.blogId;

  const [result, reexecuteQuery] = useQuery({
    query: blogQuery,
    variables: {
      id,
    },
    pause: !id,
  });

  const { data, fetching, error } = result;

  return (
    <>
      <Head>
        <title>Blog - Happymonk</title>
        <meta property="og:title" content="Blog" key="title" />
      </Head>
      <div>
        <div className={styles.landingContainer}>
          <Header />
          <div className={styles.landingPage}></div>
        </div>

        <div className={styles.body}>
          <div className={styles.titleContainer}>
            <div className={styles.back}>
              <Link href={"/blog"}>
                <a>
                  <Image width={20} height={20} src={arrowForward} alt="back" />
                </a>
              </Link>
            </div>
            <div className={styles.title}>{data?.blog?.Title}</div>
          </div>
          <div className={styles.blogDetail}>
            <div className={styles.author}>
              <span className={styles.writenTxt}>Written by </span>
              <span>Bhavish Agarwal</span>
            </div>
            <div className={styles.date}>{`
          ${new Date(data?.blog?.createdAt).toDateString().split(" ")[1]}
          ${new Date(data?.blog?.createdAt).toDateString().split(" ")[2]}, 
          ${new Date(data?.blog?.createdAt).toDateString().split(" ")[3]} 
          `}</div>
          </div>

          <div className={styles.para}>{data?.blog?.Description}</div>
        </div>
      </div>
    </>
  );
};

export default Blog1;
