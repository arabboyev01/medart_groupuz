import React from 'react'
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import Container from "../UsableComponents/Container/Container";
import './Operation.scss'
import {useGetSingleQuery} from "../../redux";
import {useParams} from "react-router-dom";
import ReactPlayer from 'react-player'
import DoctorCard from "../UsableComponents/Cards/DoctorCard/DoctorCard";
import Loader from "../UsableComponents/Loader/Loader";
import {useTranslation} from "react-i18next";


function Operation() {
    const {t} = useTranslation()
    const id = useParams()
    const {data = [], isLoading, isError} = useGetSingleQuery(`/operations/single/${id.id}`)
    if (isError) return <Loader/>
    if (isLoading) return <Loader/>
    const lang = localStorage.getItem('i18nextLng')

    return (<section className='operation__wrapper'>
        {data.data.map(operation => (<>
            <SectionHeaders data={operation}/>
            <Container>
                <div className='operation__wrapper-item'>
                    <div className='operation'>
                        <div className='operation__info'>
                            <h1 data-aos="zoom-in" data-aos-duration="4000"
                                className='operation__info-title'>{lang === 'uz' ? operation.title_uz : operation.title_ru}</h1>
                            <p data-aos="zoom-in" data-aos-duration="4000"
                               className='operation__info-descr'>{lang === 'uz' ? operation.detail_description_uz : operation.detail_description_ru}</p>
                        </div>
                        <img data-aos="zoom-in" data-aos-duration="4000" src={operation.detail_image[0].detail_image}
                             alt=""
                             className='operation__image'/>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="4000" className='operation__video'>
                        <ReactPlayer stopOnUnmount={false} pip={true} width={'100%'} height={'100%'} light={true}
                                     controls={true} playing
                                     url={operation.link_video}/>
                    </div>

                    <p data-aos="zoom-in" data-aos-duration="4000"
                       className='operation__actions'>{t('operationaction')}</p>
                    <p data-aos="zoom-in" data-aos-duration="4000"
                       className='operation__text'>{lang === 'uz' ? operation.full_description_uz : operation.full_description_ru}</p>
                    <div className='partical'>
                        <p className='partical__title'>{t('operationdoctors')}</p>
                        <div className="doctors__container">
                            <div className="doctors__wrapper">
                                {operation.attended_doctors.map(info => (<DoctorCard data={info}/>))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>))}
    </section>)
}

export default Operation