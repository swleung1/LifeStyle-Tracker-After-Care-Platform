//Routing pages for the webapp
//added by me

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../page/Home.jsx';
import Chat from '../page/Chat.jsx';
import App from '../App.jsx';

export default function AppRoutes() {
  return (
    // <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    // </BrowserRouter>
  );
}