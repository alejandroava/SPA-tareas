import { TaskScene } from "../task/task.scene"
import { NavigateTo } from "../../Router"
import styles from './NavbarLayout.styles.css'
export function NavbarLayoutScene(pageContent,logic) {
    const root = document.getElementById('root')
    
    root.innerHTML = `
    <nav class = '${styles.navbar}'>
        <ul class='${styles.navbar_list}'>
            <li><a>Users</a></li>
            <li><a>Task</a></li>
            <li><a class='${styles.logout}'>Logout</a></li>
        </ul>
    </nav>
    ${pageContent}
    `
}