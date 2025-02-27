import About from "../Components/About";
import SectionOne from '../Components/SectionOne';

import SectionThree from '../Components/SectionThree';
import SectionFour from '../Components/SectionFour';
import SectionFive from '../Components/SectionFive';
import Imprint from '../Components/Imprint';
import SectionSeven from '../Components/SectionSeven';
import QualityAsscurance from '../Components/QualityAssurance';
import AboutUs from '../Components/AboutUs';
import HeaderIndex from '../Components/Header_Index';
const Content = () => {
    return (
        <>
            <HeaderIndex />
            <About />

            <SectionOne />           
            <AboutUs />
            <QualityAsscurance />
            <Imprint />

            <SectionSeven />
            { /* Other sections .. */ }
        </>
    )
};

export default Content;
