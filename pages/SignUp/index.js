import React, { useEffect } from "react";
import { FormList } from "../../components/FormList";
import { useRouter } from "next/router";
import {Fragment} from 'react';

export default function Home() {
	const router = useRouter();
	const submitFromSignin = React.useCallback(async (input) => {
		router.push({
			pathname: "http://localhost:3000/SignUpOk/",
			query: input,
		});
	}, []);

	return (
    <Fragment>
      <h3>Formulario de registro</h3>
      <FormList onSubmit={submitFromSignin} />
    </Fragment>
  );
}

export async function getServerSideProps() {
	const res = await fetch("http://localhost:3004/names");
	const names = await res.json();

	return {
		props: { names },
	};
}
