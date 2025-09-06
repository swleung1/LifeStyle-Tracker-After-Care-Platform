import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { health } from './services/api';

//this is the "Home" file for patient
import Navbar from './components/Navbar.jsx';

import PDash from './components/PDash.jsx';
import Psidebar from './components/Psidebar.jsx';



export default function App() {
  const [msg, setMsg] = useState('Checking API...');
  useEffect(() => { health().then(d => setMsg(d.status)).catch(()=>setMsg('API not reachable')); }, []);
  return (

  
    <div className="container text-center">
     <h1 className="title-top mb-3">Patient Aftercare Tracker</h1>
     {/* <div className="py-3 d-flex justify-content-center"></div> */}
        <Navbar /> 
          {/* Patient sidebar  */}
            {/* <Psidebar />   */}
        <PDash />  
    
        {/* <drNavbar /> //added by me */}

      
      {/* <p className="text-muted">Backend says: {msg}</p> */}
    </div>
  );
}
