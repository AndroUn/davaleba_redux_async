import { Link, Outlet } from "react-router-dom"
import styles from "../css.modules/style.module.css"

const LinkLayout = () => {
    return(
        <div>
            <div className={styles.linkWrapper}>
                <Link className={styles.links} to={'/'}>MainPage</Link>
                <Link className={styles.links} to={'/create'}>CreatePage</Link>
            </div>
            <Outlet />
        </div>

    )
} 

export default LinkLayout 