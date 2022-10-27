import {Route, Routes} from "react-router-dom";

import './App.css'

import Home from "./components/Home/Home";
import About from "./components/About/About";
import AboutDoctor from "./components/AboutDoctor/AboutDoctor";
import News from "./components/News/News";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Doctors from "./components/Doctors/Doctors";
import Service from "./components/Service/Service";
import Services from "./components/Services/Services";
import Navbar from "./components/UsableComponents/Navbar/Navbar";
import Footer from "./components/UsableComponents/Footer/Footer";
import TopNavbar from "./components/UsableComponents/TopNavbar/TopNavbar";
import Operation from "./components/Operation/Operation";
import NewsSingle from "./components/NewsSingle/NewsSingle";
import BlogSingle from "./components/BlogSingle/BlogSingle";
import Popup from "./components/UsableComponents/Popup/Popup";
import {useGetDataQuery} from "./redux";
import React from "react";
import Loader from "./components/UsableComponents/Loader/Loader";
import ScrollTop from "./components/UsableComponents/ScrollTop/Scroll";

function App() {
    const {isLoading} = useGetDataQuery('our-service')
    if (isLoading) {
        return (<Loader/>)
    } else {
        return (<>
            <ScrollTop/>
            <TopNavbar/>
            <Navbar/>
            <Popup/>
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/doctors/:id' element={<AboutDoctor/>}/>
                <Route path='/operation/:id' element={<Operation/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/news/:id' element={<NewsSingle/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/blog/:id' element={<BlogSingle/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/doctors' element={<Doctors/>}/>
                <Route path='/service/:id' element={<Service/>}/>
                <Route path='/services' element={<Services/>}/>
            </Routes>
            <Footer/>
        </>);
    }
}

export default App;
