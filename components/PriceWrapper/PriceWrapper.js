import {constants} from '../../const';
import PriceCard from '../PriceCard/PriceCard';
import styles from './PriceWrapper.module.scss';
function PriceWrapper() {
    return (
        <div className={styles.pirce__wrapper}>
            {constants.cardsData.map((item) => 
                <PriceCard title = {item.title} footer = {item.footer} type = {item.key} key = {item.key} className={item.name}/>
            )}
        </div>
    )
}

export default PriceWrapper;
