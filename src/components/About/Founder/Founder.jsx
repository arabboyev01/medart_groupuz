import React from 'react'

import './Founder.scss'
import Container from "../../UsableComponents/Container/Container";

function Founder({data}) {
    const lang = localStorage.getItem('i18nextLng')

    return (<Container>
        <div key={data.doctor_id} className='absolute'>
            <img data-aos="zoom-in" data-aos-duration="4000" src={data.card_image} alt="" className='absolute__image'/>
            <div className='absolute__infos'>
                <p data-aos="zoom-in" data-aos-duration="4000"
                   className='absolute__infos-title'>{lang === 'uz' ? data.full_name_uz : data.full_name_ru}</p>
                <p data-aos="zoom-in" data-aos-duration="4000"
                   className='absolute__infos-subtitle'>{lang === 'uz' ? data.subtitle_uz : data.subtitle_ru}</p>
                <p data-aos="zoom-in" data-aos-duration="4000"
                   className='absolute__infos-descr'>{lang === 'uz' ? data.biography_uz : data.biography_ru}</p>
                <img data-aos="zoom-in" data-aos-duration="4000" src={data.sing} alt=""
                     className='absolute__infos-sing'/>
                <p data-aos="zoom-in" data-aos-duration="4000"
                   className='absolute__infos-author'>{lang === 'uz' ? data.specification_uz : data.specification_ru}</p>
            </div>
        </div>
    </Container>)
}

export default Founder