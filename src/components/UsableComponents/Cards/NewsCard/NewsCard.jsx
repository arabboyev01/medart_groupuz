import React, {useContext} from 'react'
import './NewsCard.scss'

import {NavLink} from "react-router-dom";
import {LanguageContext} from "../../../../context/langContext";

function NewsCard({data}) {
    const lang = useContext(LanguageContext);
    return (
        <NavLink data-aos="zoom-in" data-aos-duration="4000" to={`/news/${data.news_id}`} key={data.news_id}
                 className='newswrapper'>
            <img src={data.image} alt="" className='image'/>
            <div className='infos'>
                <p className='info'>{data.created_at}</p>
                <p className='title'>{lang === 'uz' ? data.title_uz : data.title_ru}</p>
            </div>
        </NavLink>
    )
}

export default NewsCard
