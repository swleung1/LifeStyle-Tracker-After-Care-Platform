//Routing pages for the webapp
//added by me

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App.jsx';
import Home  from '../page/Home.jsx';
import Chat  from '../page/Chat.jsx';

export const router = createBrowserRouter(
createRoutesFromElements(
  <Route path="/" element={<App />} >
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
  </Route>
 )
);