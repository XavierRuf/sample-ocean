import {useState} from 'react';
import styles from './CoderComment.module.scss';
function CoderComment({avatar,name,text,time,rating}) {
const [commentRating, setCommentRating] = useState(rating)
    const arr = new Array(5).fill(0)
    return (
        <div>
            <div className={styles.coder}>
                <div className={styles.coder__avatar}>
                    <img src={avatar}/>
                </div>
                <div className={styles.coder__message}>
                    <p className={styles.coder__text}>{text}</p>
                    <p className={styles.coder__name}>{name}</p>
                </div>
                <div className={styles.coder__rating}>
                    <p>{time}</p>
                    <div>            
                        {arr.map((_,index)=><span className={cn('rating-count',{'rated':index+1<=commentRating})} data-id={index+1} tabIndex={0} 
                        onClick={(e)=>setCommentRating(e.target.dataset.id)} key={index+1}>&#9733;</span>)}
                    </div>
                </div>

            </div>
        </div>

    )
}


function cn(){
    let classNames = '';
    if(arguments.length < 1){
        return classNames
    }
   
    if (arguments.length < 2 && typeof arguments[0] === 'string'){
        return classNames +=' ' + arguments[0]
    }
    if (arguments.length > 1 && typeof arguments[0] === 'string'){
        classNames+= arguments[0]
        for (let i = 0; i < arguments.length; i++){
            i>0 && arguments[i][Object.keys(arguments[i])[0]] ? classNames+=" "+[Object.keys(arguments[i])[0]] : null
            
        }
    }
    return classNames
        
}

export default CoderComment
