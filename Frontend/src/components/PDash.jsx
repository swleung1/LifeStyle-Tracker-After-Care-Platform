// This page is for: Rendering the patient Dashboard/DashboardCONTENT & structuring the layout of the dashboard LAYOUT File
import react from 'react';
import Psidebar from './Psidebar';
import PHeader from './PHeader';
import Pcard from './Pcard';
import Progress from './Pprogress';
// import backProgress from '../apis/ProgressApi';

const PDash = () => {
    return ( 

        // PAtient Dash and LAYOUT
        <div className="pdash">
            {/* Patient sidebar  */}
            <Psidebar /> 

            <div className="dashboard-view mx-4 p-4 bg-light rounded shadow">
             <PHeader />
             
             <div className=" d-flex align-items-center ms-4 mb-4">
       
                
                 <Pcard />
            </div>        
           
           
            {/* <Progress progress={60} /> */}
            
        </div>
        <div className="progressbar mb-4">
             <h2 className="prog-title mb-4">Your Recovery Progress</h2> 
            <Progress progress={60}  /> 
        </div>
                {/* <p className="text-muted">Backend says: {msg}</p> */}
    </div>
     );
}

export default PDash;