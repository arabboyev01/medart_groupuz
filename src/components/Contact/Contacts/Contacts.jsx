import React from "react";
import "./Contacts.scss";
import Mail from "../../../assets/icons/mail.svg";
import Phone from "../../../assets/icons/PhoneBlack.svg";
import Geo from "../../../assets/icons/Map.svg";
import { useTranslation } from "react-i18next";
import { YMaps, Map, Placemark } from "react-yandex-maps";
function Contacts() {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      icon: Phone,
      title: `${t("contacttitle1")}`,
      descr: `${t("contactdescr1")}`,
      url: "tel:+998732440203",
      text: "+998 (73) 244 0203",
    },
    {
      id: 2,
      icon: Mail,
      title: `${t("contacttitle2")}`,
      descr: `${t("contactdescr2")}`,
      url: "mailto:medartgroupuz@gmail.com",
      text: "medartgroupuz@gmail.com",
    },
    {
      id: 3,
      icon: Geo,
      title: `${t("contacttitle3")}`,
      descr: `${t("contactdescr3")}`,
      url: "https://yandex.com/maps/10336/phergana/house/Y0gYcQ5jS0EGQFpqfX95dXlgYg==/?ll=71.793241%2C40.384536&z=17",
      text: "Yuksalish ko’chasi 104, Fergana, Uzbekistan",
    },
  ];
  return (
    <section className="contacts">
      <div className="contacts__map">
        <YMaps>
          <div>
            <Map
              width="100%"
              height="500px"
              state={{
                center: [40.377543, 71.801661],
                zoom: 16,
              }}
              
            >
              <Placemark geometry={[40.377543, 71.801661]} />
            </Map>
          </div>
        </YMaps>
      </div>
      <div className="contacts__info">
        {data.map((info) => (
          <div key={info.id} className="info">
            <img
              data-aos="zoom-in"
              data-aos-duration="4000"
              src={info.icon}
              alt=""
              className="info__icon"
            />
            <p
              data-aos="zoom-in"
              data-aos-duration="4000"
              className="infp__type"
            >
              {info.title}
            </p>
            {/* <p data-aos="zoom-in" data-aos-duration="4000" className='info__descr'>{info.descr}</p> */}
            <a
              data-aos="zoom-in"
              data-aos-duration="4000"
              href={info.url}
              className="info__url"
            >
              {info.text}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contacts;
