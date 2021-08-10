import styles from './Footer.module.scss';

function Footer() {
    return (
        <div>
            <h4 className={styles.title}>
            I Deployed Project To GitHub Pages
            </h4>
            <p className={styles.title__rights}>
            © This Task Limited™, 2020. All rights reserved.
            </p>
            <p className={styles.title__privacy}>
            Terms Of Service | Privacy Policy
            </p>
        </div>
    )
}

export default Footer