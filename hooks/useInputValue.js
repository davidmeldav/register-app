import React,{useState} from 'react';

export const useInputValue = (val) => {
     const [value, setvalue] = useState(()=>val);
     const onChange=(e)=>{
        setvalue(e.target.value)
     }
    return {value,onChange}
}


