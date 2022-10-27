import React from 'react'
import './Appoinment.scss'
function AppoinmentBtn({children, onClick}) {
    return (<button onClick={onClick} className='appoinment'>{children}</button>)
}

export default AppoinmentBtn