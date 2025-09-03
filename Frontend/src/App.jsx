// import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import { health } from './services/api';
import AppRoutes from './routes/AppRoutes.jsx';

export default function App() {
  // const [msg, setMsg] = useState('Checking API...');
  // useEffect(() => { health().then(d => setMsg(d.status)).catch(()=>setMsg('API not reachable')); }, []);
  return (
     <div>
      <AppRoutes />
    </div>

  );
}
