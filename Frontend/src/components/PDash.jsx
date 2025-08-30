// patient Dashboard
import react from 'react';
import Psidebar from './Psidebar';
import PHeader from './PHeader';

const PDash = () => {
    return ( 

        // PAtient Dash and LAYOUT
        <div className="pdash container ">
            {/* Patient sidebar  */}
            <Psidebar /> 

            <div className="dashboard-view mx-4 p-4 bg-light rounded shadow">
             <div className="mb-4 container">
                <PHeader />
                {/* <h2>Patient Dashboard View</h2> */}
            <p>Welcome to your aftercare dashboard! Here you can track your daily wellness, communicate with your healthcare provider, and monitor your recovery progress. Use the sidebar to navigate through different sections of the platform.</p>
            </div>
            
        </div>
            
                {/* <p className="text-muted">Backend says: {msg}</p> */}
    </div>
     );
}

export default PDash;