import React from 'react'
import Photo from "../../assets/images/serviceImg.png";
import SectionHeader from "../UsableComponents/SectionHeaders/SectionHeader";
import Container from "../UsableComponents/Container/Container";
import './Service.scss'
import { ReactComponent as Clock } from "../../assets/icons/LightTime.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import { useGetSingleQuery } from "../../redux";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "../UsableComponents/Loader/Loader";
import Services from '../Home/Service/Service.jsx'

function Service() {
    const id = useParams()
    const { t } = useTranslation()
    const lang = localStorage.getItem('i18nextLng')

    const { data = [], isLoading, isError } = useGetSingleQuery(`/our-service/single/${id.id}`)

    const service = {
        id: 1,
        title: `${t('serviceservicetitle')}`,
        descr: `${t('serviceservicedescr')}`,
        lastdescr: `${t('serviceservicelastdescr')}`,
        opening: [{
            id: 1,
            title: `${t('serviceopeningtitle')}`,
            days: [{ id: 1, days: `${t('serviceopeningdays1')}`, time: '08:00 - 21:00' }, {
                id: 2,
                days: `${t('serviceopeningdays2')}`,
                time: '08:00 - 19:00'
            }],
            descr: `${t('serviceopeningdescr')}`,
        }],
        emergency: [{
            id: 1,
            title: `${t('serviceemergencytitle')}`,
            descr: `${t('serviceemergencydescr')}`,
            text: `${t('serviceemergencycall')}`,
            url: 'tel:+12345345533'
        }],
    }

    if (isError) return <Loader />
    if (isLoading) return <Loader />

    const ali = [{
        id: 1,
        header_title_uz: `${data.data[0].name_uz}`,
        header_title_ru: `${data.data[0].name_ru}`,
        header_description_uz: null,
        header_description_ru: null,
        header_image: Photo
    }]

    return (<section className='service__single'>
        {ali.map(serv => (<SectionHeader data={serv} />))}
        <Container>
            <div className='service__single-wrapper'>
                <div key={data.data[0].department_id} className='service__single-info'>
                    <h1 className='service__title'>{lang === 'uz' ? data.data[0].name_uz : data.data[0].name_ru}</h1>
                    <p className='service__descr'>{lang === 'uz' ? data.data[0].description_uz : data.data[0].description_ru}</p>
                    <hr className='divider' />
                    <p className='service__descr'>{lang === 'uz' ? data.data[0].full_description_uz : data.data[0].full_description_ru}</p>
                </div>
                <div className='opening'>
                    <p className='opening__title'><span><Clock /></span>{service.opening[0].title}</p>
                    <div className='opening__days'>
                        {service.opening[0].days.map(day => (<div className='opening__times'>
                            <p className='opening__times-days'>{day.days}</p>
                            <p className='opening__times-time'>{day.time}</p>
                        </div>))}
                    </div>
                    <p className='opening__descr'>{service.opening[0].descr}</p>

                    <div className='opening-hours mt-5'>
                        <p className='opening__title'><span><User /></span>{service.emergency[0].title}</p>
                        <p className='opening__descr emer__descr'>{service.emergency[0].descr}</p>
                        <a href={service.emergency[0].url}><p className='emer__text'>{service.emergency[0].text}</p></a>
                    </div>
                </div>
            </div>
            <Services limit={3} />
        </Container>
    </section>)
}

export default Service