import React from 'react'
import {NavLink} from "react-router-dom";
import {ReactComponent as Arrow} from "../../../assets/icons/BlueArrow.svg";
import './Title.scss'
import {useTranslation} from "react-i18next";

function Title({children, url, color,txt}) {
    const { t } = useTranslation();

    return (
        <div data-aos="fade-up" data-aos-duration="1500" className='titles'>
            <div className='title'>
                <p className='title__first' style={{color:!!txt ? txt : '#3585F9FF'}}>{children}</p>
                <p className='title__second'
                   style={{color: !!color ? color : 'rgba(0, 0, 0, 0.1)'}}>{children}</p>
            </div>
            {url !== null ? <NavLink className='link' to={url}>
                <span>{t('all')} {children}</span>
                <Arrow/>
            </NavLink> : ''}
        </div>)
}

export default Title