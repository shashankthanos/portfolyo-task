import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../Styles/Navbar.css"
import DehazeIcon from '@mui/icons-material/Dehaze';

const Navbar = () => {

    const location = useLocation();
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    }

    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    return (
        <>
            <div className="mobile-navbar">
                <div className="image"></div>
                <div><DehazeIcon onClick={toggleMobileNav} /></div>
            </div>
            <div className={`navbar ${mobileNavOpen ? 'mobile-open' : ''}`}>
                <div className="first">
                    <div className="image"></div><br />
                    <h1>John</h1><br /><br />
                    <div className='links'>
                        <Link to="/" className={isActive('/')}>About</Link>
                        <Link to="/resume" className={isActive('/resume')}>Resume</Link>
                        <Link to="/projects" className={isActive('/projects')}>Project</Link>
                        <Link to="/skills" className={isActive('/skills')}>Skills</Link>
                        <Link to="/contact" className={isActive('/contact')}>Contact</Link>
                    </div><br /><br />
                </div>
                <div className='para'>
                    <p>© 2021 All rights
                        reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Navbar