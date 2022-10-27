import React from 'react'

import './Programs.scss'

import Container from "../../UsableComponents/Container/Container";
import {useTranslation} from "react-i18next";


function Programs() {
    const {t} = useTranslation()

    const program = [
        {
            id: 1,
            title: `${t('aboutprogram1')}`
        },
        {
            id: 2,
            title: `${t('aboutprogram2')}`
        },
        {
            id: 3,
            title: `${t('aboutprogram3')}`
        }
    ];

    return (<div className='programs'>
        <Container>
            <div className='wrapper'>
                <h1 data-aos="zoom-in" data-aos-duration="4000" className='title'>{t('aboutprogramtitle')}</h1>
                <p data-aos="zoom-in" data-aos-duration="4000" className='descr'>{t('aboutprogramdescr')}</p>
                <div className='programwrap'>
                    {program.map(prog => (<div key={prog.id} className='program'>
                        <span data-aos="zoom-in" data-aos-duration="4000" className='intwrap'><p
                            className='int'>{prog.id}</p></span>
                        <p data-aos="zoom-in" data-aos-duration="4000" className='program__descr'>{prog.title}</p>
                    </div>))}
                </div>
                <p data-aos="zoom-in" data-aos-duration="4000" className='last__descr'>{t('aboutprogramlastdescr')}</p>
            </div>
        </Container>
    </div>)
}

export default Programs