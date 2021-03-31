import React, {useState,useEffect} from 'react';
import {Fragment} from 'react';
import {ListCharacters} from '../ListCharacters';
import {LoggedComponentForm} from '../LoggedComponentForm'
export const LoggedComponentContent = ({data=[],user}) => {
  const [dataList, setDataList] = useState(()=>(data));

    return(
        <Fragment>
        <center>
            <div>"estoy logueado y soy" {user}</div>
            <h3>Busca tu personaje favorito </h3>
            <h5>haz click sobre él para obtener detalles</h5>
           <LoggedComponentForm setDataList={setDataList} />
            
            <br></br>
            <ListCharacters info={dataList}/>
        </center>
        </Fragment>
    )
}

export const LoggedComponent = React.memo(LoggedComponentContent)

