import App from './App.vue'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'

const routes = [
    {
        path: '/',
        component:App,
        name:'Landing'
    },
    {
        path:'/login',
        component:Login,
        name:'Login',
        
    },
    {
        path:'/register',
        component:Register,
        name:'Register'
    },
    {
        path:'/home',
        component:Home,
        name:'Home'
    }
]
export default routes