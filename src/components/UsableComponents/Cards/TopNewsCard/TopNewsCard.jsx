import React from 'react'
import './TopNewsCard.scss'

import {ReactComponent as Calendar} from "../../../../assets/icons/Calendar.svg";
import ReadMore from "../../Buttons/ReadMore/ReadMore.btn";
import {useTranslation} from "react-i18next";

function TopNewsCard({data}) {
    const {t} = useTranslation()
    const lang = localStorage.getItem('i18nextLng')


    return (<div className='top__news'>
        <img data-aos="zoom-in" data-aos-duration="4000" src={data.image} alt="" className='image'/>
        <div className='infos'>
            <div data-aos="zoom-in" data-aos-duration="4000" className='info'><Calendar/>{data.created_at}</div>
        </div>
        <p data-aos="zoom-in" data-aos-duration="4000"
           className='title'>{lang === 'uz' ? data.title_uz : data.title_ru}</p>
        <p data-aos="zoom-in" data-aos-duration="4000"
           className='descr'>{lang === 'uz' ? data.full_description_uz : data.full_description_ru}</p>
        <ReadMore children={t('urltext')} url={`./news/${data.news_id}`}/>
    </div>)
}

export default TopNewsCard