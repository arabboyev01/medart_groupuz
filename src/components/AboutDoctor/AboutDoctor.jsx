import React from 'react'
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import Photo from "../../assets/images/docsHeader.png";
import Container from "../UsableComponents/Container/Container";
import Founder from "../About/Founder/Founder";
import './AboutDoctor.scss'
import {NavLink, useParams} from "react-router-dom";
import {useGetSingleQuery} from "../../redux";
import Loader from "../UsableComponents/Loader/Loader";
import {useTranslation} from "react-i18next";

function AboutDoctor() {
    const id = useParams()
    const {data = [], isLoading, isError} = useGetSingleQuery(`/doctors/single/${id.id}`)
    const {t} = useTranslation()
    const lang = localStorage.getItem('i18nextLng')

    if (isError) return <Loader/>
    if (isLoading) return <Loader/>
    const ali = [{
        id: 1,
        header_title_uz: `${data.data[0].full_name_uz}`,
        header_title_ru: `${data.data[0].full_name_ru}`,
        header_description_uz: null,
        header_description_ru: null,
        header_image: Photo,
    }]

    return (<section className='about__single'>
        {ali.map(serv => (<SectionHeaders data={serv}/>))}
        <Container>
            {data.data.map(doctor => (<>
                <Founder data={doctor}/>
                <div className='about__single-bio'>
                    <h1 data-aos="zoom-in" data-aos-duration="4000" className='title'>{t('aboutdoctorbio')}</h1>
                    <p data-aos="zoom-in" data-aos-duration="4000"
                       className='descr'>{lang === 'uz' ? doctor.biography_uz : doctor.biography_ru}</p>
                    <div className='infos'>
                        <div className='infos__edu'>
                            <p data-aos="zoom-in" data-aos-duration="4000"
                               className='infos__edu-title' style={{display:doctor.gethered_awards.length === 0 ? 'none' : "block" }}>{t('aboutdoctoredu')}</p>
                            {doctor.gethered_awards.map(award => (
                                <p data-aos="zoom-in" data-aos-duration="4000"
                                   className='award'>
                                    <p className='award__award'>{award.title}<a style={{color:'#3585F9FF',textDecoration:'underline'}} href={award.image} target={"_blank"}>Link</a></p>
                                    <hr className='divider'/>
                                </p>))}
                        </div>
                        <div className='infos__award'>
                            <p data-aos="zoom-in" data-aos-duration="4000"
                               className='infos__award-title' style={{display:doctor.gethered_awards.length === 0 ? 'none' : "block" }}>{t('aboutdoctoraward')}</p>
                            {doctor.gethered_awards.map(award => (
                                <p data-aos="zoom-in" data-aos-duration="4000"
                                   className='award'>
                                    <p className='award__award'>{award.title}<a style={{color:'#3585F9FF',textDecoration:'underline'}} href={award.image} target={"_blank"}>Link</a></p>
                                    <hr className='divider'/>
                                </p>))}
                        </div>
                    </div>
                </div>
                <div className='about__single-operations'>
                    <h1 data-aos="zoom-in" data-aos-duration="4000"
                        className='title'>{t('aboutdoctoroperation')}</h1>
                    {doctor.attended_operations.map(operat => (
                        <NavLink to={`/operation/${operat.operation_id}`} className='operation__item'>
                            <img data-aos="zoom-in" data-aos-duration="4000"
                                 src={operat.detail_image[0].detail_image} alt=""
                                 className='operation__item-image'/>
                            <div className='operation__item-info'>
                                <p data-aos="zoom-in" data-aos-duration="4000"
                                   className='operation__date'>{operat.date}</p>
                                <p data-aos="zoom-in" data-aos-duration="4000"
                                   className='operation__title'>{lang === 'uz' ? operat.title_uz : operat.title_ru}</p>
                                <p data-aos="zoom-in" data-aos-duration="4000"
                                   className='operation__descr'>{lang === 'uz' ? operat.detail_description_uz : operat.detail_description_ru}</p>
                                <p data-aos="zoom-in" data-aos-duration="4000"
                                   className='operation__descr'>{lang === 'uz' ? operat.full_description_uz : operat.full_description_ru}</p>
                            </div>
                        </NavLink>))}
                </div>
            </>))}
        </Container>
    </section>)
}

export default AboutDoctor