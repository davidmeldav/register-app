import Head from "next/head";
import React, { createContext, useState, useContext, useCallback, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useLogin } from "../hooks/useLogin";
import { useArrayContains } from "../hooks/useArrayContains";
import { FormList } from "../components/FormList";
import Link from "next/Link";

export default function Home({ names }) {
	const { isAuth, setAuth, user, setCurrentUserAndSave } = useLogin();
	const existNameInArray = useArrayContains();
	const existPasswordInArray = useArrayContains();
	const nameString = "";

	const submitFromApp = React.useCallback(async (loginData) => {
		//hook de comprobación existe usuario en bbdd
		if (existNameInArray.detectExistInArray(loginData.name, names, "name") == true && existPasswordInArray.detectExistInArray(loginData.password, names, "password") == true) {
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
			<FormList onSubmit={submitFromApp} />
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
						pathname: "http://localhost:3000/SignIn/",
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
