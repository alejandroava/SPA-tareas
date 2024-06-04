import { routes } from './routes.js'
import { NavbarLayoutScene } from './scenes/navbarLayout/navbarLayout.scene.js'
export function Router() {
    alert('desde router')
    const path = window.location.pathname

    const publicRoute = routes.public.find(route => route.path === path)
    const privateRoute = routes.private.find(route => route.path === path)
    
    if (publicRoute) {
        publicRoute.scene()
        return
    }
    if (privateRoute) {
        if (localStorage.getItem('token')) {
            const { pageContent, logic } = privateRoute.scene()
            NavbarLayoutScene(pageContent, logic)
            return
        }
    }
    NavigateTo('/notFound')
}

export function NavigateTo(path) {
    window.history.pushState({}, '', window.location.origin + path)
    Router()
}