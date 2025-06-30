// import {createElement, PropsWithChildren} from 'react';
//
// function TextOrHeading({isHeading, children}:PropsWithChildren<{isHeading:boolean}>){
//     return isHeading?<h1>{children}</h1>:<span>{children}</span>
// }
//

import {createElement} from 'react';

function TextOrHeading({isHeading, children}:PropsWithChildren<{isHeading:boolean}>){
    return createElement(isHeading?'h1':'span', {className:'text'}, children)
}

