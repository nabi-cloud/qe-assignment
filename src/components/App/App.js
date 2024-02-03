import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, NavLink } from 'react-router-dom';
import Root, { ROUTES } from "../root/root";
import './App.css';
// Components
import Home from '../Home/Home';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

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
    <>
      <RouterProvider router={ router }>
          <nav>
            <NavLink activeClassName="active" className='link' to="/">
                Home
            </NavLink>
            <NavLink activeClassName="active" className='link' to={ ROUTES.ABOUT_US }>
                About Us
            </NavLink>
            <NavLink activeClassName="active" className='link' to={ ROUTES.SERVICES }>
                Services
            </NavLink>
            <NavLink activeClassName="active" className='link' to={ ROUTES.CONTACT }>
                Contact
            </NavLink>
          </nav>
      </RouterProvider>
      <Footer />
    </>
  );
};

export default App;
