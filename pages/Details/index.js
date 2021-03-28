import {useLogin} from '../../hooks/useLogin'

export default function Home() {
    const {isAuth,user}=useLogin();
    //const name=window.localStorage.getItem('nameLogged')
    //const {name}= localStorage.getItem('nameLogged')
    return (
        (isAuth ?  <div>"estoy logueado y soy" {user}</div> : "no estoy logueado"))
    
    
}

// export async function getServerSideProps(context) {
//     //  console.log(context.query);
//     // const nameString=context.query
//     // if(nameString==undefined){
//     //     const {user:nameString}=useLogin();
//     // }
   
//     // return {
//     //      props:{nameString}
//     //   }

// }