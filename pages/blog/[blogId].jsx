import styles from "../../styles/BlogPreview.module.scss";
import Header from "../../components/Header";
import arrowForward from "../../public/Arrow_Forward.png";
import Image from "next/image";
import { useQuery } from "urql";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

const blogQuery = `
query ($id: ID!){
    blog(id: $id){
      Title,
      Description
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
          <div className={styles.date}>feb12 2022</div>
        </div>

        <div className={styles.para}>{data?.blog?.Description}</div>
      </div>
    </div>
  );
};

export default Blog1;
