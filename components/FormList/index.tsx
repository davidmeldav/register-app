import React, {useCallback} from 'react';
import {useInputValue} from '../../hooks/useInputValue';
import {useLogin} from '../../hooks/useLogin';
import {ButtonForm} from '../ButtonForm';

export const FormListContent = ({onSubmit}:any) => {
    type inputValues={ 
        name:String;
        password:String;
    }
   // type inputPropsObject;
    const email= useInputValue('');
    const password= useInputValue('');
    const input:inputValues={
        name:email.value,password:password.value
    };
   
    const {isAuth:message}=useLogin();
    const internalSubmit = useCallback(
        (e:  React.FormEvent<HTMLFormElement>,input:inputValues) => {
            console.log("envio esto",input);
            e.preventDefault();
             onSubmit(input);
        },
        [],
      );
    return (
        //duda: el any a qué equivaldría
        <form onSubmit={(e:  React.FormEvent<HTMLFormElement>): void =>internalSubmit(e,input) } >
            <input  email={email.value} onChange={ email.onChange}  type="text"></input>
            <input  password={password.value} onChange={password.onChange}  type="password"></input>
            {/* <input  password={password.value} onChange={(e: React.FormEvent<HTMLInputElement>):any =>password.onChange}  type="password"></input> */}
            <ButtonForm message={message}/>
        </form>
    )
}
export const FormList = React.memo(FormListContent)
