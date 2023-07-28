import { useDispatch, useSelector } from "react-redux"
import TodoTask from "../components/todoTask"
import {useEffect} from "react"
import {deleteTodoTask, finishTodoTask, getTodoTask} from "../store/todo/todo.thunk"
import DoneTasks from "../components/doneTasks"

const MainPage = () => {
    const dispatch = useDispatch()
    const {todoList , loading, error} = useSelector((state) => state.todo)

    useEffect(() => {
        dispatch(getTodoTask())
    },[])

    const deleteTask = (taskId) => {
        dispatch(deleteTodoTask(taskId))
        dispatch(getTodoTask())
    }

    const finishTask = (taskId, isCompleted) => {
        dispatch(finishTodoTask({taskId, isCompleted}))
        dispatch(getTodoTask())
    }


    if(loading) return <div className="lds-dual-ring"></div>
    if(error) return <div>{error}</div>


    const undoneTasks = todoList.filter(task => task.isCompleted == false)

    return(
        <div>
            {undoneTasks.map(task => 
                <TodoTask key={task._uuid} id={task._uuid} title={task.title} name={task.name} deadline={task.deadline} remove={deleteTask} finish={finishTask}/>
                )}
        </div>
    )
} 

export default MainPage