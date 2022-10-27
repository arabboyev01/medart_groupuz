import React from 'react'
import './BlogCard.scss'
import ReadMore from "../../Buttons/ReadMore/ReadMore.btn";
import {useTranslation} from "react-i18next";

function BlogCard({data}) {
    const {t} = useTranslation()
    const lang = localStorage.getItem('i18nextLng')

    return (
        <div key={data.blog_id} className='blogcard'>
            <img data-aos="zoom-in" data-aos-duration="4000" src={data.image} alt="" className='image'/>
            <div className='body'>
                <p data-aos="zoom-in" data-aos-duration="4000"
                   className='title'>{lang === 'uz' ? data.title_1_uz : data.title_1_ru}</p>
                <p data-aos="zoom-in" data-aos-duration="4000"
                   className='descr'>{lang === 'uz' ? data.description_1_uz : data.description_1_ru}</p>
                <ReadMore children={t('urltext')} url={`/blog/${data.blog_id}`}/>
            </div>
        </div>
    )
}

export default BlogCard