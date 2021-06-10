import Header from '../Header/Header';
import Comment from '../Comment/Comment';
import CoderComment from '../CoderComment/CoderComment'
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import {constants} from '../../const';
import styles from './Container.module.scss'

function Container() {

    return (
        <div>
            <div className={styles.wrapper}>
                <Header />
                <div className={styles.container}>
                    <h1 className={styles.main__title}>Do The Task And Have Fun</h1>
                    {constants.card.map(items => <EmployeeCard img={items.img} name={items.name} position={items.position} description={items.description} key={items.name}/>)}
                </div>
            </div>
            {/* <PriceWrapper />
            {constants.comments.map(item=> <Comment path={item.avatar} name={item.name} text={item.text} key={item.name+item.path}/>)}
            {constants.coderComments.map(item=><CoderComment avatar={item.avatar} name={item.name} text={item.text} time={item.time} rating={item.rating} key={item.name+item.path}/>)}  */}
        </div> 
    )
}

export default Container;