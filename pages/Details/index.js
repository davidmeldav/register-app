import { useLogin } from "../../hooks/useLogin";
import {Fragment} from "react";
import { GET_CHARACTERS } from "../../constants/graphql";
import { LoggedComponent } from "../../components/LoggedComponent";
import { useResults } from "../../hooks/useResults";
import Link from "next/link";

export default function Home({ dataCharacters }) {
	const { isAuth, user } = useLogin();
	//console.log("dataCharacters.results",dataCharacters.characters);
	const { results: allData } = dataCharacters;
	console.log("allData", allData);
	if (isAuth) {
		return <LoggedComponent data={allData} user={user} />;
	}

	return (
        <Fragment>
            <div>
                "no estoy logueado"
            </div>
            <Link href={{pathname:"http://localhost:3000"}}>
              <a >haz login</a>
               
            </Link>
            <p></p>
            <Link href={{pathname:"http://localhost:3000/SignUp/"}}>
            <a >o regístrate</a>
            </Link>
        </Fragment>
        );
}

export async function getServerSideProps() {
	const defaultVars = {
		filter: { name: "morty" },
		page: 1,
	};
	const dataQuery = GET_CHARACTERS;
	const { characters: dataCharacters } = await useResults(defaultVars, dataQuery);
	console.log("fasfdsa", dataCharacters);
	return {
		props: { dataCharacters },
	};
}
