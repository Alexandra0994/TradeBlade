import styles from "./Home.module.scss";
import Button from "../Button/Button";

const Home = () => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
                <div className={styles.tradeContainer}>
                    <div className={styles.tradeBackground}>
                        <div>
                            <p className={styles.pair}>ETH/USDT</p>
                            <span className={styles.short}>Short</span>
                        </div>
                        <strong className={styles.percentage}>+141%</strong>
                    </div>
                    <div className={styles.tradeCard}>
                        <div>
                            <p className={styles.pair}>ETH/USDT</p>
                            <span className={styles.short}>Short</span>
                        </div>
                        <strong className={styles.percentage}>+116%</strong>
                    </div>
                </div>
                <div className={styles.container}>
                    <h1 className={styles.title}>
                        МОМЕНТАЛЬНО КОПИРУЙ СДЕЛКИ
                        ПРОФИ ТРЕЙДЕРОВ
                    </h1>
                    <p className={styles.subtitle}>
                        Начни копировать сделки с успешной командой профессиональных трейдеров в автоматическом режиме.
                    </p>
                    <form className={styles.formContainer}>
                        <input
                            type="email"
                            placeholder="ВАШ E-MAIL"
                        />
                        <Button className={styles.button}>Начать</Button>
                    </form>
                    <p className={styles.freeTrial}>5 дней бесплатного пользования</p>
                </div>
            </div>
        </section>
    );
};

export default Home;
