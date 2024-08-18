import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import {
//   createBrowserRouter,
//   RouterProvider
// } from "react-router-dom";
// import Home from './pages/Home.jsx';
// import Megamenu from './pages/Megamenu.jsx';
// import Features from './pages/Features.jsx';
// import Megatabs from './pages/Megatabs.jsx';
// import Technology from './pages/Technology.jsx';
// import ContactUs from './pages/ContactUs.jsx';

import { BrowserRouter} from 'react-router-dom';



// const router = createBrowserRouter ([
//   {
//     path: "/",
//     element: <Home/>
//   },
//   {
//     path: "features",
//     element: <Features />
//   },
//   {
//     path: "megamenu",
//     element: <Megamenu/>
//   },
//   {
//     path: "megatabs",
//     element: <Megatabs/>
//   },
//   {
//     path: "technology",
//     element: <Technology/>
//   },
//   {
//     path: "contact",
//     element: <ContactUs/>
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <App/>
    </BrowserRouter>
    {/* <RouterProvider router={router}/> */}
  </React.StrictMode>,
)
