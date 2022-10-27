import React from 'react'
import './SectionHeader.scss'

function SectionHeaders({data}) {
    const lang = localStorage.getItem('i18nextLng')

    return (<header className='section__header'>
        <img src={data.header_image} alt="" className='section__header-image'/>
        <div className='section__header-titles'>
            <p className='section__name'>{lang === 'uz' ? data.header_title_uz : data.header_title_ru}</p>
            <p className='section__descr'>{lang === 'uz' ? data.header_description_uz : data.header_description_ru}</p>
        </div>
    </header>)
}

export default SectionHeaders