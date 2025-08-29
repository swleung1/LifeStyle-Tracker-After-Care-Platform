
// import { RouterProvider } from 'react-router-dom'
// // import AppRoutes from './routes/AppRoutes.jsx'

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import './index.css'
// import App from './App.jsx'

// import './page/styles.css' // Import the CSS file
// // import { router } from './routes/AppRoutes'

// import { router as AppRoutes } from './routes/AppRoutes.jsx'


// // import { createBrowserRouter } from 'react-router-dom';




// createRoot(document.getElementById('root')).render(
//   <StrictMode>
    
//     {/*<App /> */}
//     <RouterProvider router={AppRoutes} ></RouterProvider>

//   </StrictMode>
// )


import React from 'react'
import ReactDOM from 'react-dom/client'
import './page/styles.css'  // Global styles for your application
import { RouterProvider } from "react-router-dom";  // Import RouterProvider to use the router
import { router } from "./routes/AppRoutes.jsx";  // Import the router configuration
import { StoreProvider } from './hooks/useGlobalReducer.jsx';  // Import the StoreProvider for global state management
import { StrictMode } from 'react';


const Main = () => {
  return (
    <React.StrictMode>
      <StoreProvider> 
                {/* Set up routing for the application */} 
                <RouterProvider router={router}>
                </RouterProvider>
            </StoreProvider>
        </React.StrictMode>
    );
}

// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById('root')).render(<Main />)