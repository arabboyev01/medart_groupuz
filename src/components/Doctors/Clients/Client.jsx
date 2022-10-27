import React from 'react'
import CountUp from "react-countup";

import './Client.scss'
import {useTranslation} from "react-i18next";


function Client() {
    const {t} = useTranslation()
    const data = [{
        id: 1,
        title: `${t('clienttitle')}`,
        subtitle: `${t('clientsubtitle')}`,
        descr: `${t('clientdescr')}`,
        doctors: 200,
        patients: 29000,
        beds: 1000,
        awards: 150
    }]
    return (<section data-aos="zoom-in" data-aos-duration="4000" key={data[0].id} className='client'>
        <h1 className='client__title'>{data[0].title}</h1>
        <p className='client__subtitle'>{data[0].subtitle}</p>
        <p className='client__descr'>{data[0].descr}</p>
        <hr/>
        <div className='client__counts'>
            <p className='client__counts-count'>
                <span>
                <CountUp start={200 - 50} end={200} duration={3}/>
                </span>
                {t('doctors')}
            </p>
            <p className='client__counts-count'>
                <span><CountUp start={29000 - 50} end={29000} duration={3}/>+</span>
                {t('happypatients')}
            </p>
            <p className='client__counts-count'>
                <span>
                <CountUp start={1000 - 50} end={1000} duration={3}/>
                </span>
                {t('beds')}
            </p>
            <p className='client__counts-count'>
                <span>
                <CountUp start={150 - 50} end={150} duration={3}/>
                </span>
                {t('awards')}
            </p>
        </div>
    </section>)
}

export default Client