import React from 'react';
import Hero from './Hero';
import Award from './Award';
import StatsTrust from './Stats-trust';
import Pricing from './Pricing';
import EducationVersity from './Education-versity';

import OpenAccount from '../Openaccount';
import Navbar from '../Navbar';
import Footer from '../Footer';




function Homepage() {
    return ( 
        <>
      
        < Hero />
        {/* < Award /> */}
        <StatsTrust />
        <Pricing/>
        <EducationVersity/>
        <OpenAccount/>
       
        
        </>
     );
}

export default Homepage;