import React from 'react'
import LearnMoreBtn from "../../Buttons/LearnMore/LearnMore.btn";
import './ServiceCard.scss'
import {useTranslation} from "react-i18next";

function ServiceCard({data}) {
    const {t} = useTranslation()

    const lang = localStorage.getItem('i18nextLng')

    return (<div data-aos="zoom-in" key={data.department_id} className='service__card'>
        <img data-aos="zoom-in" data-aos-duration="4000" src={data.image} alt="" className='service__card-image'/>
        <p data-aos="zoom-in" data-aos-duration="4000" className='service__card-title'>{lang === 'uz' ? data.name_uz : data.name_ru}</p>
        <p data-aos="zoom-in" data-aos-duration="4000" className='service__card-descr'>{lang === 'uz' ? data.description_uz : data.description_ru}</p>
        <LearnMoreBtn children={t('urltext')} url={`/service/${data.department_id}`}/>
    </div>)
}

export default ServiceCard