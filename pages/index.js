import Head from "next/head";
import React, { createContext, useState, useContext, useCallback, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useLogin } from "../hooks/useLogin";
import { useArrayContains } from "../hooks/useArrayContains";
import { FormList } from "../components/FormList";
import Link from "next/Link";

export default function Home({ names }) {
	const { isAuth, setAuth, user, setCurrentUserAndSave } = useLogin();
	const {detectExistInArray:existNameInArray} = useArrayContains();
	const {detectExistInArray:existPasswordInArray} = useArrayContains();

	const submitFromApp = React.useCallback(async (loginData) => {
		//hook de comprobación existe usuario en bbdd
    const {name,password}=loginData;
		if (existNameInArray(name, names, "name") == true && existPasswordInArray(password, names, "password") == true) {
			console.log("existe");
			//autentifico usuario y guardo nombre en provider
			setAuth(true);
			setCurrentUserAndSave(loginData.name);
		} else {
			setAuth(false);
			console.log("no existe");
		}
	}, []);

	return (
		<div>
      <h3>Bienvenido a la home</h3>
      <p></p>
      <h5>Haz login para ver contenido con acceso restringido:</h5>
			<FormList onSubmit={submitFromApp} />
      <p>Enlaces:</p>
			<Link
				href={{
					pathname: "http://localhost:3000/Details/",
				}}
			>
				<a>página de detalles (acceso restringido)</a>
			</Link>
			<p>
				<Link
					href={{
						pathname: "http://localhost:3000/SignUp/",
					}}
				>
					<a>Dáte de alta!!</a>
				</Link>
			</p>
		</div>
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
