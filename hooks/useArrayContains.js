import React,{useState} from 'react';

 export const useArrayContains=()=>{
     const [existInArray, setExistInArray] = useState(false);
     const detectExistInArray=(myString, myArray,key) => {
        if(myArray.some(i => i[key].includes(myString))===true && myString!== ''){
            console.log("mis comprobaciones",myArray.some(i => i[key].includes(myString)))
            setExistInArray(true);
            return true;
        }
        else{
            setExistInArray(false);
            return false;
        }
     }
    return {existInArray,detectExistInArray}
    }