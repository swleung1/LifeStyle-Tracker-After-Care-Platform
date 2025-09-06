//Routing pages for the webapp
//added by me

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App.jsx';
import Home  from '../page/Home.jsx';
import Chat  from '../page/Chat.jsx';
import PSurvey from '../components/PSurvey.jsx';
import DrDash from '../components/DrDash.jsx';
import DrApp from '../DrApp.jsx';


export const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/",
  //   element: <Login/>,
  // },
   {
    path: "/drdash",
    element: <DrApp />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
    {
    path: "/dailycheckin",
    element: <PSurvey />,
  },
  
  // {
  //   path: "/drdash",
  //   element: <DrDash />,
  // }


]); 