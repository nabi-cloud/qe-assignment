import { Outlet, NavLink } from "react-router-dom";

export const ROUTES = {
    HOME: '/',
    ABOUT_US: '/about',
    SERVICES: '/services',
    CONTACT: '/contact'
};

function Root() {
    return (
        <>
            <nav>
                <NavLink to={ ROUTES.HOME } >
                    Home
                </NavLink>
                <NavLink to={ ROUTES.ABOUT_US } >
                    About Us
                </NavLink>
                <NavLink to={ ROUTES.SERVICES } >
                    Services
                </NavLink>
                <NavLink to={ ROUTES.CONTACT } >
                    Contact
                </NavLink>
            </nav>
            <Outlet/>
        </>
    );
};

export default Root;
