import About from "../Components/About";
import SectionOne from '../Components/SectionOne';
import SectionTwo from '../Components/SectionTwo';
import SectionThree from '../Components/SectionThree';
import SectionFour from '../Components/SectionFour';
import SectionFive from '../Components/SectionFive';
import Imprint from '../Components/Imprint';
import SectionSeven from '../Components/SectionSeven';
import QualityAsscurance from '../Components/QualityAssurance';
const Content = () => {
    return (
        <>
            <About />

            <SectionOne />           
            <SectionTwo />
            <QualityAsscurance />
            <Imprint />

            <SectionSeven />
            { /* Other sections .. */ }
        </>
    )
};

export default Content;
