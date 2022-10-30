import React from "react";
import { useTranslation } from "react-i18next";
import "./footer2.scss";
import SvgMedArt from "../../../assets/icons/Logo.svg";
import Svgfacebook, {ReactComponent as Face} from "../../../assets/icons/facebook.svg";
import SvgInsta, {ReactComponent as Insta} from "../../../assets/icons/instagram.svg";
import Container from "../Container/Container";
import TelegramIcon from "@mui/icons-material/Telegram";
import {Link} from "react-router-dom"
const Footer2 = () => {
  const { t } = useTranslation();

  const selectFooter = [
    { id: 1, title: `${t("home")}`, link: "/" },
    { id: 2, title: `${t("doctors")}`, link: "/doctors" },
    { id: 3, title: `${t("services")}`, link: "/services" },
    { id: 4, title: `${t("aboutUs")}`, link: "/about" },
  ];

  const informationFooter = [
    {
      id: 1,
      title: `${t("call")}:`,
      url: "+998 (73) 2440301",
      type: "tel:+998732440301",
    },
    {
      id: 2,
      title: `${t("email")}:`,
      url: "medartgroupuz@gmail.com",
      type: "mailto:medartgroupuz@gmail.com",
    },
    { id: 3, title: `${t("addres")}:`, url: "Yuksalish ko’chasi 104, Fergana, Uzbekistan" },
  ];

  const social = [
    {id: 1, icon: <TelegramIcon style={{color: "white", fontSize: "20px", marginRight: "1px"}}/>, url: 'https://t.me/medartgroup_uz'},
    { id: 2, icon: <Insta/>, url: 'https://www.instagram.com/medartgroup_uz/'},
    {id: 3, icon: <Face/>, url: 'https://www.facebook.com/Medartgroupuz'}
  ];

  return (
    <Container>
      <div className="MainMedDiv">
        <div className="bigBox">
          <div className="Box1">
            <img src={SvgMedArt} className="logoMedArt" />
            <p className="titleMedArt">{t("footertext")}</p>
          </div>
          <div className="Box2">
            <p className="importantTitle">{t("importantPage")}</p>
            <ul className="titleUl">
              {selectFooter.map((type) =>
                  <Link to={type.link}>
                   <li key={type.id} className="selectMed">
                     {type.title}
                   </li>
                  </Link>
              )}
            </ul>
          </div>
          <div className="Box3">
            <p className="contactTitle">{t("contacts")}</p>

            {informationFooter.map((type) =>
              <p key={type.id} className="infoMed">
                {type.title}{" "}
                <a className="typeUrl" href={type.type}>
                  {type.url}
                </a>
              </p>
            )}
          </div>
          <div className="topFooter">
            <p className="titleBy">
              © 2022 Medart-group all Rights Reserved by IT_LEAD Developers
              Company
            </p>
            <div className="linksMed">
              {social.map(soc =>
                  <a href={soc.url} key={soc.id} className='icon__wrapper' target="_blank">
                    {soc.icon}
                  </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer2;
