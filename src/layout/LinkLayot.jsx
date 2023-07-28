import { Link, Outlet } from "react-router-dom"
import styles from "../css.modules/style.module.css"
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme} from "../store/theme/theme.slice"



const LinkLayout = () => {
    const dispatch = useDispatch()
    const { theme } = useSelector(state => state.theme)


    const changeTheme = () => {
        dispatch(toggleTheme())
    }


    return(
        <div style = {{ backgroundColor: theme}}>
            <div className={styles.linkWrapper}>
                <Link className={styles.links} to={'/'}>MainPage</Link>
                <Link className={styles.links} to={'/create'}>CreatePage</Link>
                <Link className={styles.links} to={'/done'}>DoneTaskPage</Link>
            </div>
            <button className={styles.formBtn} onClick={changeTheme}>toggle theme</button>
            <Outlet />
        </div>

    )
} 

export default LinkLayout 