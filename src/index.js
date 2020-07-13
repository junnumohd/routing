import routes from './routes'
import login from './modules/login'
import home from './modules/home'
import register from './modules/register'

let rootDiv = ''
document.addEventListener('DOMContentLoaded', ()=>{
    rootDiv = document.getElementById('root');
    rootDiv.innerHTML = routes[window.location.pathname];
})
const onNavigate = (pathName, state={}, onLoadEvent) => {
    window.history.pushState(
        state,
        pathName,
        window.location.origin + pathName
    )
    rootDiv.innerHTML = routes[pathName];
    console.log(onLoadEvent)
    onLoadEvent && onLoadEvent();
}

window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
}

export { onNavigate, login, register, home }