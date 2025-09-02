
import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/styles.css'  
import { RouterProvider } from "react-router-dom";  // Import RouterProvider to use the router
import { router } from "./routes/AppRoutes.jsx";  // Import the router configuration
import { StoreProvider } from './hooks/useGlobalReducer.jsx';  // Import the StoreProvider for global state management
import { StrictMode } from 'react';


const Main = () => {
  console.log("Main component rendered");
  return (
    <StrictMode>
      <StoreProvider> 
                {/* Set up routing for the application */} 
                <RouterProvider router={router} />
                {/* </RouterProvider> */}
            </StoreProvider>
        </StrictMode>
    );
}

// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById('root')).render(<Main />)