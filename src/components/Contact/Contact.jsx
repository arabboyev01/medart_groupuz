import React from 'react'
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";

import photo from '../../assets/images/blogHeader.png'
import Container from "../UsableComponents/Container/Container";
import Contacts from "./Contacts/Contacts";
import {useTranslation} from "react-i18next";


function Contact() {
    const {t} = useTranslation()
    const data = [{
        id: 1,
        header_title_uz: `${t('contact')}`,
        header_title_ru: `${t('contact')}`,
        header_description_uz: `${t('contact_description')}`,
        header_description_ru: `${t('contact_description')}`,
        header_image: photo
    }]
    return (
        <>
            {data.map(type => (<SectionHeaders section={'news'} data={type}/>))}
            <Container>
                <Contacts/>
            </Container>
        </>
    )
}

export default Contact