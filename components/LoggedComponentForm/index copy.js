import React, {useState,useEffect} from 'react';
import {Fragment} from 'react';
import {ListCharacters} from '../ListCharacters';
import {useResults} from '../../hooks/useResults';
import {useInputValue} from '../../hooks/useInputValue';
import {GET_CHARACTERS} from '../../constants/graphql';
export const LoggedComponentContent = ({data=[],user}) => {
  const [dataList, setDataList] = useState(()=>(data));

  const searchText=useInputValue('');
  const name={"filter":{"name": searchText.value}};
  const page={"page":1};
  const input={...name,...page}; 
 
  useEffect(async () => {
    // Actualiza el título del documento usando la API del navegador
    const dataQuery=GET_CHARACTERS;
    try{
        const {characters}= await useResults(input,dataQuery);
        setDataList(characters.results)
    }
    catch{
        return "no existen resultados"
    }
   ;
  },[searchText.value]);
    const change= async(e) => {
        searchText.onChange(e);
        const val=e.target.value;
    }
    return(
       <Fragment>
            <form >
                <label>Escribe aquí el personaje que buscas:</label>
                <input value={searchText.value} onChange={change} type="text"></input>
            </form>
            <div>no hay resultados, por favor intenta con otra búsqueda</div>
        </Fragment>
    )
}

export const LoggedComponent = React.memo(LoggedComponentContent)

