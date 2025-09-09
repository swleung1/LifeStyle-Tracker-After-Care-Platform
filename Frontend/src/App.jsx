// import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import { health } from './services/api';
import AppRoutes from "./routes/AppRoutes";
import { UserProvider } from "./context/UserProvider";

export default function App() {
  // const [msg, setMsg] = useState('Checking API...');
  // useEffect(() => { health().then(d => setMsg(d.status)).catch(()=>setMsg('API not reachable')); }, []);
  return (
    <UserProvider>
      <div className="container py-5">
        <img
          src="https://images-ext-1.discordapp.net/external/gEKsZN02FOEmauN0e4L0HAtQJyGKTmcxcP8QBm6U37Q/https/www.canva.com/design/DAGyWnw1eyA/csoE-I8JMnWlUxFSVSVPPQ/screen"
          alt="App Logo"
          style={{
            height: "80px",
            width: "auto",
            borderRadius: "12px",
          }}
        />

        <AppRoutes />
      </div>
    </UserProvider>
  );
}
