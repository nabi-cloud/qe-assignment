import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';
import Root, { ROUTES } from "../root/root";
// Components
import Home from '../Home/Home';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/> } >
    <Route index element={<Navigate to={ ROUTES.HOME } replace />} />
    <Route path={ ROUTES.HOME } element={ <Home/> } />
    <Route path={ ROUTES.ABOUT_US } element={ <AboutUs/> } />
    <Route path={ ROUTES.SERVICES } element={ <Services/> } />
    <Route path={ ROUTES.CONTACT } element={ <Contact/> } />
  </Route>
));

function App() {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
