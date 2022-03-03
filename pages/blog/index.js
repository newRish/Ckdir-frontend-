import Header from "../../components/Header";

import styles from "../../styles/Blog.module.scss";
import blog1Img from "../../public/man-wearing-smart-glasses-virtual-scanning-technology-glitch-effect.png";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.landingContainer}>
        <Header />
        <div className={styles.landingPage}></div>
      </div>

      <div className={styles.blog}>
        <div className={styles.heading1}>Welcome to Happymonk Blog</div>
        <div className={styles.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi, neque,
          ipsum accumsan in fermentum, et cursus.
        </div>
      </div>

      <div className={styles.priviewContainer}>
        <div className={styles.preview}>
          <div className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className={styles.authorDetails}>
            <div className={styles.authorName}>Written by Bhavish Agarwal</div>
            <div className={styles.blogDate}>Feb 12, 2022</div>
          </div>
          <div className={styles.img}>
            <Image src={blog1Img} alt={"blog image"} />
          </div>
          <div className={styles.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
            euismod augue donec in vel dapibus orci nunc vel. Dui sit nunc enim
            ultricies diam nisl, neque. Tortor ultrices diam, diam, diam
            tristique morbi risus. Amet nascetur consequat enim, tristique
            vivamus in tristique feugiat at. Amet sed gravida convallis
            venenatis vestibulum, turpis. Lectus sed commodo aliquet ullamcorper
            dictumst eget rhoncus. Hac donec consectetur ut pellentesque leo. Id
            commodo mattis mi cursus. Quis luctus iaculis tristique congue et
            magna ut nam. Ligula semper ac, vel netus etiam. Scelerisque purus
            enim volutpat, a neque posuere neque turpis. turpis nam nisi
            praesent justo, vel semper molestie. Est erat nulla adipiscing dui
            eu.
          </div>
          <div className={styles.readMore}>
            <Link href="/blog/1">
              <a>Read more</a>
            </Link>
          </div>
        </div>

        <div className={styles.preview}>
          <div className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className={styles.authorDetails}>
            <div className={styles.authorName}>Written by Bhavish Agarwal</div>
            <div className={styles.blogDate}>Feb 12, 2022</div>
          </div>
          <div className={styles.img}>
            <Image src={blog1Img} alt={"blog image"} />
          </div>
          <div className={styles.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
            euismod augue donec in vel dapibus orci nunc vel. Dui sit nunc enim
            ultricies diam nisl, neque. Tortor ultrices diam, diam, diam
            tristique morbi risus. Amet nascetur consequat enim, tristique
            vivamus in tristique feugiat at. Amet sed gravida convallis
            venenatis vestibulum, turpis. Lectus sed commodo aliquet ullamcorper
            dictumst eget rhoncus. Hac donec consectetur ut pellentesque leo. Id
            commodo mattis mi cursus. Quis luctus iaculis tristique congue et
            magna ut nam. Ligula semper ac, vel netus etiam. Scelerisque purus
            enim volutpat, a neque posuere neque turpis. turpis nam nisi
            praesent justo, vel semper molestie. Est erat nulla adipiscing dui
            eu.
          </div>
          <div className={styles.readMore}>
            <Link href="/blog/1">
              <a>Read more</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
