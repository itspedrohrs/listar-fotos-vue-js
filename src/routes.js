import RegisterImage from './components/form-registers/RegisterImage'
import Home from './components/home/Home'

export const routes = [
    {path: '', component: Home}, // direciona para pagina home
    {path: '/cadastro', component: RegisterImage} // direciona para pagina de cadastro das fotos
]