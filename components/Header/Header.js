import styles from './Header.module.scss'
function Header() {
    return (
            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.header__logo}>
                        <div className={styles.header__lRect}></div>
                        <div className={styles.header__rRect}></div>
                        <h1 className={styles.header__text}>Test Task</h1>
                    </div>
                </div>
            </header>            
    )
}

export default Header;

// import styles from './Header.module.scss'
// function Header() {
//     return (
//             <header className={styles.header}>
//                 <div className={styles.navbar}>
//                     <div className={styles.container}>
//                         <div className={styles.navbar__wrapp}>
//                             <div className={styles.header__logo}>
//                                 <div className={styles.header__lRect}></div>
//                                 <div className={styles.header__rRect}></div>
//                                 <h1 className={styles.header__text}>Test Task</h1>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </header>            
//     )
// }

// export default Header;