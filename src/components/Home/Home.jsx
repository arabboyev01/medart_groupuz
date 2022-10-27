import React from 'react'
import Service from "./Service/Service";
import About from "./About/About";
import Doctors from "./Doctors/Doctors";
import News from "./News/News";
import Blog from "./Blog/Blog";
import Testimonial from "./Testimonial/Testimonial";
import Carousel1 from "./Carousel/Carousel";

function Home() {
    return (<>
        <Carousel1/>
        <Service limit={6}/>
        <About/>
        <Doctors/>
        <News/>
        <Blog/>
        <Testimonial/>
    </>)
}

export default Home