import { LoginScene } from "./Scenes/login/login.scene"
import { RegisterScene } from "./scenes/resgister/register.scene"
import { NotFoundScene } from "./Scenes/notFound/notFound.scene"
import { TaskScene } from "./scenes/task/task.scene"

export const routes = {
    public: [
        { path: '/login', scene: LoginScene },
        { path: '/register', scene: RegisterScene },
        { path: '/notFound', scene: NotFoundScene }
    ],
    private: [
        { path: '/task', scene: TaskScene },
        // {path : '/task/edit', scene: TaskEditScene}
    ]
}