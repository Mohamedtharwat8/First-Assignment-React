import React from 'react'
import { Outlet, useLocation } from 'react-router-dom' // <-- Add this line
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout() {
    {
        let location = useLocation();
        console.log(location);
        let bgComponents = {
            '/': 'bg-sec',
            '/home': 'bg-sec',
            '/about': 'bg-sec',
            '/portfolio': '#fff',
            '/contact': '#fff'
        }
        let bgColors = bgComponents[location.pathname];

    
        return (
            <div className={`d-flex flex-column min-vh-100 ${bgColors}`}>
                <Navbar />
                <div className="flex-grow-1">
                    <Outlet />
                </div>
                <Footer />
            </div>
        )
    }
}