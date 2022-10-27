import React from 'react'
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

import './About.scss'
import {ReactComponent as Arrow} from "../../../assets/icons/WhiteArrow.svg";

import Container from "../../UsableComponents/Container/Container";
import Title from "../../UsableComponents/Title/Title";

function About() {
    const {t} = useTranslation();

    return (
          <section className='about'>
              <Container>
                  <Title children={t('about')} txt={'white'} color={'rgba(255, 255, 255, 0.1)'} url={null}/>
                  <div className='info'>
                      <p data-aos="zoom-out" data-aos-duration="1000" className='info__title'>{t('abouthometitle')}</p>
                      <p data-aos="zoom-out" data-aos-duration="1000" className='info__descr'>{t('abouthomedescr')}</p>
                      <NavLink data-aos="zoom-out" data-aos-duration="1000" className='link' to={'/about'}><span>{t('urltext')}</span> <Arrow p={'white'}/> </NavLink>
                  </div>
              </Container>
          </section>
    )
}

export default About