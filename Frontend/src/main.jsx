import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

import './page/styles.css' // Import the CSS file
// import AppRoutes from './routes/AppRoutes.jsx'

// import { createBrowserRouter } from 'react-router-dom';
// const router = createBrowserRouter([]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App /> 

  </StrictMode>
)
