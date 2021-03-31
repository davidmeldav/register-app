import React, {useState,useEffect} from 'react';
import {Fragment} from 'react';
import {useResults} from '../../hooks/useResults';
import {useInputValue} from '../../hooks/useInputValue';
import {GET_CHARACTERS} from '../../constants/graphql';
export const LoggedComponentFormContent = ({setDataList}) => {
const [resultsOk, setResultsOk] = useState(true);
   //--> Manejo del input a enviar al api 
  const searchText=useInputValue('');
  const name={"filter":{"name": searchText.value}};
  const page={"page":1};
  const input={...name,...page}; 
  //<-- Fin manejo input a enviar

  useEffect(async () => {
    const dataQuery=GET_CHARACTERS;
    try{
        const {characters}= await useResults(input,dataQuery);
        setDataList(characters.results);
        setResultsOk(true);
    }
    catch{
        setResultsOk(false);
    }
   //dependencia es el valor del input
  },[searchText.value]);

    const change= async(e) => {
        searchText.onChange(e);
    }
    return(
       <Fragment>
            <form >
                <label>Escribe aquí el personaje que buscas:</label>
                <input value={searchText.value} onChange={change} type="text"></input>
            </form>

           {  (resultsOk==false) && <di>No hay resultados, prueba con otra búsqueda</di>
            
           } 
           
        </Fragment>
    )
}
export const LoggedComponentForm = React.memo(LoggedComponentFormContent)


