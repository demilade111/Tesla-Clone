import React from 'react'
import './buttonprimary.css'

function ButtonPrimary({name,title,onClick}) {
    return (
        <button onClick={onClick} title={title} className="buttonprimary">{name}</button>
    
    );
}

export default ButtonPrimary
