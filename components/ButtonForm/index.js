import React,{Fragment} from 'react';
import { useRouter } from "next/router";

export const ButtonFormContent = ({message:logged}) => {
    const router = useRouter();
   const path=router.pathname;
    return (
        <Fragment>
            <button type="submit">send</button>
           { (path!=='/SignUp') &&< p>{logged ? 'loggeado!!' : "aún no estás logueado"}</p> }
        </Fragment>
    )
}

export const ButtonForm = React.memo(ButtonFormContent)