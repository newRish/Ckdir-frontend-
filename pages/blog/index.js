import Header from "../../components/Header";

import styles from "../../styles/Blog.module.scss";
import blog1Img from "../../public/man-wearing-smart-glasses-virtual-scanning-technology-glitch-effect.png";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "urql";
import { useQuery } from "urql";
import { useEffect, useState } from "react";

const blogQuery = `
  query GetBlogs{
    blogs{
      Title,
      Description,
      id,
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
    
    <div className={styles.container}>
      <div className={styles.landingContainer}>
        <Header />
        <div className={styles.landingPage}></div>
      </div>

      <div className={styles.blog}>
        <div className={styles.heading1}>Welcome to Happymonk Blog</div>
        {/* <div className={styles.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi, neque,
          ipsum accumsan in fermentum, et cursus.
        </div> */}
      </div>

      <div className={styles.priviewContainer}>
        {data?.blogs?.map((e, i) => (
          <div className={styles.preview}>
            <div className={styles.title}>{e.Title}</div>
            <div className={styles.authorDetails}>
              <div className={styles.authorName}>
                Written by Bhavish Agarwal
              </div>
              <div className={styles.blogDate}>Feb 12, 2022</div>
            </div>
            <div className={styles.img}>
              <Image src={blog1Img} alt={"blog image"} />
            </div>
            <div className={styles.body}>
              {
                e.Description.split(" ").slice(0,190).join(" ")
              } ...
            </div>
            <div className={styles.readMore}>
              <Link href={`/blog/${e.id}`}>
                <a>Read more</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
