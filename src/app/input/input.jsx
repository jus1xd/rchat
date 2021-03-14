import React from 'react'

import './input.module.css'

export default function Input ({placeholder}) {

    placeholder = 'something'

    return (
        <input className="login__input" type="text" placeholder={placeholder}/>
    )
}