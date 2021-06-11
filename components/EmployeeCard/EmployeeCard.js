import PriceWrapper from '../PriceWrapper/PriceWrapper';

import styles from './EmployeeCard.module.scss';

function EmployeeCard({img, name, position, description}) {
    return (
    <div>
        <div className={styles.employee__wrapp}>
            <div className={styles.employee}>
                <div className={styles.employee__info}>
                    <div className={styles.employee__avatar}>
                        <img src={img} alt={'avatar'+name} />
                    </div>
                    <div className={styles.text__wrapp}>
                        <div className={styles.employee__name}>
                            <p>{name}</p>
                        </div>
                        <div className={styles.employee__position}>
                            <p>{position}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.employee__description}>
                    <p>{description}</p>
                </div>
            </div>

            <div className={styles.card}>
                <p className={styles.card__title}>
                    Be Persistent &amp; Attentive To Details
                </p>
                <div className={styles.card__info}>
                    <h3 className={styles.card__header}>
                        Fonts &amp; Colors <span>Matter</span>
                    </h3>
                    <div className={styles.card__item}>
                        <PriceWrapper />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default EmployeeCard;

