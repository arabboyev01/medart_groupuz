import React from 'react'

import './Service.scss'
import Photo from '../../../assets/images/aboutService.png'
import Dot from "../../../assets/icons/Dot.svg";

import Container from "../../UsableComponents/Container/Container";
import {useTranslation} from "react-i18next";


function Service() {
    const {t} = useTranslation()
    const lang = localStorage.getItem('i18nextLng')
    const data = [{
        id: 1,
        image: Photo,
        title_uz: `${t('aboutservicetitle')}`,
        title_ru: `${t('aboutservicetitle')}`,
        type_uz: `${t('aboutservicetype')}`,
        type_ru: `${t('aboutservicetype')}`,
        descr_uz: `${t('aboutservicedescr')}`,
        descr_ru: `${t('aboutservicedescr')}`,
        services: [
            {
                id: 1,
                title_uz: `${t('aboutservices1')}`,
                title_ru: `${t('aboutservices1')}`,
            },
            {
                id: 2,
                title_uz: `${t('aboutservices2')}`,
                title_ru: `${t('aboutservices2')}`,
            },
            {

                id: 3,
                title_uz: `${t('aboutservices3')}`,
                title_ru: `${t('aboutservices3')}`,
            },
            {
                id: 4,
                title_uz: `${t('aboutservices4')}`,
                title_ru: `${t('aboutservices4')}`,
            },
            {

                id: 5,
                title_uz: `${t('aboutservices5')}`,
                title_ru: `${t('aboutservices5')}`,
            },
        ]
    }];

    return (<Container>
        <section className='about__service'>
            {data.map(service => (<div key={service.id} className='about__service-wrapper'>
                <div data-aos="zoom-in" data-aos-duration="4000" className='about__service-wrapper-Image rel'>
                    <img src={service.image} alt=""/>
                </div>
                <div className='about__Info'>
                    <p data-aos="zoom-in" data-aos-duration="4000" className='about__Info-title'>{lang === 'uz' ? service.title_uz : service.title_ru}</p>
                    <p data-aos="zoom-in" data-aos-duration="4000" className='about__Info-type'>{lang === 'uz' ? service.type_uz : service.type_ru}</p>
                    <p data-aos="zoom-in" data-aos-duration="4000" className='about__Info-descr'>{lang === 'uz' ? service.descr_uz : service.descr_ru}</p>
                    {service.services.map(serv => (
                        <p data-aos="zoom-in" data-aos-duration="4000" key={serv.id} className='about__Info-service'>
                            <img src={Dot} alt=""/>{lang === 'uz' ? serv.title_uz : serv.title_ru}
                        </p>))}
                </div>
            </div>))}
        </section>
    </Container>)
}

export default Service