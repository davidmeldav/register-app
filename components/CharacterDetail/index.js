import React from 'react';
import { Fragment } from 'react';
import Link from 'next/link';

export const CharacterDetail = ({info}) => {
    const { name,id,image, species, type, gender,origin, location,episode, created}=info;
    return (
        <Fragment>
            <Link href={{pathname:'http://localhost:3000/Details'}}>
                volver
            </Link>
            <center>
                <h3>Personaje elegido</h3>
                <div>{name}</div>
                <img src={image}></img>
                <div>{species}</div>
                <div>{type}</div>
                <div>{gender}</div>
                <div>{origin}</div>
                <div>creado el {created}</div>
                <div>se le ha visto en el episodio:</div>
                {/* <p>{episode}</p> */}
            </center>
           
        </Fragment>
    )
}

