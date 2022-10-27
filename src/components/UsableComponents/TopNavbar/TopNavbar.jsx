import React, {useState} from 'react'
import './TopNavbar.scss'
import {useTranslation} from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import i18next from "i18next";
import {ReactComponent as Phone} from "../../../assets/icons/Phone.svg";
import {ReactComponent as Clock} from "../../../assets/icons/Time.svg";
import {ReactComponent as Geo} from "../../../assets/icons/Geo.svg";

import {ReactComponent as In} from "../../../assets/icons/linkedin.svg";
import {ReactComponent as Insta} from "../../../assets/icons/instagram.svg";
import {ReactComponent as Face} from "../../../assets/icons/facebook.svg";
import Container from "../Container/Container";


const social = [{id: 1, icon: <In/>, url: 'http://google.com'}, {
    id: 2, icon: <Insta/>, url: 'http://google.com'
}, {id: 3, icon: <Face/>, url: 'http://google.com'}];

function TopNavbar() {
    const [open,setOpen] = useState(false);

    const {t} = useTranslation();

    const links = [{
        id: 1, icon: <Phone />, title: `${t("emergency")}`, url: 'tel:+998732440301', text: '+998 (73) 2440301'
    }, {id: 1, icon: <Clock/>, title: `${t('working')}`, url: null, text: `09:00 - 20:00 ${t('everyday')}`}, {
        id: 1, icon: <Geo />, title: `${t("location")}`, url: '/contact', text: 'Yuksalish ko’chasi 104, Fergana'
    }];
    const language = [{
        code: "uz", name: "UZ", country: "uz",
    }, {
        code: "ru", name: "RU", country: "ru",
    }];


    return (<nav className='top__navbar'>
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
                          {social.map(soc => (<a href={soc.url} key={soc.id} className='social'>
                              {soc.icon}
                          </a>))}
                          <div className="language">
                              <div className="language__dropdown">
                                  <span onClick={() => setOpen(open === true ? false : true)}>{!open ? <button className='lngBtn' onClick={() => {
                                      i18next.changeLanguage('uz');
                                      setOpen(false)
                                  }}>UZ</button> : <button className='lngBtn' onClick={() => {
                                      i18next.changeLanguage('ru');
                                      setOpen(false)
                                  }}>RU</button>}</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </Container>
          </nav>)
}

export default TopNavbar