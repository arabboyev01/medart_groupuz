import React, {useState, useContext} from 'react'
import {LanguageContext} from "../../../context/langContext";
import './TopNavbar.scss'
import {useTranslation} from 'react-i18next';
import i18next from "i18next";
import {ReactComponent as Phone} from "../../../assets/icons/Phone.svg";
import {ReactComponent as Clock} from "../../../assets/icons/Time.svg";
import {ReactComponent as Geo} from "../../../assets/icons/Geo.svg";
import {ReactComponent as Insta} from "../../../assets/icons/instagram.svg";
import {ReactComponent as Face} from "../../../assets/icons/facebook.svg";
import TelegramIcon from '@mui/icons-material/Telegram';
import Container from "../Container/Container";


const social = [
    {id: 1, icon: <TelegramIcon style={{color: "white", fontSize: "20px", marginRight: "1px"}}/>, url: 'https://t.me/medartgroup_uz'},
    { id: 2, icon: <Insta/>, url: 'https://www.instagram.com/medartgroup_uz/'},
    {id: 3, icon: <Face/>, url: 'https://www.facebook.com/Medartgroupuz'}
];

function TopNavbar() {

    const {t} = useTranslation();

    const links = [{
        id: 1, icon: <Phone />, title: `${t("emergency")}`, url: 'tel:+998732440301', text: '+998 (73) 2440301'
    }, {id: 1, icon: <Clock/>, title: `${t('working')}`, url: null, text: `09:00 - 20:00 ${t('everyday')}`}, {
        id: 1, icon: <Geo />, title: `${t("location")}`, url: '/contact', text: 'Yuksalish ko’chasi 104, Fergana'
    }];
    const language = useContext(LanguageContext);
    const [languageButton, setLanguageButton] = useState(language === "uz" ? "ru" : "uz");

    const handleLanguage = function(){
        language === "uz" ? setLanguageButton("ru") : setLanguageButton("uz");
        languageButton === "ru" ? i18next.changeLanguage('ru') : i18next.changeLanguage('uz');
        window.location.reload();
    }


    return (
        <nav className='top__navbar'>
              <Container>
                  <div className='wrapper'>
                      <div className='links'>
                          {links.map(links => (<div key={links.id} className='link'>
                              {links.icon}
                              <a key={links.id} href={`${links.url}`} className='wrapper'>
                                  <p className='title'>{links.title}</p>
                                  <p className='info'>{links.text}</p>
                              </a>
                          </div>))}
                      </div>
                      <div className='socials'>
                          {social.map(soc => (
                              <a href={soc.url} key={soc.id} className='social' target="_blank">
                              {soc.icon}
                          </a>))}
                          <div className="language">
                              <div className="language__dropdown">
                                  <button className='lngBtn' onClick={handleLanguage}>{languageButton}</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </Container>
          </nav>)
}

export default TopNavbar
