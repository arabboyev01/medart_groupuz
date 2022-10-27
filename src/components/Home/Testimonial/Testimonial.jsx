import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation, Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Testimonial.scss";
import Container from "../../UsableComponents/Container/Container";
import Title from "../../UsableComponents/Title/Title";
import {ReactComponent as Tilda} from "../../../assets/icons/Tilda.svg";
import {useTranslation} from "react-i18next";

const data = [
    {
        id: 1,
        title:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
        author: "John Doe",
    },
    {
        id: 2,
        title:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
        author: "John Doe",
    },
    {
        id: 3,
        title:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
        author: "John Doe",
    },
    {
        id: 4,
        title:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
        author: "John Doe",
    },
    {
        id: 5,
        title:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.",
        author: "John Doe",
    },
];

function Testimonial() {
    const {t} = useTranslation()
    return (
          <section className="testimonial">
              <Container>
                  <Title
                        className="testimonialTitle"
                        children={t('testimonial')}
                        url={null}
                  />
                  <div className="slider">
                      <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            style={{
                                "--swiper-navigation-color": "#0093FF",
                                "--swiper-pagination-color": "#0093FF",
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation, Autoplay]}
                            className="mySwiper"
                      >
                          {data.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="slider__wrapper">
                                        <Tilda className="tilda"/>
                                        <p className="title">{item.title}</p>
                                        <hr className="hrSlider"/>
                                        <p className="author">{item.author}</p>
                                    </div>
                                </SwiperSlide>
                          ))}
                      </Swiper>
                  </div>
              </Container>
          </section>
    );
}

export default Testimonial;
