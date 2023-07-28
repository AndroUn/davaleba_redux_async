import { useDispatch, useSelector } from "react-redux"
import TodoTask from "../components/todoTask"
import {useEffect} from "react"
import {deleteTodoTask, finishTodoTask, getTodoTask} from "../store/todo/todo.thunk"


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

    const finishTask = (taskId) => {
        dispatch(finishTodoTask(taskId))
    }


    if(loading) return <div>Loading . . .</div>
    if(error) return <div>{error}</div>


    const undoneTasks = todoList
    return(
        <div>
            {todoList.map(task => 
                <TodoTask key={task._uuid} id={task._uuid} title={task.title} name={task.name} deadline={task.deadline} remove={deleteTask} finish={finishTask}/>
                )}
        </div>
    )
} 

export default MainPage