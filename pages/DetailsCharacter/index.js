import { useLogin } from "../../hooks/useLogin";
import { CHARACTER } from "../../constants/graphql";
import { CharacterDetail } from "../../components/CharacterDetail";
import { useResults } from "../../hooks/useResults";

export default function Home({ dataCharacter }) {
	const { isAuth, user } = useLogin();

	if (isAuth) {
		return <CharacterDetail info={dataCharacter} />;
	}

	return "no estoy logueado";
}

export async function getServerSideProps(context) {
	const idCharacter = context.query.id;
	const input = { id: idCharacter };
	const dataQuery = CHARACTER;
	const { character: dataCharacter } = await useResults(input, dataQuery);

	return {
		props: { dataCharacter },
	};
}
