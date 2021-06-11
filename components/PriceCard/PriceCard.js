import {useState,useEffect} from 'react'
import getCurrency from '../../services/fetchData'
import styles from './PriceCard.module.scss';


function PriceCard({title, footer, type}) {
    const [state, setState] = useState({price:0, percent:0});
    
    console.log(state)
    useEffect(async() => {
        getCurrency(type, setState)
 
       setInterval(async()=>{
        getCurrency(type, setState)
       },   7000);
    }, [])

    return (
        <div>
            <div className={styles.price}>
                <div className={styles.price__container}>
                    <p className={styles.price__title}>{title}</p>
                    <div className={styles.price__wrapp}>
                        <p className={styles.price__coin}>${state.price}</p> 
                        
                        <p>{state.percent}<span>%</span></p>
                        {state.percent > 0 ? <span>&uarr;</span> : <span>&darr;</span>}
                    </div>
                <p className={styles.price__footer}>{footer}</p>
                </div>
            </div>
        </div>
    )
}

export default PriceCard
