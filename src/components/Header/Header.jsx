import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const headerHeight = document.getElementById("header").offsetHeight;
            setIsSticky(window.scrollY > headerHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="w-full">
            <div id="header" className="flex items-center justify-center text-center py-4 bg-gray-100">
                <div className="left-1/2 transform -translate-x-1/2 text-center">
                    <h1 className="text-3xl font-bold tracking-wide">CAKES</h1>
                    <p className="italic text-lg">by vivi</p>
                </div>
                <Link to="/order" className="absolute right-8">
                    <button className="bg-purple-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-purple-700 transition">
                        order now
                    </button>
                </Link>
            </div>

            <nav className={`flex bg-purple-300 h-[72px] justify-center transition-all duration-300 ${ isSticky ? "fiex top-0 left-0 shadow-md" : "relative" }`}>
                <div className="flex justify-center items-center space-x-6 text-gray-900 font-medium">
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
        </header>
        
    );
}