import React, {useTransition} from 'react'
import {useGetDataQuery} from "../../redux";

import './About.scss'
import photo2 from "../../assets/images/sign 1.svg";
import photo3 from '../../assets/images/founder.png'

import Faq from "../UsableComponents/FAQs/Faq";
import Service from "./Service/Service";
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import Founder from "./Founder/Founder";
import Programs from "./Programs/Programs";
import Question from "./Questions/Question";
import Loader from "../UsableComponents/Loader/Loader";
import {useTranslation} from "react-i18next";


function About() {
    const {t} = useTranslation()
    const {data = [], isLoading, isError} = useGetDataQuery('about-us')
    const founder = {
        id: 1,
        card_image: photo3,
        full_name_uz: `${t('abouttitle')}`,
        full_name_ru: `${t('abouttitle')}`,
        subtitle_uz: `${t('aboutsubtitle')}`,
        subtitle_ru: `${t('aboutsubtitle')}`,
        biography_uz: `${t('aboutdescr')}`,
        biography_ru: `${t('aboutdescr')}`,
        sing: photo2,
        specification_uz: `${t('aboutfounder')}`,
        specification_ru: `${t('aboutfounder')}`,
    }

    if (isError) return <Loader/>
    if (isLoading) return <Loader/>

    return (<section className='aboutMain'>
        {data.result.map(about => (<div key={about.id}>
            <SectionHeaders data={about}/>
            <div className='wrapper'>
                <Founder data={founder}/>
                <Service/>
                <Programs/>
                <Question data={about}/>
                <Faq data={about.aboutus_faqs} />
            </div>
        </div>))}
    </section>)
}

export default About
