import Header from '../Header/Header';
import Comment from '../Comment/Comment';
import Footer from '../Footer/Footer';
import CoderComment from '../CoderComment/CoderComment';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import {constants} from '../../const';
import styles from './Container.module.scss';

function Container() {

    return (
        <div>
            <div className={styles.wrapper}>
                <Header />
                <div className={styles.container}>
                    <h1 className={styles.main__title}>Do The Task And Have Fun</h1>
                    {constants.card.map(items => <EmployeeCard img={items.img} name={items.name} position={items.position} description={items.description} key={items.name}/>)}
                </div>
                <section className={styles.section}>
                    <div className={styles.comments}>
                        <h2 className={styles.comments__title}> 
                            What Pros Are Saying...
                        </h2>
                        <div className={styles.comments__item}>
                            <div className={styles.comments__wrapp}>
                                {constants.comments.map(item => <Comment path={item.avatar} name={item.name} text={item.text} key={item.name+item.path} />)}
                            </div>
                        </div>
                    </div>
                </section>
                {/* section 2 */}
                <section className={styles.section}>
                    <div className={styles.coders}>
                        <h3 className={styles.coders__title}>
                            What Other Coders Are Saying...
                        </h3>
                        <div className={styles.coders__item}>
                            <div className={styles.coders__wrapp}>
                                {constants.coderComments.map(item=><CoderComment avatar={item.avatar} name={item.name} text={item.text} time={item.time} rating={item.rating} key={item.name+item.path}/>)}
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.section}>
                    <div className={styles.footer}>
                        <Footer />
                    </div>
                </section>
            </div>
            
        </div> 
    )
}

export default Container;