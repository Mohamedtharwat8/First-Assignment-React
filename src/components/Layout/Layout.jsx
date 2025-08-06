import React from 'react'
import { Outlet } from 'react-router-dom' // <-- Add this line
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default  function Layout() {
    return (
        <div className='min-vh-100 d-flex flex-column justify-content-between'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}