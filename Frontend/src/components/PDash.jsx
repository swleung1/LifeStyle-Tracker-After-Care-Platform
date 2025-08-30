// This page is for: Rendering the patient Dashboard/DashboardCONTENT & structuring the layout of the dashboard LAYOUT File
import react from 'react';
import Psidebar from './Psidebar';
import PHeader from './PHeader';
import Pcard from './Pcard';

const PDash = () => {
    return ( 

        // PAtient Dash and LAYOUT
        <div className="pdash">
            {/* Patient sidebar  */}
            <Psidebar /> 

            <div className="dashboard-view mx-4 p-4 bg-light rounded shadow">
             <div className="mb-4 ">
               
                
                <PHeader />
                 <Pcard />
              
            </div>
            
        </div>
            
                {/* <p className="text-muted">Backend says: {msg}</p> */}
    </div>
     );
}

export default PDash;