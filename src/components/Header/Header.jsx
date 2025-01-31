import { Link } from "react-router-dom";
import './Header.css';
import { useState, useEffect, useRef } from "react";

export default function Header({ setNavHeight }) {
    const [isSticky, setIsSticky] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const headerHeight = document.getElementById("header").offsetHeight;
            const sticky = window.scrollY > headerHeight;
            setIsSticky(sticky);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (navRef.current) {
            setNavHeight(navRef.current.offsetHeight);
        }
    }, [navRef]);

    return (
        <header className="w-full">
            <div id="header" className=" flex items-center justify-center text-center py-4 sm:py-5 md:py-6 bg-gray-100">
                <div className="transform text-center">
                    <h1 className="text-2xl font-bold tracking-wide text-3xl sm:text-4xl md:text-[40px] kurale-regular">CAKES</h1>
                    <p className="lavishly-yours-regular text-xl text-4xl sm:text-[40px] md:text-5xl">by vivii</p>
                </div>
                {/* <Link to="/order" className="absolute right-8">
                    <button className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-purple-700 transition">
                        order now
                    </button>
                </Link> */}
            </div>

            <div className={`w-full flex flex-col ${ isSticky ? "fixed top-0" : "relative" }`}>
                <span className="block w-full top-rectangle mb-1 h-1"></span>

                <nav ref={navRef} className="w-full flex middle-rectangle py-6 justify-center transition-all duration-300">
                    <div className="flex justify-center items-center space-x-6 nav-text-color tracking-wide text-md sm:text-lg md:text-xl">
                        <Link to="/" className="">
                            <h2>home</h2>
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
                    </div>
                </nav>

                <span className="block w-full lower-rectangle mt-1 h-1 shadow-lg"></span>
            </div>
        </header>
        
    );
}