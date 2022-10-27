import React from 'react'
import './Carousel.scss'
import Photo1 from '../../../assets/images/home.png'
import Photo2 from '../../../assets/images/aboutImg.png'
import Photo3 from '../../../assets/images/blogHeader.png'
import Photo4 from '../../../assets/images/newsHeader.png'
import LearnMoreBtn from "../../UsableComponents/Buttons/LearnMore/LearnMore.btn";
import Container from "../../UsableComponents/Container/Container";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";

function Carousel1() {

    const {t} = useTranslation();

    return (<header className='header'>
        <Carousel animationHandler={"fade"} swipeable={true} showArrows={false} showStatus={false} showThumbs={false}
                  autoPlay
                  infiniteLoop={true}>
            <div className='carousel'>
                <div style={{width:'100vw',background: `url(${Photo1}) top center/cover no-repeat`}}>
                    <Container>
                        <div className='main'>
                            <p className='subtitle'>{t("care1")}</p>
                            <p className='title'>{t('carouseltitle1')}<br/> {t('carouseldescr1')}</p>
                            <div className='wrapper'>
                                <LearnMoreBtn url={'/service'} children={t('service')}/>
                                <hr/>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <div className='carousel'>
                <div style={{width:'100vw',background: `url(${Photo2}) top center/cover no-repeat`}}><Container>
                    <div className='main'>
                        <p className='subtitle'>{t("care1")}</p>
                        <p className='title'>{t('carouseltitle1')}<br/> {t('carouseldescr1')}</p>
                        <div className='wrapper'>
                            <LearnMoreBtn url={'/service'} children={t('service')}/>
                            <hr/>
                        </div>
                    </div>
                </Container></div>
            </div>
            <div className='carousel'>
                <div style={{width:'100vw',background: `url(${Photo3}) top center/cover no-repeat`}}><Container>
                    <div className='main'>
                        <p className='subtitle'>{t("care1")}</p>
                        <p className='title'>{t('carouseltitle1')}<br/> {t('carouseldescr1')}</p>
                        <div className='wrapper'>
                            <LearnMoreBtn url={'/service'} children={t('service')}/>
                            <hr/>
                        </div>
                    </div>
                </Container></div>
            </div>
            <div className='carousel'>
                <div style={{width:'100vw',background: `url(${Photo4}) top center/cover no-repeat`}}><Container>
                    <div className='main'>
                        <p className='subtitle'>{t("care1")}</p>
                        <p className='title'>{t('carouseltitle1')}<br/> {t('carouseldescr1')}</p>
                        <div className='wrapper'>
                            <LearnMoreBtn url={'/service'} children={t('service')}/>
                            <hr/>
                        </div>
                    </div>
                </Container></div>
            </div>
        </Carousel>
    </header>)
}

export default Carousel1