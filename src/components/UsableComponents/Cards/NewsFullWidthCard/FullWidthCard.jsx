import React, {useContext} from 'react';
import {LanguageContext} from "../../../../context/langContext";import "./FullWidth.scss";
import { NavLink } from "react-router-dom";

function FullWidth({ data }) {
  // const lang = localStorage.getItem("i18nextLng");

  const lang = useContext(LanguageContext);

  return (
    <NavLink to={`/news/${data.news_id}`}>
      <div className="fullwidth">
        <div className="fullwidth__head" style={{ backgroundImage: `url(${data.image})` }}
        >
        </div>
        <div className="fullwidth__body">
          <p className="fullwidth__body-maintitle">
            {lang === "uz" ? data.title_uz : data.title_ru}
          </p>
          <p className="fullwidth__body-title">
            {lang === "uz"
              ? data.full_description_uz
              : data.full_description_ru}
          </p>
        </div>
      </div>
    </NavLink>
  );
}

export default FullWidth;
