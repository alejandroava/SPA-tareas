// import { TaskContent } from "../../helpers/Taskcontent"
import { fetchApi } from "../../helpers/fecthapi"
import { TaskContent } from "../../helpers/taskContent.js"

export function TaskScene() {
    const pageContent = `
    <form>
        <h1>Tareas</h1>
        <input type="text" placeholder="Titulo de la tarea" name="title">
        <input type="text" placeholder="Descripcion" name="description">
        <select name='select'>
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
        </select>
        <input type="date" name="date">
        <button type="submit">Guardar tarea</button>
    </form>
    <div id='taskContainer'></div>

    `
    const logic = async () => {
        const $myFormTask = document.querySelector('form')
        const allTask = document.getElementById('taskContainer')
        TaskContent(allTask)
     
        $myFormTask.addEventListener('submit', async e => {
            e.preventDefault()
           
        const formData = new FormData(e.target)
        const title = formData.get('title')
        const description = formData.get('description')
        const select = formData.get('select')
        const date = formData.get('date')

        await fetchApi('http://localhost:3000/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                description,
                select,
                date,
                })
            })
            TaskContent(allTask)
        })
      
    }
    return {
        pageContent,
        logic
    }
   
}