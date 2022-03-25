import Header from "../../components/Header";

import styles from "../../styles/Blog.module.scss";
import blog1Img from "../../public/man-wearing-smart-glasses-virtual-scanning-technology-glitch-effect.png";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "urql";
import { useQuery } from "urql";
import { useEffect, useState } from "react";
import Head from 'next/head'

const blogQuery = `
  query GetBlogs{
    blogs{
      Title,
      Description,
      id,
      createdAt
    }
  }
`;

const Blog = ({ blog }) => {
  // const [blog, setBlog] = useState([]);

  const [result, reexecuteQuery] = useQuery({
    query: blogQuery,
  });

  const { data, fetching, error } = result;

  return (
    <>
      <Head>
        <title>Blog - Happymonk</title>
        <meta
          property="og:title"
          content="Blog"
          key="title"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.landingContainer}>
          <Header />
          <div className={styles.landingPage}></div>
        </div>

        <div className={styles.blog}>
          <h2 className={styles.heading1}>Welcome to Happymonk Blog</h2>
          {/* <div className={styles.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi, neque,
          ipsum accumsan in fermentum, et cursus.
        </div> */}
        </div>

        <div className={styles.priviewContainer}>
          {data?.blogs?.map((e, i) => (
            <div className={styles.preview} key={i}>
              <h3 className={styles.title}>{e.Title}</h3>
              <h6 className={styles.authorDetails}>
                <div className={styles.authorName}>
                  Written by Bhavish Agarwal
                </div>
                <div className={styles.blogDate}>
                  {`
          ${new Date(e?.createdAt).toDateString().split(" ")[1]}
          ${new Date(e?.createdAt).toDateString().split(" ")[2]}, 
          ${new Date(e?.createdAt).toDateString().split(" ")[3]} 
          `}
                </div>
              </h6>
              <div className={styles.img}>
                <Image src={blog1Img} alt={"blog image"} />
              </div>
              <p className={styles.body}>
                {e.Description.split(" ").slice(0, 190).join(" ")} ...
              </p>
              <div className={styles.readMore}>
                <Link href={`/blog/${e.id}`}>
                  <a>Read more</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
