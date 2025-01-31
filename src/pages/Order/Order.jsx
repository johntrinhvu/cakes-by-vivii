import Title from "../../components/Title/Title";

export default function Order() {
    return (
        <div className="flex flex-col">
            {/* The top statement */}
            <div className="mt-56 w-full flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center text-black py-2 sm:pb-4 md:pb-5 xl:pb-6 xl:mt-14 sm:mt-5 md:mt-12 md:mb-4 tracking-wide sm:tracking-wider md:tracking-widest">
                    <h1 className="text-md sm:text-lg md:text-xl">Please note:</h1>
                    <p className="text-center text-xs sm:text-sm md:text-md xl:text-lg">Submitting this form does NOT confirm your order. Please allow 1-2 business days for us to review your request and confirm your order via email. Thank you for your patience!</p>

                </div>
                <span className="block w-full top-rectangle mb-2.5 h-1.5 shadow-md shadow-zinc-400"></span>
            </div>

            
        </div>
    );
}