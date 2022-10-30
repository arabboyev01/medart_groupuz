import React, {useContext} from 'react'
import './SectionHeader.scss'
import {LanguageContext} from "../../../context/langContext";

function SectionHeaders({data}) {
    const lang = useContext(LanguageContext);

    return (
        <header className='section__header'>
         <img src={data.header_image} alt="" className='section__header-image'/>
          <div className='section__header-titles'>
            <p className='section__name'>{lang === 'uz' ? data.header_title_uz : data.header_title_ru}</p>
            <p className='section__descr'>{lang === 'uz' ? data.header_description_uz : data.header_description_ru}</p>
          </div>
        </header>
    )
}

export default SectionHeaders;
