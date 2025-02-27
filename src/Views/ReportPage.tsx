import React from 'react';
import About from "../Components/About";
import SectionOne from '../Components/SectionOne';
import SectionThree from '../Components/SectionThree';
import SectionFour from '../Components/SectionFour';
import SectionFive from '../Components/SectionFive';
import Imprint from '../Components/Imprint';
import SectionSeven from '../Components/SectionSeven';
import ReportView from '../Components/ReportPage';
import Header from '../Components/Header';

const ReportPage = () => {
    return (
        <>
            <Header />
            <ReportView />

            <SectionSeven />
            { /* Other sections .. */ }
        </>
    )
};

export default ReportPage;
