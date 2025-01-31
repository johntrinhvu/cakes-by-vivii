import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import './Header.css';
import { useState, useEffect, useRef } from "react";

export default function Header() {
    return (
        <header className="w-full fixed top-0">
            <div id="header" className="flex items-center justify-center text-center py-4 sm:py-5 md:py-6 logo-bg-color">
                <Logo />
                <Link to="/order" className="absolute right-10 hidden sm:block md:right-20 tracking-wide">
                    <button className="order-button-color text-white px-8 py-3 md:px-10 md:py-4 rounded-lg text-lg sm:text-xl transition shadow-md shadow-zinc-400">
                        order now
                    </button>
                </Link>
            </div>

            <div className={`w-full flex flex-col`}>
                <span className="block w-full top-rectangle mb-2.5 h-1.5 shadow-md shadow-zinc-400"></span>

                <nav className="w-full flex middle-rectangle justify-center transition-all duration-300 py-7 shadow-md shadow-zinc-400">
                    <div className="flex justify-center items-center space-x-6 nav-text-color tracking-wide sm:tracking-wider sm:space-x-12 md:space-x-16 md:tracking-widest text-md sm:text-lg md:text-xl">
                        <Link to="/" className="flex flex-col mt-1">
                            <h2 className="active-text-color">home</h2>
                            <span className="active-span-color h-0.5"></span>
                        </Link>
                        <Link to="/gallery" className="">
                            <h2>gallery</h2>
                        </Link>
                        <Link to="/flavors" className="">
                            <h2>flavors</h2>
                        </Link>
                        <Link to="/order" className="">
                            <h2>order</h2>
                        </Link>
                        <Link to="/contact" className="">
                            <h2>contact</h2>
                        </Link>
                        <Link to="/resources" className="">
                            <h2>resources</h2>
                        </Link>
                    </div>
                </nav>

                <span className="block w-full lower-rectangle mt-2.5 h-1.5 shadow-md shadow-zinc-400"></span>
            </div>
        </header>
        
    );
}