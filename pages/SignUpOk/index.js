import React, { useEffect } from "react";
import { useLogin } from "../../hooks/useLogin";
import { Fragment } from "react";
import Link from "next/link";

export default function Home({ nameString }) {
	const input = { name: nameString };
	const { isAuth, setAuth, setCurrentUserAndSave } = useLogin();
	setCurrentUserAndSave(nameString);
	setAuth(true);
	return (
		<Fragment>
			{`enhorabuena ${nameString} ya puedes ver el contenido especial, pulsa `}
			<Link
				href={{
					pathname: "http://localhost:3000/Details/",
				}}
			>
				aquí
			</Link>
		</Fragment>
	);
}
export async function getServerSideProps(context) {
	console.log(context.query.name);
	const nameString = context.query.name;
	const password = context.query.password;

	//operaciones para grabar en bbdd
	const low = require("lowdb");
	const FileSync = require("lowdb/adapters/FileSync");
	const adapter = new FileSync("db.json");
	const db = low(adapter);
	try {
		db.get("names").push({ name: nameString, password: password }).write();
		console.log(context);

		return {
			props: { nameString },
		};
	} catch {
		return {
			redirect: {
				permanent: "./SignUp",
			},
		};
	}
}
