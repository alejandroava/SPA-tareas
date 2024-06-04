import { NavigateTo } from "../Router";
import { fetchApi } from './fecthapi'
import{TaskScene} from '../scenes/task/task.scene'


export async function TaskContent(allTask) {
   
    const showTask = await fetchApi('http://localhost:3000/task')
    let fragment = ''
    showTask.forEach((task) => {
        fragment += `
       
            <p>${task.title}</p>
            <p>${task.description}</p>
            <p>${task.date}</p>
            <button class='edit_btn' data-id=${task.id}>Editar</button>
            <button class='delete_btn' data-id=${task.id}>Eliminar</button>
          
            `

    });
    
    allTask.innerHTML = fragment
    let editBtns = document.getElementsByClassName('edit_btn')
    const deleteBtns = document.getElementsByClassName('delete_btn')
    editBtns = [...editBtns]
    editBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            NavigateTo(`/task/edit?taskId=${btn.getAttribute("data-id")}`)
        
        })
    })

    for (let deleteBtn of deleteBtns) {
        deleteBtn.addEventListener('click', async () => {
            await fetchApi(`http://localhost:3000/task/${deleteBtn.getAttribute("data-id")}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            TaskContent(allTask)
        })
    }
    
}