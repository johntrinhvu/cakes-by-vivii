import Logo from "../Logo/Logo";
import { FaLocationDot, FaEnvelope, FaInstagram } from "react-icons/fa6";


export default function Footer() {
    return (
        <footer className="w-full flex flex-col mt-auto">
            <span className="w-full top-rectangle h-1.5 mb-2.5 shadow-md shadow-zinc-400"></span>

            <div className="flex justify-between middle-rectangle w-full py-6">
                <div className="ml-4 sm:ml-6 md:ml-10">
                    <Logo />
                </div>

                <div className="mt-1.5 sm:mt-1 flex flex-col mr-2 sm:mr-6 md:mr-10 text-sm sm:text-md md:text-lg">
                    <div className="flex">
                        <FaLocationDot className="mt-1 mr-2" />
                        <p>Annandale, Virginia, U.S.</p>
                    </div>

                    <div className="flex">
                        <FaEnvelope className="mt-1.5 mr-2" />
                        <p className="mt-0.5 md:mt-0">cakesbyvivii@gmail.com</p>
                    </div>

                    <div className="flex">
                        <FaInstagram className="mt-1.5 mr-2" />
                        <p className="mt-0.5 md:mt-0">@cakesbyvivii</p>
                    </div>
                </div>

            </div>
        </footer>
    );
}