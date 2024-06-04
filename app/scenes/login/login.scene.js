import { NavigateTo } from "../../Router"
import { fetchApi } from "../../helpers/fecthapi"
import { decryptData } from "../../helpers/encrypt"
import styles from './login.styles.css'

export function LoginScene() {
    alert('desde login')
    const root = document.getElementById('root')
    const loginForm = `
         <form id='loginForm' class='${styles.login_form}'>
            <h1>Login</h1>
            <label for='email' class='${styles.login_label}'>Email</label>
            <input type="email" placeholder="coorede@example.com" name="email" id="email" autocomplete="email" class='${styles.login_input}'>
            <label for='password' class='${styles.login_label}'>Password</label>
            <input type="password" placeholder="password" name="password" id="password" class='${styles.login_input}'>
            <button type="submit">Login</button>
            <button type="button" id='registerBtn'>Register</button>
        </form>
    `
    root.innerHTML = loginForm
    const form = document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault()

        const email = document.getElementById('email').value
        const password = document.getElementById('password').value

        if (!email) {
            alert('Email is required')
            document.getElementById('email').focus()
            return
        }
        if (!password) {
            alert('password is required')
            document.getElementById('password').focus()
            return
        }

        const users = await fetchApi('http://localhost:3000/users')
        const user = users.find(user => user.email === email && decryptData(user.password) === password)
        if (user) {
            const token = Math.random().toString(36).substring(2)
            localStorage.setItem('token', token)
            NavigateTo('/task')
        } else {
            alert('Invalid credentials')
        }
    })
        document.getElementById('registerBtn').addEventListener('click', () => {
        NavigateTo('/register')
    })
}