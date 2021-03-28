import React,{useEffect} from 'react';

import {FormList} from '../../components/FormList';
import { useRouter } from 'next/router'
export default function Home() {
   const router = useRouter();
   const submitFromSignin = React.useCallback(async (input) => { 
       
        router.push({
            pathname: 'http://localhost:3000/SignInOk/',
            query: input,
        })
    },
    [],
    );

      return(
            <FormList onSubmit={submitFromSignin}/>                 
          
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
  