import React, {useCallback} from 'react';
import {useInputValue} from '../../hooks/useInputValue';
import {useLogin} from '../../hooks/useLogin';
import {ButtonForm} from '../ButtonForm'
import {useRouter} from 'next/router'

export const FormListContent = ({onSubmit}) => {
    const email = useInputValue('');
    const password= useInputValue('');
    const input={name:email.value,password:password.value};
    const {isAuth:message}=useLogin();
    const router = useRouter();
    const internalSubmit = useCallback(
        (e,input) => {
            e.preventDefault();
             onSubmit(input);
            // router.push({
            //     pathname: 'http://localhost:3000/Details/',
            //     query: email.value})
        },
        [],
      );
    return (
        <form onSubmit={(e)=>internalSubmit(e,input)}>
            <input  email={email.value} onChange={email.onChange}  type="text"></input>
            <input  password={password.value} onChange={password.onChange}  type="password"></input>
            <ButtonForm message={message}/>
        </form>
    )
}
export const FormList = React.memo(FormListContent)
