import React from 'react'
import {NavLink} from "react-router-dom";
import {ReactComponent as Arrow} from "../../../../assets/icons/WhiteArrow.svg";
import './ReadMore.btn.scss'
function ReadMore({children, url}) {
    return (
          <NavLink data-aos="zoom-in" data-aos-duration="4000" to={url} className='readmore'>
              <span>{children}</span>
              <Arrow/>
          </NavLink>
    )
}

export default ReadMore