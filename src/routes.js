import RegisterImage from './components/form-registers/RegisterImage'
import Home from './components/home/Home'

export const routes = [
    {path: '', component: Home, title: 'Home'}, // direciona para pagina home
    {path: '/create', component: RegisterImage, title: 'Cadastro'} // direciona para pagina de cadastro das fotos
]