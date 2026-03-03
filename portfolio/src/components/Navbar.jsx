import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const navLinks = [
        { name: 'ABOUT', href: '#about' },
        { name: 'PROJECTS', href: '#projects' },
        { name: 'EXPERIENCE', href: '#experience' },
        { name: 'CONTACT', href: '#contact', class: 'contact-link' },
    ];

    return (
        <nav className={`ink-nav ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
            <div className="nav-content">
                <div className="ink-logo">
                    NASREEN<span>.</span>
                </div>

                <div className="ink-links desktop-only">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className={link.class || ''}>
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="mobile-toggle" onClick={toggleMenu}>
                    {isOpen ? <HiX size={30} /> : <HiMenuAlt4 size={30} />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                <div className="mobile-links">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={closeMenu}
                            className={link.class || ''}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
