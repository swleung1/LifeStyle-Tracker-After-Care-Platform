import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { health } from './services/api';

//this is the "Home" file
import Navbar from './components/Navbar.jsx';
// import drNavbar from './components/DrNavbar.jsx';




export default function App() {
  const [msg, setMsg] = useState('Checking API...');
  useEffect(() => { health().then(d => setMsg(d.status)).catch(()=>setMsg('API not reachable')); }, []);
  return (

  
    <div className="container text-center">
     
     {/* <div className="py-3 d-flex justify-content-center"></div> */}
        <Navbar />  {/* added by me */}

        {/* <drNavbar /> //added by me */}

      <h1 className="mb-3">LifeStyle Tracker</h1>
      <p className="text-muted">Backend says: {msg}</p>
    </div>
  );
}
