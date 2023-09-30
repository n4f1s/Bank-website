import React from 'react'
import { useState } from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjectOne, homeObjectTwo, homeObjectThree } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar/Index'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar/Index'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjectOne} />
            <InfoSection {...homeObjectTwo} />
            <Services />
            <InfoSection {...homeObjectThree} />
            <Footer />
        </>
    )
}

export default Home;
