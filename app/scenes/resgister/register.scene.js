import { NavigateTo } from "../../Router"
import { fetchApi } from "../../helpers/fecthapi"
import styles from './register.styles.css'
import{encryptData} from '../../helpers/encrypt'

export function RegisterScene() {
    const root = document.getElementById('root')
    const registerForm = `
        <form id='registerForm' class='${styles.register_form}'>
            <h1>Registro de usuarios </h1>
            <label for='name'>Name</label class='${styles.register_label}'>
            <input type="text" name="name" id="name" placeholder='Enter your name' class='${styles.register_input}'>
            <label for='email'>Email</label class='${styles.register_label}'>
            <input type="email" placeholder="correode@example.com" name="email" id="email" autocomplete="email" class='${styles.register_input}'>
            <label for='password'>Password</label class='${styles.register_label}'>
            <input type="password" placeholder="password" name="password" id="password" class='${styles.register_input}'>
            <button type="submit">Register</button>
            <button type="submit" id='loginBtn'>Login</button>
        </form>
    `
    root.innerHTML = registerForm
    const form = document.getElementById('registerForm')
    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        
        if (!name) {
            alert('Please enter your name')
            document.getElementById('name').focus()
            return
        }
        if (!email) {
            alert('Please enter your email')
            document.getElementById('email').focus()
            return
        }
        if (!password) {
            alert('Please enter your password')
            document.getElementById('password').focus()
            return
        }

        const userCreated = await fetchApi('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password: encryptData(password)
            })
        })

        if (userCreated) {
            alert('User created successfully')
            NavigateTo('/login')
        } else {
            alert('try Again')
        }
    })
    const loginBtn = document.getElementById('loginBtn')
    loginBtn.addEventListener('click', () => {
        NavigateTo('/login')
    })
}
   