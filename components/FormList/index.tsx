import React, {useCallback} from 'react';
import {useInputValue} from '../../hooks/useInputValue';
import {useLogin} from '../../hooks/useLogin';
import {ButtonForm} from '../ButtonForm';
declare namespace JSX {
    interface IntrinsicElements {
        email: any
    }
}
// declare global {
//     namespace JSX {
//         interface IntrinsicElements {
//             'email': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
//         }
//     }
// }
export const FormListContent = ({onSubmit}:any) => {
    // type emailProps={
    //     value:String;
    //     onChange?: (e:MouseEvent) =>void;

    // }
    type inputProps= {
        value:String;
        onChange?: (e:MouseEvent) =>void;
      }
      type inputValues={ 
          name:String;
          password:String;
      }
   // type inputPropsObject;
    const email= useInputValue('f');
    const password= useInputValue('');
    const input:inputValues={
        name:email.value,password:password.value
    };
   
    const {isAuth:message}=useLogin();
    const internalSubmit = useCallback(
        (e:  React.FormEvent<HTMLFormElement>,input:inputValues) => {
            console.log("envio esto");
            console.log(input);
            console.log(name)
            e.preventDefault();
             onSubmit(input);
        },
        [],
      );
    return (
        <form onSubmit={(e:  React.FormEvent<HTMLFormElement>): any =>internalSubmit(e,input) } >
            <input  email={email.value} onChange={ email.onChange}  type="text"></input>
            <input  password={password.value} onChange={password.onChange}  type="password"></input>
            {/* <input  password={password.value} onChange={(e: React.FormEvent<HTMLInputElement>):any =>password.onChange}  type="password"></input> */}
            <ButtonForm message={message}/>
        </form>
    )
}
export const FormList = React.memo(FormListContent)
