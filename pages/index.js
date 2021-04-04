import Head from "next/head";
import React, {useState, Fragment} from "react";
import styles from "../styles/Home.module.css";
import { useLogin } from "../hooks/useLogin";
import { useArrayContains } from "../hooks/useArrayContains";
import { FormList } from "../components/FormList";
import {LinkComponent} from "../components/LinkComponent";
import { useResults } from "../hooks/useResults";

export default function Home({ names }) {
	const { isAuth, setAuth, user, setCurrentUserAndSave } = useLogin();
  const  [errorLogin, setErrorLogin] = useState("");

	const submitFromApp = React.useCallback(async (loginData) => {
    const {name,password}=loginData;
   
    const res = await fetch(
      'http://localhost:3000/api/login/',
      {
        body: JSON.stringify({
          name:name,
          password:password
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    const result = await res.json();
    if(result.status!=='error'){
      setAuth(true);
		 	setCurrentUserAndSave(loginData.name);
       setErrorLogin("");
    }
    else{
      setErrorLogin(result.error);
    }
	}, []);

	return (
		<Fragment>
      <h3>Bienvenido a la home</h3>
      <p></p>
      <h5>Haz login para ver contenido con acceso restringido:</h5>
			<FormList onSubmit={submitFromApp} />
      {errorLogin!=="" && <div>error: {errorLogin}</div>}
      <p>Enlaces:</p>
      <LinkComponent href={{ pathname: "http://localhost:3000/Details"	}} message={"página de detalles (acceso restringido)"}/>
			<p>
      <LinkComponent href={{ pathname: "http://localhost:3000/SignUp/"	}} message={"Dáte de alta!!"}/> 
			
			</p>
		</Fragment>
	);
}

export async function getServerSideProps() {
	//primero de todo cargamos la lista de usuarios
	const res = await fetch("http://localhost:3004/names");
	const names = await res.json();

	return {
		props: { names },
	};
}
