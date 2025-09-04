import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { health } from './services/api';

//this is the "Home" file
import Navbar from './components/Navbar.jsx';

import DrDash from './components/DrDash.jsx';
import Drsidebar from './components/Psidebar.jsx';
import DrNavbar from './components/DrNavbar.jsx';



export default function DrApp() {
  const [msg, setMsg] = useState('Checking API...');
  useEffect(() => { health().then(d => setMsg(d.status)).catch(()=>setMsg('API not reachable')); }, []);
  return (

  
    <div className="container text-center">
     <h1 className="title-top mb-3">Patient Aftercare Tracker</h1>
     {/* <div className="py-3 d-flex justify-content-center"></div> */}
        <DrNavbar />  

        <DrDash />  

      
      {/* <p className="text-muted">Backend says: {msg}</p> */}
    </div>
  );
}
