import login from './modules/login/template'
import register from './modules/register/template'
import home from './modules/home/template'

const routes = {
    '/' : login,
    '/register' : register,
    '/home' : home,
};


export default routes;