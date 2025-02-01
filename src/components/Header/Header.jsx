import { NavLink, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import { FaBars, FaHeart, FaCakeCandles } from "react-icons/fa6";
import './Header.css';
import { useState, useEffect } from "react";

export default function Header({ footerRef }) {
    const [isNavVisible, setNavVisible] = useState(false);
    const [isAboveFooter, setIsAboveFooter] = useState(false);
    const location = useLocation();

    // This code is for the footer and mobile order button
    useEffect(() => {
        if (!footerRef?.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsAboveFooter(entry.isIntersecting);
            },
            { root: null, threshold: 0.65 }
        );

        observer.observe(footerRef.current);

        return () => observer.disconnect();
    }, [footerRef]);

    const toggleNav = () => {
        setNavVisible(!isNavVisible);
    }

    return (
        <header className="w-full fixed top-0 z-50">
            {/* Logo and order now button */}
            <div id="header" className="flex items-center justify-center text-center py-4 sm:py-5 md:py-6 logo-bg-color">
                <Logo />

                {/* Hide button when on /order */}
                {location.pathname !== '/order' && (
                    <NavLink to="/order" className="absolute right-10 hidden sm:block md:right-20 tracking-wide">
                        <button className="order-button-color text-white px-8 py-3 md:px-10 md:py-4 rounded-lg text-lg sm:text-xl transition shadow-md shadow-zinc-400">
                            order now
                        </button>
                    </NavLink>
                )}
            </div>

            {/* Navbar */}
            <div className="w-full flex flex-col">
                <span className="block w-full top-rectangle mb-2.5 h-1.5 shadow-md shadow-zinc-400"></span>

                <nav className="w-full flex middle-rectangle justify-between sm:justify-center items-center transition-all duration-300 py-7 shadow-md shadow-zinc-400">
                    {/* Mobile View */}
                    <span className="sm:hidden pl-4">
                        <FaCakeCandles className="nav-text-color w-7 h-7" />
                    </span>
                    <h1 className="sm:hidden nav-text-color">
                        ⋆｡°✩ made with love ✩°｡⋆
                    </h1>
                    <button className={`sm:hidden pr-4 ${isNavVisible ? 'text-[#664372]' : 'text-[#554242]'}`} onClick={toggleNav}>
                        <FaBars className="w-7 h-7 hover:text-white transition duration-200" />
                    </button>

                    {/* Desktop */}
                    <div className="hidden sm:flex justify-center items-center space-x-6 nav-text-color tracking-wide sm:tracking-wider sm:space-x-12 md:space-x-16 md:tracking-widest text-md sm:text-lg md:text-xl">
                        <NavLink to="/" className="nav-link" activeClassName="active">
                            <h2 className="">home</h2>
                            <span className="nav-span"></span>
                        </NavLink>
                        <NavLink to="/gallery" className="nav-link" activeClassName="active">
                            <h2>gallery</h2>
                            <span className="nav-span"></span>
                        </NavLink>
                        <NavLink to="/flavors" className="nav-link" activeClassName="active">
                            <h2>flavors</h2>
                            <span className="nav-span"></span>
                        </NavLink>
                        <NavLink to="/order" className="nav-link" activeClassName="active">
                            <h2>order</h2>
                            <span className="nav-span"></span>
                        </NavLink>
                        <NavLink to="/contact" className="nav-link" activeClassName="active">
                            <h2>contact</h2>
                            <span className="nav-span"></span>
                        </NavLink>
                        <NavLink to="/resources" className="nav-link" activeClassName="active">
                            <h2>resources</h2>
                            <span className="nav-span"></span>
                        </NavLink>
                    </div>

                    {/* Mobile Menu */}
                    {isNavVisible && (
                        <div className="sm:hidden fixed top-0 left-0 h-full top-rectangle w-60 shadow-2xl shadow-zinc-400 z-50">
                            <div className="flex flex-col p-4 space-y-4">
                                <NavLink to="/" className="nav-link" activeClassName="active" onClick={toggleNav}>
                                    <h2>home</h2>
                                    <span className="nav-span"></span>
                                </NavLink>
                                <NavLink to="/gallery" className="nav-link" activeClassName="active" onClick={toggleNav}>
                                    <h2>gallery</h2>
                                    <span className="nav-span"></span>
                                </NavLink>
                                <NavLink to="/flavors" className="nav-link" activeClassName="active" onClick={toggleNav}>
                                    <h2>flavors</h2>
                                    <span className="nav-span"></span>
                                </NavLink>
                                <NavLink to="/order" className="nav-link" activeClassName="active" onClick={toggleNav}>
                                    <h2>order</h2>
                                    <span className="nav-span"></span>
                                </NavLink>
                                <NavLink to="/contact" className="nav-link" activeClassName="active" onClick={toggleNav}>
                                    <h2>contact</h2>
                                    <span className="nav-span"></span>
                                </NavLink>
                                <NavLink to="/resources" className="nav-link" activeClassName="active" onClick={toggleNav}>
                                    <h2>resources</h2>
                                    <span className="nav-span"></span>
                                </NavLink>
                            </div>
                        </div>
                    )}
                </nav>

                <span className="block w-full lower-rectangle mt-2.5 h-1.5 shadow-md shadow-zinc-400"></span>
            </div>

            {/* Floating mobile "Order Now" */}
            {/* Hide when on order page too */}
            {location.pathname !== '/order' && (
                <NavLink to="/order" className="sm:hidden fixed bottom-4 right-4 z-50" style={{ bottom: isAboveFooter ? '150px' : '16px' }}>
                    <div className="relative w-24 h-24 flex items-center justify-center">
                        <FaHeart className="text-[#664382] text-9xl heart-shadow hover:text-[#554242]" />
                        <span className="absolute text-white text-sm tracking-wider font-bold mb-3 hover:text-[#EAD7D7]">order now</span>
                    </div>
                </NavLink>

            )}
        </header>
        
    );
}
