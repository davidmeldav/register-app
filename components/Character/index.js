import React from 'react';
import { Fragment } from 'react';
import Link from 'next/link'

export const Character = ({info}) => {
    const {name,image,id}=info;
    const input={"id":id};
    return (
        <Link href={{
            pathname: "http://localhost:3000/DetailsCharacter/",
            query: input
        }}><a>
            <div>
            <div>{name}</div>
            <img src={image}></img>
            </div>
            </a>
        </Link>
    )
}

