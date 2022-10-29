import React from 'react'
import {Link} from "react-router-dom";
import './LearnMore.btn.scss'

function LearnMore({url, children}) {
  return (
      <Link to={url}>
        <button className="buttonMain">{children}</button>
      </Link>
  )
}

export default LearnMore;
