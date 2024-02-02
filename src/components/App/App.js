import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Link } from 'react-router-dom';
import Root, { ROUTES } from "../root/root";
import './App.css';
// Components
import Home from '../Home/Home';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/> } >
    <Route index element={ <Home/> } />
    <Route path={ ROUTES.ABOUT_US } element={ <AboutUs/> } />
    <Route path={ ROUTES.SERVICES } element={ <Services/> } />
    <Route path={ ROUTES.CONTACT } element={ <Contact/> } />
  </Route>
));

function App() {
  return (
    <RouterProvider router={ router }>
      <div>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to={ ROUTES.ABOUT_US }>About Us</Link>
        <Link className='link' to={ ROUTES.SERVICES }>Services</Link>
        <Link className='link' to={ ROUTES.CONTACT }>Contact</Link>
      </div>
    </RouterProvider>
  );
};

export default App;
