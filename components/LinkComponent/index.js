import React,{Fragment} from 'react';
import Link from 'next/link'

export const LinkComponent = ({message,...href}) => {
   console.log(href.children)
    return (
        <Link
            {...href}
        >
            <a>{message}</a>
        </Link>
    )
}

export const LinkContainer = React.memo(LinkComponent)