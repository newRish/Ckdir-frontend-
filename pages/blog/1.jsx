import styles from "../../styles/BlogPreview.module.scss";
import Header from "../../components/Header";
import arrowForward from "../../public/Arrow_Forward.png";
import Image from "next/image";

const Blog1 = () => {
    return (
        <div>
            <div className={styles.landingContainer}>
                <Header />
                <div className={styles.landingPage}></div>
            </div>

            <div className={styles.body}>
                <div className={styles.titleContainer}>
                    <div className={styles.back}>
                        <Image
                            width={20}
                            height={20}
                            src={arrowForward}
                            alt="back"
                        />
                    </div>
                    <div className={styles.title}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </div>
                </div>
                <div className={styles.blogDetail}>
                    <div className={styles.author}>
                        <span className={styles.writenTxt}>Written by </span>
                        <span>Bhavish Agarwal</span>
                    </div>
                    <div className={styles.date}>feb12 2022</div>
                </div>

                <div className={styles.para}>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium cumque maiores tenetur quam id quae fugit expedita excepturi aut praesentium a iusto voluptatibus dolor, ea ipsum dignissimos sunt odit magnam fuga dolorum commodi? Culpa quae fugit provident iure, neque recusandae optio ab reprehenderit iste dignissimos expedita veritatis totam tenetur tempore dolore quibusdam consectetur consequatur cupiditate nulla porro delectus! Autem fugit blanditiis, odit minima illo et dolorum exercitationem voluptatibus neque laudantium in quis accusamus voluptatum laborum quasi cupiditate a voluptas iure consectetur accusantium voluptates! Neque expedita voluptatibus inventore architecto, impedit omnis quo nihil corrupti nam molestiae sint aspernatur libero a assumenda.
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor, sit amet maiores tenetur quam id quae fugit expedita excepturi aut praesentium a iusto voluptatibus dolor, ea ipsum dignissimos sunt odit magnam fuga dolorum commodi? Culpa quae fugit provident iure, neque recusandae optio ab reprehenderit iste dignissimos expedita veritatis totam tenetur tempore dolore quibusdam consectetur consequatur cupiditate nulla porro delectus! Autem fugit blanditiis, odit minima illo et dolorum exercitationem voluptatibus neque laudantium in quis accusamus voluptatum laborum quasi cupiditate a voluptas iure consectetur accusantium voluptates! Neque expedita voluptatibus inventore architecto, impedit omnis quo nihil corrupti nam molestiae sint aspernatur libero a assumenda.
                    </p>
                    <br />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur sapiente quidem reprehenderit officiis doloremque distinctio odio dolorem suscipit ipsa. Ipsa fugit id modi distinctio atque corrupti non nam cupiditate ipsam a. Deserunt facere dicta neque et dolor fuga labore molestiae odio eum, voluptatem ducimus ut ipsum enim? Porro, nobis earum.
                    </p>
                    <br />
                    <p>
                        Lorem ipsum dolor, sit amet maiores tenetur quam id quae fugit expedita excepturi aut praesentium a iusto voluptatibus dolor, ea ipsum dignissimos sunt odit magnam fuga dolorum commodi? Culpa quae fugit provident iure, neque recusandae optio ab reprehenderit iste dignissimos expedita veritatis totam tenetur tempore dolore quibusdam consectetur consequatur cupiditate nulla porro delectus! Autem fugit blanditiis, odit minima illo et dolorum exercitationem voluptatibus neque laudantium in quis accusamus voluptatum laborum quasi cupiditate a voluptas iure consectetur accusantium voluptates! Neque expedita voluptatibus inventore architecto, impedit omnis quo nihil corrupti nam molestiae sint aspernatur libero a assumenda.
                    </p>
                    <br />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur sapiente quidem reprehenderit officiis doloremque distinctio odio dolorem suscipit ipsa. Ipsa fugit id modi distinctio atque corrupti non nam cupiditate ipsam a. Deserunt facere dicta neque et dolor fuga labore molestiae odio eum, voluptatem ducimus ut ipsum enim? Porro, nobis earum.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Blog1;
