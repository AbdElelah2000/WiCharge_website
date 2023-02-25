import './navbar.css';
import logo from  '../assets/shared/logo.jpeg.png';
import { useLocation, Link } from 'react-router-dom';
import iconMenu from '../assets/shared/icon-hamburger.svg';
import closeMenu from '../assets/shared/icon-close.svg';
import { useState } from 'react';

export default function Navbar() {
    const location = useLocation();
    const pathname = location.pathname;

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className='navbar-div'>
            <div className='wrapper'>
                <img className='logo' id='logo' src={logo} alt='logo'></img>
                <div className='line'>
                    <hr></hr>
                </div>
            </div>

            <div className='navbar-background'></div>

            <img onClick={() => setShowMenu(!showMenu)} className={`${(!showMenu && 'icon-menu') || 'hidden'}`} src={iconMenu} alt='menu icon'/>
            {   showMenu && 
                <div className='mobile-menu'>
                    <img onClick={() => setShowMenu(!showMenu)} className='close-menu' src={closeMenu} alt='close menu'/>
                    <div className='mobile-pages-wrapper'>
                        <span id='home'><b>00</b><span className='page-name'><Link to='/'>HOME</Link></span></span>
                    
                        <span id='products'><b>01</b><span className='page-name'><Link to='/products'>PRODUCTS</Link></span></span>
                                                
                        <span id='features' ><b>02</b><span className='page-name'><Link to='/features'>FEATURES</Link></span></span>

                        <span id='contact' ><b>03</b><span className='page-name'><Link to='/contact'>CONTACT US</Link></span></span>
                    </div>
                </div>
            }
            
            <div className='pages-wrapper'>
                
                <span id='home' className={`nav-item ${pathname === '/' && 'active-page'}`}><b>00</b><span className='page-name'><Link to='/'>HOME</Link></span></span>
                
                <span id='products' className={`nav-item ${pathname === '/products' && 'active-page'}`}><b>01</b><span className='page-name'><Link to='/products'>PRODUCTS</Link></span></span>
                
                <span id='features' className={`nav-item ${pathname === '/technology' && 'active-page'}`}><b>02</b><span className='page-name'><Link to='/features'>FEATURES</Link></span></span>

                <span id='contact' className={`nav-item ${pathname === '/contact' && 'active-page'}`}><b>03</b><span className='page-name'><Link to='/contact'>CONTACT US</Link></span></span>
            </div>
        </div>
    )
}