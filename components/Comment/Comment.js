import styles from './Comment.module.scss';

function Comment({path,name,text}) {
    return (
        <div>
            <div className={styles.comment}>
                <div className={styles.comment__wrapp}>
                    <div className={styles.comment__avatar}>
                        <img src={path} alt={'avatar'+name}/>
                    </div>
                    <p className={styles.comment__name}>{name}</p>
                    <p className={styles.comment__text}>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Comment
