import React,{Fragment} from 'react';

export const ButtonFormContent = ({message:logged}) => {
    return (
        <Fragment>
            <button type="submit">send</button>
            <p>{logged ? 'loggeado!!' : "aún no estás logueado"}</p>
        </Fragment>
    )
}

export const ButtonForm = React.memo(ButtonFormContent)