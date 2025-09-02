// This page is for: Rendering the Care Providers Dashboard & structuring the layout of the dashboard LAYOUT File
import react from 'react';
// import Psidebar from './Psidebar';
// import PHeader from './PHeader';
// import Pcard from './Pcard';

import DrNavbar from './DrNavbar';
import Drsidebar from './Drsidebar';

const DrDash = () => {
    return ( 

        // DR Dash and LAYOUT
        <div className="drdash">
            {/* Dr sidebar  */}
              <DrNavbar /> 
               <Drsidebar /> 

         

            <div className="dashboard-view mx-4 p-4 bg-light rounded shadow">
             <div className="mb-4 ">
               
                
                {/* <PHeader /> */}
                 {/* <Pcard /> */}
              
            </div>
            
        </div>
            
                {/* <p className="text-muted">Backend says: {msg}</p> */}
    </div>
     );
}

export default DrDash;