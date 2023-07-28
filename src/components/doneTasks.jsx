import styles from "../css.modules/style.module.css"

const DoneTasks = ({id, title, name, deadline, isCompleted, remove, finish}) => {


    return(
        <div key={id} className={styles.taskBox}>
            <div>
                <p>Task: {title}</p>
                <p>Name: {name}</p>
                <p>Deadline: {deadline}</p>
            </div>
            <div className={styles.buttonWrapper}>
                <button onClick={()=> remove(title)} className={styles.buttonItem}>x</button>
                <button onClick={()=> finish(id)} className={styles.buttonItem}>&#9166;</button>
            </div>
        </div>
    )
}

export default DoneTasks