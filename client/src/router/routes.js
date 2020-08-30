import Home from '../views/Home'
import About from '../components/home/About'
import Profile from '../views/Profile'
import Login from '../components/auth/Login'


const routes = () => {
  return [
    {
      path: '/',
      name: 'Home',
      component: Home,
      },
      {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        auth: true
      },
    }
  ]
}

export default routes()