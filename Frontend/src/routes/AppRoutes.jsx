//Routing pages for the webapp
//added by me

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App.jsx';
import Home  from '../page/Home.jsx';
import Chat  from '../page/Chat.jsx';
import PSurvey from '../components/PSurvey.jsx';
import DrDash from '../components/DrDash.jsx';
import DrApp from '../DrApp.jsx';
import Psidebar from '../components/Psidebar.jsx';
import Pinstructions from '../components/PInstructions.jsx';
import PEmergency from '../components/PEmerContact.jsx';
// import { Alert } from 'bootstrap';
import Alert from '../components/DrAlerts.jsx';
import DrInsrtuct from '../components/DrInsrtuct.jsx';


export const router = createBrowserRouter([

   // {
  // 'GLOBAL' Login route
  //   path: "//ogin",
  //   element: <Login/>,
  // },

  // CARE PROVIDER DASHBOARD ROUTE
   {

    path: "/drdash",
    element: <DrApp />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/alerts",
    element: <Alert />,
  },
    {
    path: "/drform",
    element: <DrInsrtuct />,
  },


  // PAtient Home Page route
   {
    
    path: "/",
      element:  (
     <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '100vh',
        gap: '40px',
      }}
    >
      <div style={{ width: '300px' }}>
        {/* <Psidebar /> */}
      </div>
          <App />,
    </div>),
  },
  // PATIENT SURVEY ROUTE
    {
    path: "/dailycheckin",
    element:  (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '100vh',
        gap: '40px',
      }}
    >
      <div style={{ width: '300px' }}>
        <Psidebar />
      </div>
      <div style={{ width: '700px' }}>
        <PSurvey />
      </div>
    </div>),
  },
    {
    path: "/careinstructions",
    element: <Pinstructions />,
  },

    {
    path: "/emergency",
    element: <PEmergency />,
  },
  // 

]); 