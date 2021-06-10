function Comment({path,name,text}) {
    return (
        <div>
            <img src={path} alt={'avatar'+name}/>
            <p>{name}</p>
            <p>{text}</p>
        </div>
    )
}

export default Comment
