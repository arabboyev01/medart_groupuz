import React from 'react'
import './SmallBlog.scss'
import {NavLink} from "react-router-dom";

function SmallBlog({data}) {
    const lang = localStorage.getItem('i18nextLng')

    return (
        <NavLink to={`/blog/${data.blog_id}`} className='smallblog'>
            <div className='smallblog__header'>
                <img src={data.image} alt="" className='smallblog__header-image'/>
            </div>
            <div className='smallblog__body'>
                <p className='smallblog__body-where'>{lang === 'uz' ? data.theme_uz : data.theme_ru}</p>
                <p className='smallblog__body-title'>{lang === 'uz' ? data.title_1_uz : data.title_1_ru}</p>
            </div>
            <div className='smallblog__footer'>
                <p className='smallblog__footer-time'>{data.created_at}</p>
            </div>
        </NavLink>
    )
}

export default SmallBlog