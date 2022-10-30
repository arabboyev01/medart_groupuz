import React, {useContext} from 'react'
import {NavLink} from "react-router-dom";
import './DoctorCard.scss'
import {LanguageContext} from "../../../../context/langContext";

function DoctorCard({data}) {
    const input_ru = data.full_name_ru
    const [name_ru, surname_ru, lastname_ru] = input_ru.split(' ');

    const input_uz = data.full_name_uz
    const [name_uz, surname_uz, lastname_uz] = input_uz.split(' ');

    const lang = useContext(LanguageContext);

    return (
        <NavLink to={`/doctors/${data.doctor_id}`} key={data.doctor_id} className='doctor__card'>
            <img src={data.image} alt="" className='image'/>
            <div data-aos="zoom-in" data-aos-duration="4000" className='fullname'><span>{lang === 'uz' ? name_uz : name_ru}</span>
            <br/>{lang === 'uz' ? surname_uz : surname_ru} <br/> {lang === 'uz' ? lastname_uz : lastname_ru}</div>
        </NavLink>
    )
}

export default DoctorCard;
