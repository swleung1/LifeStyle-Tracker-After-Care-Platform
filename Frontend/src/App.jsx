// import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import { health } from './services/api';
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  // const [msg, setMsg] = useState('Checking API...');
  // useEffect(() => { health().then(d => setMsg(d.status)).catch(()=>setMsg('API not reachable')); }, []);
  return (
    <div className="container py-5">
      <h1 className="text-center text-secondary mb-4">LifeStyle Tracker</h1>
      <AppRoutes />
    </div>
  );
}
