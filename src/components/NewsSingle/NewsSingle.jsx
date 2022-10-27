import React from 'react'
import photo from "../../assets/images/newsHeader.png";
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import Container from "../UsableComponents/Container/Container";
import './NewsSingle.scss'
import {ReactComponent as String} from "../../assets/icons/String.svg";
import {useTranslation} from "react-i18next";
import {useGetSingleQuery} from "../../redux";
import {useParams} from "react-router-dom";
import Loader from "../UsableComponents/Loader/Loader";

function NewsSingle() {
    const {t} = useTranslation()
    const id = useParams()
    const lang = localStorage.getItem('i18nextLng')

    const {data = [], isLoading, isError} = useGetSingleQuery(`/news/single/${id.id}`)
    const ali = {
        id: 1,
        header_title_uz: `${t('news')}`,
        header_title_ru: `${t('news')}`,
        header_description_uz: null,
        header_description_ru: null,
        header_image: photo,
    }

    if (isLoading) return <Loader/>
    if (isError) return <Loader/>

    return (<section className='news__single'>
        <SectionHeaders data={ali}/>
        <Container>
            <div className='news__single-item' key={data.data[0].news_id}>
                <div className='newstop'>
                    <h1 className='newstop__title'>{lang === 'uz' ? data.data[0].title_uz : data.data[0].title_ru}</h1>
                    <p className='newstop__descr'>{lang === 'uz' ? data.data[0].full_description_uz : data.data[0].full_description_ru}</p>
                    <p className='newstop__descr'>{lang === 'uz' ? data.data[0].description_1_uz : data.data[0].description_1_ru}</p>
                </div>
                <div className='newsbottom'>
                    <String/>
                    <p className='newsbottom__text'>
                        {lang === 'uz' ? data.data[0].description_2_uz : data.data[0].description_2_ru}
                    </p>
                </div>
            </div>
        </Container>
    </section>)
}

export default NewsSingle