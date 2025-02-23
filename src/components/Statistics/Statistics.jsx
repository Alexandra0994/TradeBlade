import styles from './Statistics.module.scss';

const Statistics = () => {
    return (
        <section className={styles.numbersSection}>
            <div className={styles.d}></div>
            <div className={styles.container}>
                <h2 className={styles.title}>ЦИФРЫ</h2>
                <p className={styles.date}>Сентябрь 2022</p>
                <div className={styles.stats}>
                    <div className={styles.statBlock}>
                        <p className={styles.statLabel}>ТОРГОВОЙ ПРИБЫЛИ</p>
                        <p className={styles.statValue}>2756%</p>
                    </div>
                    <div className={styles.statBlock}>
                        <p className={styles.statLabel}>ФЬЮЧЕРСНЫХ И СПОТОВЫХ СДЕЛОК</p>
                        <p className={styles.statValue}>67</p>
                    </div>
                    <div className={styles.statBlock}>
                        <p className={styles.statLabel}>ПРИБЫЛЬ ПОДПИСЧИКОВ</p>
                        <p className={styles.statValue}>375000</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;
