import styles from "../css.modules/style.module.css"

const doneTasks = ({index, title, name, isCompleted, remove}) => {


    return(
        <div key={index} className={styles.taskWrapper}>
            <div>
                <p>{title}</p>
                <p>{name}</p>
            </div>
            <div className={styles.buttonWrapper}>
                <button onClick={()=> remove(title)} className={styles.buttonItem}>x</button>
            </div>
        </div>
    )
}

export default doneTasks