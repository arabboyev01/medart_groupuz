import React, {useEffect, useState} from 'react';
import './Appoinment.sidebar.scss'
import {useTranslation} from "react-i18next";
import {ReactComponent as Exit} from "../../../../assets/icons/ExitLight.svg";
import {usePostOrderMutation} from "../../../../redux";
import axios from "axios";

function AppoinmentSidebar({order, setOrder}) {
    const [postOrder, {isError}] = usePostOrderMutation()
    const [departments, setDepartments] = useState([])
    const [doctors, setDoctors] = useState([])

    const [openDepartment, setOpenDepartment] = useState(false)
    const [openDoctor, setOpenDoctor] = useState(false)
    const [departmentName, setDepartmentName] = useState('')
    const [doctorName, setDoctorName] = useState('')

    const [departmentId, setDepartmentId] = useState('')
    const [doctorId, setDoctorId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [date, setDate] = useState('')

    const {t} = useTranslation();

    useEffect(() => {
        axios.get('https://mamuriyat.medartgroup.uz/api/doctors')
            .then((res) => {
                setDoctors(res.data.result[0].doctor_infos)
            })
        axios.get('https://mamuriyat.medartgroup.uz/api/our-service')
            .then((res) => {
                setDepartments(res.data.result[0].our_service_departments)
            })
    }, [])

    const SendOrder = async (e) => {
        e.preventDefault();
        if (departmentId && doctorId && name && email && number && date) {
            await postOrder({
                our_service_department_id: departmentId,
                doctor_info_id: doctorId,
                full_name: name,
                email: email,
                phone_number: number,
                date: date
            }).unwrap();
        }
    }

    return (<div className='appoinment__container'>
        <div className='appoinment__container-wrapper'>
            <div onClick={e => setOrder(false)} style={{width: order === true ? '55%' : '0'}}
                 className='appoinment__container-wrapper not-worked'>
            </div>
            <div style={{width: order === true ? '45%' : '0', display: order === true ? 'flex' : "none"}}
                 className='appoinment__container-wrapper worked'>
                <div className='worked__exit' onClick={e => setOrder(false)}><Exit/></div>
                <div className='worked__text'>
                    <h1 className='worked__text-title'>
                        {t('appoinment_title')}
                    </h1>
                    <p className='worked__text-descr'>
                        {t('appoinment_descr')}
                    </p>
                </div>
                <form className='worked__inputs'>
                    <div className='department'>
                        <input onClick={() => setOpenDepartment(true)}
                               style={{borderRadius: openDepartment === true ? '10px 10px 0 0' : '10px'}}
                               className='worked__inputs-select' type="text"
                               value={departmentName}/>
                        <div className='content' style={{display: openDepartment === true ? 'block' : "none"}}>
                            <ul className='content__list'>
                                {departments.map(department => (
                                    <li id={department.department_id} onClick={e => {
                                        setDepartmentName(e.target.innerHTML);
                                        setDepartmentId(e.target.id);
                                        setOpenDepartment(false)
                                    }} value={department.name_ru}
                                        className='content__list-item'>{department.name_ru}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='doctor'>
                        <input onClick={() => setOpenDoctor(true)}
                               style={{borderRadius: openDoctor === true ? '10px 10px 0 0' : '10px'}}
                               className='worked__inputs-select' type="text"
                               value={doctorName}/>
                        <div className='content' style={{display: openDoctor === true ? 'block' : "none"}}>
                            <ul className='content__list'>
                                {doctors.map(doctor => (
                                    <li id={doctor.doctor_id} onClick={e => {
                                        setDoctorName(e.target.innerHTML);
                                        setDoctorId(e.target.id);
                                        setOpenDoctor(false)
                                    }} className='content__list-item'>{doctor.full_name_ru}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <input className='worked__inputs-input' type="text" placeholder={'Enter your Name'}
                           onChange={(e) => setName(e.target.value)}/>
                    <input className='worked__inputs-input' type="email" placeholder={'Enter your Email'}
                           onChange={(e) => setEmail(e.target.value)}/>
                    <input className='worked__inputs-input' type="tel" placeholder={'Enter your Number'}
                           onChange={(e) => setNumber(e.target.value)}/>
                    <input className='worked__inputs-input' type="date" onChange={(e) => setDate(e.target.value)}/>
                    <input className='worked__inputs-btn' type="submit" value={t('appoinment_submit')} onClick={(e) => {
                        setOrder(false);
                        SendOrder(e);
                    }}/>
                </form>
            </div>
        </div>
    </div>);
}

export default AppoinmentSidebar;