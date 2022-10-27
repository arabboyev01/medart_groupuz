import React, {useEffect, useState} from 'react'
import './Navbar.scss'
import {NavLink} from "react-router-dom";

import Logo from "../../../assets/icons/smalllogo.svg";
import LogoText from "../../../assets/icons/textlogo.svg";
import AppoinmentBtn from "../Buttons/Appoinment/Appoinment";
import {useTranslation} from "react-i18next";
import Icon from "../Icon/icon";
import {AnimatePresence, motion, useCycle} from "framer-motion";
import AppoinmentSidebar from "../Sidebars/Appoinment/Appoinment.sidebar";


const itemVariants = {
    closed: {
        opacity: 0
    }, open: {opacity: 1}
};

const sideVariants = {
    closed: {
        transition: {
            staggerChildren: 0.2, staggerDirection: -1
        }
    }, open: {
        transition: {
            staggerChildren: 0.1, staggerDirection: 1
        }
    }
};

function Navbar() {
    const [order, setOrder] = useState(false)

    const Ali = () => {
        localStorage.setItem('appmnt', true)
    }

    const {t} = useTranslation();

    const data = [{
        id: 1, title: `${t('home')}`, url: '/'
    }, {
        id: 2, title: `${t('about')}`, url: '/about'
    }, {
        id: 3, title: `${t('service')}`, url: '/services'
    }, {
        id: 4, title: `${t('doctors')}`, url: '/doctors'
    }, {
        id: 5, title: `${t('news')}`, url: '/news'
    }, {
        id: 6, title: `${t('blog')}`, url: '/blog'
    }, {
        id: 7, title: `${t('contact')}`, url: '/contact'
    },];

    const [sticky, setSticky] = useState(false);
    const [open, cycleOpen] = useCycle(false, true);
    const [birbalo, setBirbalo] = useState(true);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 44) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (<nav className={sticky ? 'stickyNavbar' : 'main__navbar'}>
        <div className='wrapper'>
            <NavLink to={'/'} className='logo'>
                <img src={Logo} alt="" className='icon'/>
                <img src={LogoText} alt="" className='text'/>
            </NavLink>
            <div className='btn'>
                <AppoinmentBtn children={t('appoinment')} onClick={() => setOrder(true)}/>
            </div>
            <div className='sidebar2'>
                <AnimatePresence>
                    {open && (<motion.aside
                        initial={{width: 0}}
                        animate={{width: '100vw'}}
                        exit={{width: 0, transition: {delay: 1.2, duration: 1}}}
                    >
                        <motion.div
                            className="sidebar_container"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={sideVariants}
                        >
                            {data.map(menu => (<>
                                <NavLink
                                    onClick={() => {
                                        cycleOpen();
                                        setBirbalo(birbalo === true ? false : true);
                                    }}
                                    to={menu.url}>
                                    <motion.p
                                        className='links'
                                        key={menu.id}
                                        whileHover={{scale: 1.1}}
                                        variants={itemVariants}
                                    >
                                        {menu.title}
                                    </motion.p>
                                </NavLink>
                            </>))}
                        </motion.div>
                    </motion.aside>)}
                </AnimatePresence>
                <div onClick={() => {
                    cycleOpen();
                    setBirbalo(false)
                }}
                     className="btn_container">
                    <Icon data={birbalo}/>
                </div>
            </div>
            <AppoinmentSidebar order={order} setOrder={setOrder}/>
        </div>
    </nav>)
}

export default Navbar