import RegisterImage from './components/registration/Registration'
import Home from './components/home/Home'

export const routes = [
    {path: '', name: 'home', component: Home, title: 'Home', menu: true}, // direciona para pagina home
    {path: '/image/create', name:'create_image', component: RegisterImage, title: 'Cadastro', menu: true}, // direciona para pagina de cadastro das fotos
]