import React from 'react'
import {useGetDataQuery} from "../../redux";

import './Doctors.scss'

import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";
import Client from "./Clients/Client";
import Container from "../UsableComponents/Container/Container";
import DoctorCard from "../UsableComponents/Cards/DoctorCard/DoctorCard";
import Loader from "../UsableComponents/Loader/Loader";
import Faq from "../UsableComponents/FAQs/Faq";

function Doctors() {
    const {data = [],isLoading,isError} = useGetDataQuery('doctors')
    if (isError) return <Loader/>
    if (isLoading) return <Loader/>

    return (<section className='docs'>
        {data.result.map(doc => (
            <>
                <SectionHeaders data={doc} section={'doctors'}/>
                <Container>
                    <div className='docs__wrapper'>
                        <>
                            {doc.doctor_infos.map(info => (<DoctorCard data={info}/>))}
                        </>
                    </div>
                    <Client/>
                    <Faq data={doc.doctor_faqs} />
                </Container>
            </>
        ))}
    </section>)
}

export default Doctors