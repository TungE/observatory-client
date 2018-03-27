// Auth Containers
import AuthLogin from '@/containers/auth_login'
import AuthRegister from '@/containers/auth_register'

const AuthLoginRoute = {
  path: '/auth/login',
  name: 'auth_login',
  component: AuthLogin
}

const AuthRegisterRoute = {
  path: '/auth/register',
  name: 'auth_register',
  component: AuthRegister
}

export default [
  AuthLoginRoute,
  AuthRegisterRoute
]
