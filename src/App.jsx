import React from 'react'
import Hero from "./section/Hero.jsx";
import ShowCaseSection from "./section/ShowCaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./section/LogoSection.jsx";
import FeatureCards from "./section/FeatureCards.jsx";
import ExperienceSection from "./section/ExperienceSection.jsx";
import TechStack from "./section/TechStack.jsx";
import Contact from "./section/Contact.jsx";
import {Footer} from "./section/Footer.jsx";

const App = () => {
    return (
        <>
            <NavBar/>
            <Hero/>
            <ShowCaseSection/>
            <LogoSection/>
            <FeatureCards/>
            <ExperienceSection/>
            <TechStack/>
            <Contact/>
            <Footer/>
        </>
    )
}
export default App
