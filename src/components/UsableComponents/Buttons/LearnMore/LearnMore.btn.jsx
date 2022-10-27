import React from 'react'
import './LearnMore.btn.scss'
import {NavLink} from "react-router-dom";
function LeanMore({children,url}) {
  return (
    <NavLink to={url} className='learnmore' >
        {children}
    </NavLink>
  )
}

export default LeanMore