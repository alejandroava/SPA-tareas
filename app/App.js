import {Router} from './Router'
export function App() {
    alert('desde app')
    const root = document.getElementById('root')
    if (!root) {
        alert('Ocurrio un error al cargar el root')
    }
    Router()
}
