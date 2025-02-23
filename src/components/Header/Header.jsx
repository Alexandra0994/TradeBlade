import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img src="/logo.svg" alt="Trade Blade" className={styles.logo} />
                <button className={styles.menuButton} aria-label="open menu">
                    <img src="/burger.svg" alt="burger-menu" className={styles.burgerIcon} />
                </button>
            </div>
        </header>
    );
};

export default Header;

