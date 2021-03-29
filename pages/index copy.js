import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useLogin} from '../hooks/useLogin';
import {useInputValue} from '../hooks/useInputValue';
import {useArrayContains} from '../hooks/useArrayContains';
import Link from 'next/Link';

export default function Home() {

 
  const {setAuth}=useLogin();
  // const arrayContains=(myString, myArray,key)=>{
  //   console.log("myArray",myArray)
  //     return myArray.some(i => i[key].includes(myString));
  // }
  const email = useInputValue('');
  const password= useInputValue('')
  const input={name:email.value,password:password.value}
  const existNameInArray=useArrayContains();
  const existPasswordInArray=useArrayContains();
  
  const submitFromApp = useCallback(
    (inputValue) => {
        
        addTasks(inputValue);
    },
    [],
  );
  const handleSubmit= async (e,loginData)=>{
    e.preventDefault()
    const {names} = await fetch(`http://localhost:3000/api/hello`).then(res => res.json());
    if (existNameInArray.detectExistInArray(loginData.name,names,"name")==true && existPasswordInArray.detectExistInArray(loginData.password,names,"password")==true ){
      console.log("existe")  ;
      setAuth()
      }
      else{
        console.log("no existe")
      }
  }

  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e,input)}>
          <input  email={email.value} onChange={email.onChange}  type="text"></input>
          <input  password={password.value} onChange={password.onChange}  type="password"></input>
          <button type="submit">send</button>
      </form>
      <Link href='./Details'>
        <a >página de detalles</a>
      </Link>
    </div>
  )
}

