import React from 'react'
import './index.scss'

//container
const Container = ({children}) => {
    return(
        <div className='container'>
            {children}
        </div>
    )
}
export {Button, Container}