import {useLogin} from '../../hooks/useLogin'

export default function Home() {
    const {isAuth,user}=useLogin();
    return (
        (isAuth ?  <div>"estoy logueado y soy" {user}</div> : "no estoy logueado"))
    
}

