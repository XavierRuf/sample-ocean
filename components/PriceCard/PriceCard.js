import {useState,useEffect} from 'react'
import getCurrency from '../../services/fetchData'
import styles from './PriceCard.module.scss';


function PriceCard({title, footer, type}) {
    const [state, setState] = useState({price:0, percent:0});
    useEffect(async() => {
        getCurrency(type, setState)
 
       setInterval(async()=>{
        getCurrency(type, setState)
       },   7000);
    }, [])

    const bitcoin = type === 'bitcoin';
    return (
        <div>
            <div className={`${styles.price} ` + `${bitcoin ? styles.price__bitcoin : styles.price__etherium}`}>
                <div className={styles.price__container}>
                    <p className={styles.price__title}>{title}</p>
                    <div className={styles.price__wrapp}>
                        <p className={styles.price__coin}>${state.price}</p> 
                        <p className={`${state.percent > 0 ? styles.plus : styles.minus} ${styles.price__percent}`}>{state.percent}<span>%</span></p>
                        {state.percent > 0 ? <span>&uarr;</span> : <span>&darr;</span>}
                    </div>
                    <p className={styles.price__footer}>{footer}</p>
                </div>
            </div>
        </div>
    )
}

export default PriceCard
// addColor ? styles.plus : styles.minus