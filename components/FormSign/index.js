import React,{useEffect,useState} from 'react';
import {Link} from 'next/link'

export const FormSign= ({}) =>{

    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        
       
      });
      const submit = (e) => {
        e.preventDefault();
       // app.render(req, res,  'http://localhost:3004/api/change', query);
//        href={{ pathname: '/about', query: { name: 'Sajad' } }
// fetch(`./SignInOk`);
       
     
      
    }
   return (
    
    <form>
        <input   type="text"></input>
        <input    type="password"></input>
       <button>fd</button>
    </form>
  
    )

}


