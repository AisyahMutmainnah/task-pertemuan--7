import styles from "./Hero.module.css";

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Harry Potter</h2>
                    <h3 className={styles.hero__genre}>Fiction</h3>
                    <p className={styles.hero__description}>
                        Merupakan sebuah film fiksi yang menceritakan sebuah sekolah sihir Hogwarts
                    </p>
                    <button className={styles.hero__button}>Watch</button>
                </div>

                <div className={styles.hero__right}>
                    <img 
                    className={styles.hero__image}
                    src="https://picsum.photos/600/400" 
                    alt="" />
                </div>
            </section>
        </div>
    );
}

export default Hero;