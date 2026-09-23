import { Link } from 'react-router-dom'
import SocialIcons from '../../ui/SocialIcons'
import React from "react";

const Footer = () => {
    return (
        <div className='bg-primary pt-[8%] px-4'>
            <footer className='container pb-10 mx-auto text-white grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 border-b border-gray-50/10'>
                {/* Working Hours */}
                <div className="footer-item">
                    <h3 className='text-xl font-semibold mb-6 tracking-wide'>Studio Hours</h3>
                    <ul className='space-y-3'>
                        <li>
                            <span className='text-muted font-light'>Mon - Fri: 09:30 - 18:30</span>
                        </li>
                        <li>
                            <span className='text-muted font-light'>Saturday: 10:00 - 16:00</span>
                        </li>
                        <li>
                            <span className='text-muted font-light'>Sunday: By Appointment</span>
                        </li>
                    </ul>
                </div>

                {/* Office */}
                <div className="footer-item">
                    <h3 className='text-xl font-semibold mb-6 tracking-wide'>Design Studio</h3>
                    <ul>
                        <li>
                            <p className='text-muted font-light pb-5 leading-relaxed'>
                                Sector V, Salt Lake City,<br />
                                Kolkata, West Bengal 700091, India
                            </p>
                        </li>
                        <li>
                            <a href="mailto:hello@aurastudio.design" className='text-muted font-light pb-2 block text-lg hover:underline transition-all duration-300 hover:text-white'>
                                dummy@aurastudio.design
                            </a>
                            <span className='text-xl tracking-tight text-white'>+91 12345 67890</span>
                        </li>
                    </ul>
                </div>

                {/* Links */}
                <div className="footer-item links">
                    <h3 className='text-xl font-semibold mb-6 tracking-wide'>Navigation</h3>
                    <ul className='space-y-3 w-fit'>
                        <li className='w-fit'><Link to="/">Home</Link></li>
                        <li className='w-fit'><Link to="/about">About Us</Link></li>
                        <li className='w-fit'><Link to="/services">Services</Link></li>
                        <li className='w-fit'><Link to="/shop">Shop Collection</Link></li>
                        <li className='w-fit'><Link to="/blogs">Design Journal</Link></li>
                        <li className='w-fit'><Link to="/contact">Contact Studio</Link></li>
                    </ul>
                </div>

                {/* Social */}
                <div className="footer-item social">
                    <h3 className='text-xl font-semibold mb-6 tracking-wide'>Connect With Us</h3>
                    <p className='text-muted font-light text-sm mb-4'>Follow our architectural journeys and behind-the-scenes projects.</p>
                    <SocialIcons />
                </div>
            </footer>

            {/* Footer Bottom */}
            <div className="container py-6 text-muted mx-auto text-center flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
                <p className='link-bottom'>
                    <span className='text-white font-semibold'>AURA STUDIO</span> © {new Date().getFullYear()}. All Rights Reserved.
                </p>
                <p className='text-gray-400'>
                    Curated & Developed for Architectural Design Portfolio
                </p>
            </div>
        </div>
    )
}

export default Footer;