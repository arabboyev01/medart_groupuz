import React, {useContext} from 'react'
import {useGetDataQuery} from "../../redux";

import './Doctors.scss'

import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import Client from "./Clients/Client";
import Container from "../UsableComponents/Container/Container";
import DoctorCard from "../UsableComponents/Cards/DoctorCard/DoctorCard";
import Loader from "../UsableComponents/Loader/Loader";
import Faq from "../UsableComponents/FAQs/Faq";
import {LanguageContext} from "../../context/langContext";

function Doctors() {
    const lang = useContext(LanguageContext);
    const {data = [],isLoading,isError} = useGetDataQuery('doctors')
    if (isError) return <Loader/>
    if (isLoading) return <Loader/>

    return (
        <section className='docs'>
         {data.result.map(doc =>
            <>
                <SectionHeaders data={doc} section={'doctors'}/>
                <Container>
                    <div className='docs__wrapper'>
                        <>
                            {doc.doctor_infos.map(info => <DoctorCard data={info} lang={lang}/>)}
                        </>
                    </div>
                    <Client/>
                    <Faq data={doc.doctor_faqs} />
                </Container>
            </>
         )}
    </section>
    )
}

export default Doctors
