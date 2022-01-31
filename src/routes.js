const RegisterImage = () => System.import('./components/registration/Registration')

import Home from './components/home/Home'

export const routes = [
    {path: '', name: 'home', component: Home, title: 'Home', menu: true}, // direciona para pagina home
    {path: '/image/create', name:'create_image', component: RegisterImage, title: 'Cadastro', menu: true}, // direciona para pagina de cadastro das fotos
    {path: '/image/create/:id', name:'updated_image', component: RegisterImage, title: 'Cadastro', menu: false}, // direct to paginate updated image
    {path: '*', component: Home, menu: false} // caso não exista a rota direciona para pagina home
]