import Logo from "../Logo/Logo";
import { FaLocationDot, FaEnvelope, FaInstagram } from "react-icons/fa6";
import "./Footer.css";

export default function Footer({ footerRef }) {
    return (
        <footer ref={footerRef} className="w-full flex flex-col mt-auto">
            <span className="w-full top-rectangle h-1.5 mb-2.5 shadow-md shadow-zinc-400"></span>

            <div className="flex justify-between middle-rectangle w-full py-6">
                <div className="ml-4 sm:ml-6 md:ml-10">
                    <Logo />
                </div>

                <div className="mt-0.5 sm:mt-0 flex flex-col mr-2 sm:mr-6 md:mr-10 text-sm sm:text-md md:text-lg">
                    <div className="flex footer-text-color transition">
                        <FaLocationDot className="mt-1 mr-2" />
                        <p>Annandale, Virginia, U.S.</p>
                    </div>

                    <div className="flex footer-text-color transition">
                        <FaEnvelope className="mt-1.5 mr-2" />
                        <p className="mt-0.5 md:mt-0">cakesbyvivii@gmail.com</p>
                    </div>

                    <a href="https://www.instagram.com/cakesbyvivii/" className="flex footer-text-color transition">
                        <FaInstagram className="mt-1.5 mr-2" />
                        <p className="mt-0.5 md:mt-0">@cakesbyvivii</p>
                    </a>
                </div>

            </div>
        </footer>
    );
}
