import React, {useState} from "react";
import {useGetDataQuery} from "../../../redux";
import {useTranslation} from "react-i18next";

import "./Doctors.scss";

import Container from "../../UsableComponents/Container/Container";
import Title from "../../UsableComponents/Title/Title";
import DoctorCard from "../../UsableComponents/Cards/DoctorCard/DoctorCard";
import Loader from "../../UsableComponents/Loader/Loader";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination, Navigation} from "swiper";

function Doctors() {
    const [setSwiperRef] = useState(null);

    const {t} = useTranslation();
    const {data = [], isError, isLoading} = useGetDataQuery("doctors");
    if (isError) return <Loader/>;
    if (isLoading) return <Loader/>;
    return (
        <section className="doctors">
            <Container>
                <Title children={t("doctors")} url={"/doctors"}/>
            </Container>
            <Swiper
                className="mySwiper"
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={false}
                pagination={{
                    type: "fraction",
                }}
                breakpoints={{
                    1185: {
                        spaceBetween: 5,
                        slidesPerView: 2,
                    },
                    1025: {
                        spaceBetween: 5,
                        slidesPerView: 1,
                    },
                    310: {
                        spaceBetween: 5,

                        slidesPerView: 1,
                    },
                }}
                allowSlideNext={true}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                {data.result.map((docs) => (
                    <>
                        {docs.doctor_infos.map((doctor) => (
                            <SwiperSlide
                                className="sliderSwaper"
                                style={{
                                    backgroundImage: `url(${docs.img})`,
                                }}
                            >
                                <DoctorCard data={doctor}/>
                            </SwiperSlide>
                        ))}
                    </>
                ))}
            </Swiper>
        </section>
    );
}

export default Doctors;