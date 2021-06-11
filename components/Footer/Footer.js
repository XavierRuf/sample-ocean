import styles from './Footer.module.scss';

function Footer() {
    return (
        <div>
            <h4 className={styles.title}>
            Don’t Forget To Deploy Project To GitHub Pages
            </h4>
            <p className={styles.title__rights}>
            © Test Task Limited™, 2020. All rights reserved.
            </p>
            <p className={styles.title__privacy}>
            Terms Of Service | Privacy Policy
            </p>
        </div>
    )
}

export default Footer