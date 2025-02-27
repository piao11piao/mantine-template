import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from './Views/Content';

import Footer from './Components/Footer';
import { MantineProvider } from '@mantine/core';
import { TypographyStylesProvider } from '@mantine/core';
import ReportPage from './Views/ReportPage'; // Create this new page component

function App() {
  return (
   <Router> 
    <MantineProvider>
      <TypographyStylesProvider>
       
         <Routes>     
            <Route path="/" element={<Content />} />
            <Route path="/report" element={<ReportPage />} />
           
          </Routes>
        <Footer />
      </TypographyStylesProvider>
    </MantineProvider>
</Router> 
  );
}

export default App;
