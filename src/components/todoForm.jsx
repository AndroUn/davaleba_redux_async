import { useState } from "react"
import { useDispatch } from "react-redux"
import { createTodoTask } from "../store/todo/todo.thunk"
import styles from "../css.modules/style.module.css"

const TodoForm = () => {
    const dispatch = useDispatch()
    const [taskValue, setTaskValue] = useState('')
    const [nameValue, setName] = useState('')
    const [deadlineValue, setDeadlineValue] = useState('')
    const [isCompleted] = useState(false)


    const onSubmit = (e) => {
        e.preventDefault()

        const newTask = {
            title: taskValue,
            name: nameValue,
            deadline: deadlineValue,
            isCompleted
        }

        dispatch(createTodoTask(newTask))

        setTaskValue('')
        setName('')
        setDeadlineValue('')
    }


    return(
        <form className={styles.toDoForm} onSubmit={onSubmit}>
            <label>Task</label>
            <input className={styles.formInput} type="text" value={taskValue} onChange={e => setTaskValue(e.target.value)}/>
            <label>Name</label>
            <input className={styles.formInput} type="text" value={nameValue} onChange={e => setName(e.target.value)}/>
            <label>Deadline</label>
            <input className={styles.formInput} type="date" value={deadlineValue} onChange={e => setDeadlineValue(e.target.value)}/>
            <button className={styles.formBtn}>submit</button>
        </form>
    )
}

export default TodoForm