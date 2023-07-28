import styles from "../css.modules/style.module.css"

const TodoTask = ({id, title, name, deadline, isCompleted, remove, finish}) => {


    return(
        <div key={id} className={styles.taskWrapper}>
            <div>
                <p>Task: {title}</p>
                <p>Name: {name}</p>
                <p>date: {deadline}</p>
            </div>
            <div className={styles.buttonWrapper}>
                <button onClick={()=> remove(id)} className={styles.buttonItem}>x</button>
                <button onClick={()=> finish(id)} className={styles.buttonItem}>✓</button>
            </div>
        </div>
    )
}

export default TodoTask