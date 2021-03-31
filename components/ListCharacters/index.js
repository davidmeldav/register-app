import {Character} from '../Character';
import {Fragment} from 'react';
export const ListCharacters=({info}) =>{

    return(
        <Fragment>
            { info && info.map((elem,index) => {
                return <Character key={elem.id} info={elem} />
            })}
        </Fragment>
        
        )
} 