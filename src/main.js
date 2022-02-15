import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {routes} from "./routes";
import './directives/RotationElement'
import {ValidationObserver,ValidationProvider, extend} from 'vee-validate'
import {required} from "vee-validate/dist/rules";

import 'bootstrap/dist/css/bootstrap.css'
import './assets/styles/style.css'

Vue.use(VueResource)

Vue.http.options.root = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000'

Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: 'history'
})

extend('required', {
    ...required,
    message: 'Este campo é obrigatório'
})

extend('caracter_max_min', {
    ...required,
    validate: (value, {min, max}) => {
        return value.length >= min && value.length <= max
    },
    params: ['min', 'max'],
    message: 'Este campo precisa ter no mínimo {min}, e no máximo {max} caracteres'
})


Vue.component('ValidationProvider', ValidationProvider)

Vue.component('ValidationObserver', ValidationObserver)

new Vue({
    el: '#app',
    router,
    render: h => h(App),
})
