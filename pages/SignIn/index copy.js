import React,{useEffect} from 'react';
import {useLogin} from '../../hooks/useLogin';
import Link from 'next/link'
import {useInputValue} from '../../hooks/useInputValue';
import { useRouter } from 'next/router'
export default function Home() {
   const email=useInputValue('');
   const password=useInputValue('');
   const input={name:email.value,password:password.value};
   const router = useRouter();
   const submitFromSignin = React.useCallback(async (e,input) => { 
        e.preventDefault();
       
        router.push({
            pathname: 'http://localhost:3000/SignInOk/',
            query: input,
        })
    },
    [],
    );

      return(
          
            <form onSubmit={(e)=>submitFromSignin(e,input)}>
                <p>Formulario de alta</p>
                <input  {...email} type="text"></input>
                <input {...password}   type="password"></input>
                {/* <Link href={{
                    pathname: 'http://localhost:3000/SignInOk/',
                    query: input
                 }}> */}
                <button>enviar</button>
                {/* </Link> */}
            </form>       
          
      )
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3004/names')
    const names = await res.json()
  
    return {
      props: { names
      }
    }
  }
  