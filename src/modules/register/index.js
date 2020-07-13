import $ from 'jquery'
import { onNavigate } from '../../'
import home from '../home'

const onLoad = () => {
    $("#register").text("Hiiiii")
    setTimeout(()=>{
        onNavigate('/home', null, home.onLoad)
    }, 5000)
}

export default { onLoad }